import React, { useEffect } from "react";
import { checkScore, fetchQuestions, storeQuestions } from "./questionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "../home/homeSlice";
import Question from "./Question";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import { newResult } from "../history/historySlice";

function QuestionsPage() {
  const { showSideBar } = useSelector((state) => state.home);
  const { questions, loading } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const solutionsPage = (id) => {
    navigate({
      pathname: "/solution",
      search: createSearchParams({
        id: id,
      }).toString(),
    })
  }

  useEffect(() => {
    dispatch(fetchQuestions(id));
    dispatch(hideSideBar());
  }, [dispatch,id]);

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
             solutionsPage(id);
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