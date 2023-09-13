import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('categories'))||[
  { id: 10, category: "Books", selectedId: false },
  { id: 18, category: "Computers", selectedId: false },
  { id: 9, category: "General Knowledge", selectedId: false },
  { id: 20, category: "Mythology", selectedId: false },
  { id: 17, category: "Science", selectedId: false },
  { id: 21, category: "Sports", selectedId: false },
  { id: 0, category: "Random Quiz", selectedId: false },
];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.forEach((cat) => {
        if (cat.id === action.payload) {
          cat.selectedId = true;
        } else {
          cat.selectedId = false;
        }
      });
      localStorage.setItem('categories',JSON.stringify(state))
    },
  },
});

export default categorySlice.reducer;

export const { selectCategory } = categorySlice.actions;