import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"
import { InitialState, User } from "./types";

const initialState: InitialState = {
  users: [],
  error: null,
  loading: false,
};


export const fetchUser = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get<User[]>("http://localhost:4000/users")
      const users = res.data;

      return thunkAPI.fulfillWithValue(users);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default usersSlice.reducer;
