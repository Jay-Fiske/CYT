import React from "react";
function OptionSol({ option, id, selectedOption, correct_answer }) {
  return (
    <div
      className="options"
      style={
        option === correct_answer
          ? { backgroundColor: "rgba(0,200,0,0.8)" }
          : option === selectedOption
          ? { backgroundColor: "rgba(255,30,30,0.8)" }
          : {}
      }
    >
      <p>
        <label>
          <input
            type="radio"
            value={option}
            name={id}
            checked={option === selectedOption}
            disabled
          />
          &nbsp;
          {option}
        </label>
      </p>
    </div>
  );
}

export default OptionSol;