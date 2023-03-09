import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

export const fetchUser = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetchUser("http://localhost:4000/users");
      const users = await res.json();

      if (users.error) {
        return thunkAPI.rejectWithValue(users.error);
      }

      return thunkAPI.fulfillWithValue(users);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
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
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
  },
});

export default usersSlice.reducer;
