import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

const Store = configureStore({
  reducer: {
    style: themeReducer,
  },
});

export default Store;
