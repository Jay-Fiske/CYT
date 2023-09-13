import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import he from "he";

const initialState = {
  loading: false,
  questions: [],
  score: 0,
  error: "",
};

const fetchQuestions = createAsyncThunk("questions.fetchQuestions", (id) => {
  return axios
    .get(`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`)
    .then((response) => response.data.results)
});

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    selectOption: (state, action) => {
      const { id, option } = action.payload;
      state.questions.find((ques) => ques.id === id).selectedOption = option;
    },
    checkScore: (state) => {
      state.score = 0;
      state.questions.forEach((question) => {
        if (question.correct_answer === question.selectedOption) {
          state.score++;
        }
      });
    },
    storeQuestions: (state) => {
      localStorage.setItem('questions',JSON.stringify(state.questions))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.map((ques) => {
          const incorrectOptions = ques.incorrect_answers.map((inc) =>
            he.decode(inc)
          );
          const options = incorrectOptions
            .concat(he.decode(ques.correct_answer))
            .sort();
          return {
            id: nanoid(),
            question: he.decode(ques.question),
            correct_answer: he.decode(ques.correct_answer),
            incorrect_answer: ques.incorrect_answers,
            options,
            selectedOption: "",
          };
        });
        state.error = "";
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.questions = [];
        state.error = action.error.message;
      });
  },
});

export default questionsSlice.reducer;
export const { selectOption, checkScore, storeQuestions } = questionsSlice.actions;
export { fetchQuestions };
