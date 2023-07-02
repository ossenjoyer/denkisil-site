import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "style",
  initialState: {
    theme: "ligth",
  },
  reducers: {
    darkTheme: (state) => {
      state.theme = "dark";
    },
    ligthTheme: (state) => {
      state.theme = "ligth";
    },
  },
});

export const { darkTheme, ligthTheme } = themeSlice.actions;

export default themeSlice.reducer;
