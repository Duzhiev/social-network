import { configureStore } from "@reduxjs/toolkit";
import users from "../features/usersSlice";

export const store = configureStore({
  reducer: users,
});
