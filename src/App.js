import "./App.css";
import HomeView from "./features/home/HomeView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TitleBar from "./features/home/TitleBar";
import SideBar from "./features/home/SideBar";
import PageNotFound from "./features/PageNotFound";
import QuestionsPage from "./features/quiz/QuestionsPage";
import { useSelector } from "react-redux";
import QuestionsPageSol from "./features/quiz/QuestionsPageSol";
import HistoryPage from "./features/history/HistoryPage";

function App() {
  const { showSideBar } = useSelector((state) => state.home);

  return (
    <div className="App">
      <BrowserRouter>
        <TitleBar />
        {showSideBar && <SideBar />}

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/solution" element={<QuestionsPageSol />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;