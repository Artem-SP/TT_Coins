import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import coin from "./coinsSlice";

export const store = configureStore({
  reducer: {
    coin,
  },
  devTouls: true,
});

export const useStoreDispatch = () => useDispatch();
