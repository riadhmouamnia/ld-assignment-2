import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  loading: boolean;
  userInfo: {
    email: string;
    name: string;
  };
  error: boolean | null;
  success: boolean;
} = {
  loading: false,
  userInfo: {
    email: "",
    name: "",
  }, // for user object
  error: null,
  success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;
