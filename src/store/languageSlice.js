import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeAppLanguage: (state, language) => {
      state.lang = language;
    },
  },
});

export const { changeAppLanguage } = languageSlice.actions;

export default languageSlice.reducer;
