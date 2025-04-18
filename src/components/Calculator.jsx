// Calculator.jsx
import React from "react"; // React 라이브러리 임포트
import useCalculatorLogic from "./useCalculatorLogic"; // 계산 로직 커스텀 훅 임포트
import Display from "./Display"; // 디스플레이 컴포넌트 임포트
import Buttons from "./Buttons"; // 버튼 컴포넌트 임포트

// Calculator 컴포넌트: 계산기의 전체적인 조립을 담당
const Calculator = () => {
  // useCalculatorLogic() 훅 실행하여 계산에 필요한 상태와 함수 가져옴
  const { input, result, handleClick, calculateResult, clearInput } = useCalculatorLogic();

  return (
    <div className="calculator-page-container">
      <h1>계산기</h1>
      <div className="calculator-container">
        <div className="calculator">
          {/* 화면(디스플레이) - 현재 입력 값과 결과 값을 표시 */}
          <Display input={input} result={result} />
          
          {/* 버튼 컴포넌트 - 버튼 클릭 시 동작을 결정하는 로직 포함 */}
          <Buttons
            onButtonClick={(value) => {
              value === "="
                ? calculateResult() // "=" 버튼 클릭 시 계산 실행
                : value === "AC"
                ? clearInput() // "AC" 버튼 클릭 시 입력값 및 결과 초기화
                : handleClick(value); // 그 외 숫자/연산자 버튼 클릭 시 입력값 추가
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator; // 외부에서 사용할 수 있도록 export