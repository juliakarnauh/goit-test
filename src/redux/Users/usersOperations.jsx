import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6464a55c043c103502bee20d.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);