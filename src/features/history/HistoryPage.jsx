import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSideBar } from "../home/homeSlice";

function HistoryPage() {
  const { results } = useSelector((state) => state.history);
  const { showSideBar } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(hideSideBar())
  },[])
  const showResults = results.map((result) => (
    <div style={{margin:"10px 0",paddingBottom:"10px",borderBottom:"1px solid "}}>
      <h2>Category : {result.category}</h2>
      <h2>Score : {result.score}</h2>
    </div>
  ));
  return <div
  onClick={()=>{dispatch(hideSideBar())}}
  className="page"
  style={showSideBar ? { opacity: "0.3" } : {}}>{showResults}</div>;
}

export default HistoryPage;