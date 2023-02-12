import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cacheService } from "../../../utils/cacheService";

export type UserInfo = {
  id: number;
  email: string;
  name: string;
  surname: string;
  workspace: string;
};
type InitialState = {
  userInfo?: UserInfo;
};
const user = cacheService.loadState("user");
const initialState: InitialState = {
  ...user,
  // for monitoring the registration process.
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserInfo>) {
      state.userInfo = action.payload;
    },
    logout(state) {
      state.userInfo = undefined;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
