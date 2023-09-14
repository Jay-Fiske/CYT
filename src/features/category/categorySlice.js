import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('categories')) || [
  { id: 10, category: "Books" },
  { id: 18, category: "Computers" },
  { id: 9, category: "General Knowledge" },
  { id: 20, category: "Mythology" },
  { id: 17, category: "Science" },
  { id: 21, category: "Sports" },
  { id: 0, category: "Random Quiz" },
];

const categorySlice = createSlice({
  name: "category",
  initialState,
});

export default categorySlice.reducer;