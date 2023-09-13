import React from "react";
import Option from "./Option";

function Question({ ques, index }) {
  const { id, question, options, selectedOption } = ques;
  return (
    <div>
      <p className="question">
        {index + 1}
        {". "}
        {question}
      </p>
      {options.map((option, ind) => {
        return (
          <Option
            key={ind}
            option={option}
            id={id}
            selectedOption={selectedOption}
          />
        );
      })}
      <hr style={{ marginTop: "30px" }} />
    </div>
  );
}

export default Question;
