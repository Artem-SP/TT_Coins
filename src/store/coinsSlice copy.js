import { createSlice } from "@reduxjs/toolkit";

// import { getAll } from './getAll'
// import { getSinglePoke } from './getSinglePoke'
// import { getTypes } from './getTypes'
// import { getByCategory } from './getByCategory'

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
  "coinsAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.coindesk.com/v1/bpi/currentprice.json`
      );

      console.log(data);
      return data.results;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);

const initialState = {
  //   allPokemon: undefined,
  //   singlePoke: {},
  //   types: null,
  //   allByCategory: [],
  //   status: null,
  //   error: null,
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    coins,
  },

  extraReducers(builder) {
    builder.addCase(getAll.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
  },
});

export default coinsSlice.reducer;
