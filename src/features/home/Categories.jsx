import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCategory } from "../category/categorySlice";

function Categories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const categoriesList = categories.map((category) => (
    <li
      key={category.id}
      onClick={() => {
        dispatch(selectCategory(category.id));
      }}
    >
      <Link to="/questions" reloadDocument>
        {category.category}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{categoriesList}</ul>
    </div>
  );
}

export default Categories;