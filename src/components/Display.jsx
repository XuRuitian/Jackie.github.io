import React from "react"; // React 라이브러리를 가져옴

// 현재 입력된 숫자와 계산 결과를 화면에 표시하는 역할
const Display = ({ input, result }) => {
  return (
    <div className="display">
      <div className="display-input">{input || "0"}</div>
      <div className="display-result">{result}</div>
    </div>
  );
};

// Display 컴포넌트를 외부에서 사용할 수 있도록 export
export default Display;