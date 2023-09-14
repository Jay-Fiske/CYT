import React from "react";
import { useSelector } from "react-redux";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { selectCategory } from "./categorySlice";

function Categories() {
  const categories = useSelector((state) => state.category);
  const navigate = useNavigate();
  const questionsPage = (id) => {
    navigate({
      pathname: "/questions",
      search: createSearchParams({
        id: id,

      }).toString(),
    })
  }
  const categoriesList = categories.map((category) => (
    <li key={category.id} onClick={() => questionsPage(category.id)}>
      {category.category}
    </li>
  ));

  return (
    <div>
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default Categories;