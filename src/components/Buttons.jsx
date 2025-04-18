// Buttons.jsx
const Buttons = ({ onButtonClick }) => {
  const buttons = [
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
    ["(", ")", "x", "AC"]
  ];

  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((btn) => (
            <button
              key={btn}
              className={btn === "AC" ? "ac-button" : ""}
              onClick={() => onButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      ))}
      <div className="button-row">
        <button className="scientific-button" onClick={() => onButtonClick('∫(')}>∫</button>
        <button className="scientific-button" onClick={() => onButtonClick('x²')}>x²</button>
        <button className="scientific-button" onClick={() => onButtonClick('dx')}>dx</button>
        <button className="scientific-button" onClick={() => onButtonClick('π')}>π</button>
        <button className="scientific-button" onClick={() => onButtonClick('d/dx(')}>d/dx</button>
      </div>
    </div>
  );
};

export default Buttons; 