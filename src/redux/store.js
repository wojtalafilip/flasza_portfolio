import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/nav-slice";

export const store = configureStore({
  reducer: { navReducer },
});
