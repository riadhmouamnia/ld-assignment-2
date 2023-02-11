import { User, LOGIN_SUCCESS } from "./types";

export const loginSuccess = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});
