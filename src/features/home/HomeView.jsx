import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "./homeSlice";
import { useEffect } from "react";

function HomeView() {
  const {showSideBar} = useSelector(state => state.home)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(hideSideBar())
  },[])
  return (
    <div>
      <div
        onClick={()=>{dispatch(hideSideBar())}}
        className="page"
        style={showSideBar ? { opacity: "0.3" } : {}}
      >
        <h1>Check your knowledge by attempting quizzes on CVT</h1>
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

export default HomeView;