import React from "react";

function QuizPage(props) {
    return (
      <div>
        <div
          onClick={props.handleChange}
          className="page"
          style={props.showSideBar ? { opacity: "0.3" } : {}}
        >
          <h1>{props.header}</h1>
          <hr className="hr" />
          <p>
            Choose a category in which to play the Trivia Quiz from General
            Knowledge, Books, Entertainment, History, Mythology, Sports and
            Science.
          </p>
          <p>
            Answer 10 multiple-choice quiz questions as quickly and as accurately
            as possible in each themed game. Your score will be displayed on
            completion of the game.
          </p>
          <p>Questions are updated regularly.</p>
        </div>
      </div>
    );
  }
 
  export default QuizPage;