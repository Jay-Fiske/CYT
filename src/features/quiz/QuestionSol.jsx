import React from "react";
import OptionSol from "./OptionSol";

function QuestionSol({ ques, index }) {
  const { id, question, options, selectedOption,correct_answer } = ques;
  return (
    <div>
      <p className="question">
        {index + 1}
        {". "}
        {question}
      </p>
      {options.map((option, ind) => {
        return (
          <OptionSol
            key={ind}
            option={option}
            id={id}
            selectedOption={selectedOption}
            correct_answer = {correct_answer}
          />
        );
      })}
      <hr style={{ marginTop: "30px" }} />
    </div>
  );
}

export default QuestionSol