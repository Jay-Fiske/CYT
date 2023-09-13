import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import questionsReducer from "../features/quiz/questionsSlice";
import homeReducer from "../features/home/homeSlice";
import historyReducer from "../features/history/historySlice";

const store = configureStore({
  reducer: {
    home: homeReducer,
    category: categoryReducer,
    questions: questionsReducer,
    history: historyReducer,
  },
});

export default store;