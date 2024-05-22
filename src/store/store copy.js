import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import coins from "./coinsSlice";

export const store = configureStore({
  reducer: {
    coins,
    // poke,
  },
  devTouls: true,
});

export const useStoreDispatch = () => useDispatch();
