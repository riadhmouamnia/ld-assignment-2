export interface User {
  email: string;
  password: string;
  [key: string]: any;
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
