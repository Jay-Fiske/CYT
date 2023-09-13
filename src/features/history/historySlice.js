import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStored: false,
  results: JSON.parse(localStorage.getItem("history")) || [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    storeHistory: (state, action) => {
      if (state.isStored === false) {
        state.results.push(action.payload);
        localStorage.setItem("history", JSON.stringify(state.results));
        state.isStored = true;
      }
    },
    newResult: (state) => {
        if (state.isStored){
            state.isStored = false
        }
    }
  },
});

export default historySlice.reducer;

export const { storeHistory,newResult } = historySlice.actions;