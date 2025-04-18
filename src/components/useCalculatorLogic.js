// useCalculatorLogic.js
import { useState } from 'react';
import * as math from 'mathjs';

// 다항식 적분 함수 정의
const simpleIntegral = (expr, variable) => {
  try {
    const cleanedExpr = expr
      .replace(/\s+/g, '')          // 공백 제거
      .replace(/\(([^)]+)\)/g, '$1') // 괄호 제거
      .replace(/²/g, '^2');         // 제곱 기호 변환

    const termRegex = /([+-]?)(\d*\.?\d*)(x?)(?:\^(\d+))?/g;
    let terms = [];
    let hasValidTerms = false;

    cleanedExpr.replace(termRegex, (match, sign, coeff, x, power) => {
      if (!x || variable !== 'x') return; // x 변수만 처리
      hasValidTerms = true;

      const effectiveSign = sign || '+';
      const baseCoeff = coeff ? parseFloat(coeff) : 1;
      const n = power ? parseFloat(power) : 1;
      
      // 특수 사례 처리
      if (n === -1) return; 
      
      const newCoeff = baseCoeff / (n + 1);
      const formattedCoeff = Number.isInteger(newCoeff)
        ? newCoeff
        : newCoeff.toFixed(3).replace(/\.?0+$/, '');
      terms.push(`${effectiveSign}${Math.abs(formattedCoeff)}x^${n + 1}`);
    });

    if (!hasValidTerms) return '해당 적분을 계산할 수 없습니다';
    // 유사항 통합 및 포맷팅
    const result = terms.join('')
      .replace(/(\+-)|(-\+)/g, '-')  // 기호 통합
      .replace(/^\+/, '')            // 시작 부분 + 제거
      .replace(/(\d)x/g, '$1x');     // 표준 수학 표현 형식화

    return result ? `${result} + C` : '적분 계산에 실패했습니다';

  } catch (error) {
    console.error('예비 적분 오류:', error);
    return '적분 계산 실패';
  }
};

const useCalculatorLogic = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === 'π') {
      setInput(prev => prev + Math.PI.toFixed(5));
    } else if (value === 'x²') {
      setInput(prev => prev + '^2');
    } else if (value === 'dx') {
      setInput(prev => prev + 'dx');
    } else if (value === '∫(') {
      setInput(prev => prev + '∫');
    } else {
      setInput(prev => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      // 미분 계산 처리
      if (input.includes('d/dx')) {
        const expr = input.replace('d/dx(', '').replace(')', '');
        try {
          const derivative = math.derivative(expr, 'x').toString();
          setResult(`도함수: ${derivative}`);
        } catch (error) {
          setResult('미분 계산 실패');
        }
        return;
      }

      // 입력 표현식 전처리
      let processedInput = input
        .replace(/x²/g, 'x^2')
        .replace(/∫\s*\(?([^d]*?)\)?\s*dx/g, (_, expr) => {
          return `integrate(${expr.trim()},x)`;
        });

      try {
        // 
        if (processedInput.includes('integrate')) {
          const matchResult = processedInput.match(/integrate\((.*?),x\)/);
          
          if (!matchResult?.[1]) {
            throw new Error('잘못된 적분 표현식 형식입니다');
          }

          const expr = matchResult[1];
          console.log('적분 계산 시도:', expr);
          
          let integralResult;
          try {
            const node = math.parse(expr);
            integralResult = node.integrate('x').toString();
          } catch (mathError) {
            console.warn('예비 적분 방법을 사용하다:', mathError);
            integralResult = simpleIntegral(expr, 'x');
          }
          
          setResult(`∫${expr}dx = ${integralResult}`);
          return;
        }

        // 일반 수학 계산
        const evaluated = math.evaluate(processedInput);
        setResult(evaluated.toString());

      } catch (error) {
        console.error('계산 오류', error);
        setResult(`오류: ${error.message.substring(0, 30)}`);
      }

    } catch (error) {
      console.error('전역 오류:', error);
      setResult("시스템 오류");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return { input, result, handleClick, calculateResult, clearInput };
};

export default useCalculatorLogic;