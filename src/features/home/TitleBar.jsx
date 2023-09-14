import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "./homeSlice";
import { Link, createSearchParams, useNavigate } from "react-router-dom";

function TitleBar() {
  const { showSideBar } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const randomPage = () => {
    navigate({
      pathname: "/questions",
      search: createSearchParams({
        id: 0,
      }).toString(),
    })
  }
  return (
    <div className="title-bar">
      {showSideBar ? (
        <FontAwesomeIcon
          icon={faXmark}
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(toggleSideBar());
          }}
        />
      )}
      <div style={{ width: "20px" }}></div>
      <h2>
        {" "}
        <Link to={"/"}> Check Your Trivia</Link>{" "}
      </h2>
      <ul className="navbar">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li onClick={() => randomPage()}>
            Random Quiz
        </li>
        <li>
          <Link to={"/history"}>History</Link>
        </li>
      </ul>
    </div>
  );
}

export default TitleBar;