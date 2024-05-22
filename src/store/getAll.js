import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk(
  "coinsAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.coindesk.com/v1/bpi/currentprice.json`,
        { next: { revalidate: 5 } }
      );
      return data;
    } catch (error) {
      rejectWithValue(error.massage);
    }
  }
);
