import React, { useEffect } from "react";
import { checkScore, fetchQuestions, storeQuestions } from "./questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "../home/homeSlice";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import { newResult } from "../history/historySlice";

function QuestionsPage() {
  const { showSideBar } = useSelector((state) => state.home);
  const { questions, loading } = useSelector((state) => state.questions);
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cat = categories.find((cat) => cat.selectedId === true);

  useEffect(() => {
    dispatch(fetchQuestions(cat.id));
    dispatch(hideSideBar());
  }, [cat.id, dispatch]);

  const questionsList = questions.map((q, index) => {
    return <Question ques={q} index={index} key={index} />;
  });
  return (
    <div
      onClick={() => {
        dispatch(hideSideBar());
      }}
      style={showSideBar ? { opacity: "0.3" } : {}}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {questionsList}
          <button
            className="submit"
            onClick={() => {
              dispatch(checkScore());
              dispatch(storeQuestions());
              dispatch(newResult());
              navigate("/solution");
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default QuestionsPage;