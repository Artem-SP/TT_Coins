import { createSlice } from "@reduxjs/toolkit";

import { getAll } from "./getAll";

// import { getAll } from './getAll'
// import { getSinglePoke } from './getSinglePoke'
// import { getTypes } from './getTypes'
// import { getByCategory } from './getByCategory'

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  coins: {},
  chartName: "Bitcoin",
  timeUpdated: "",
  status: null,
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getAll.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.coins = action.payload.bpi;
        state.timeUpdated = action.payload.time.updated;
        state.status = "resolved";
      })
      .addCase(getAll.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

// export default coinsSlice.reducer;
export default coinSlice.reducer;
