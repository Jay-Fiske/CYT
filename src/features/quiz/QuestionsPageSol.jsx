import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "../home/homeSlice";
import QuestionSol from "./QuestionSol";
import { useEffect } from "react";
import { storeHistory } from "../history/historySlice";
import { useSearchParams } from "react-router-dom";

function QuestionsPageSol() {
  const { showSideBar } = useSelector((state) => state.home);
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get("id"));
  const categories = useSelector((state) => state.category);
  const cat = categories.find((cat) => cat.id === id);
  const questions = JSON.parse(localStorage.getItem("questions"));
  const score = useSelector((state) => state.questions.score);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(storeHistory({ category: cat.category, score }));
    dispatch(hideSideBar());
  }, [dispatch, cat.category, score]);

  const questionsList = questions.map((q, index) => {
    return <QuestionSol ques={q} index={index} key={index} />;
  });
  return (
    <div
      onClick={() => {
        dispatch(hideSideBar());
      }}
      style={showSideBar ? { opacity: "0.3" } : {}}
    >
      <h1 style={{ marginTop: "10px" }}>Score :{"  " + score}</h1>
      {questionsList}
    </div>
  );
}

export default QuestionsPageSol;