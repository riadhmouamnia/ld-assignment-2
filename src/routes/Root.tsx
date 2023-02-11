import React from "react";
import Dashboard from "../pages/Dashboard";
import { useSelector } from "react-redux";
import Login from "../pages/auth/Login";

function Root() {
  const { success } = useSelector((state: object) => state.auth);
  console.log(success);

  return <>{success ? <Dashboard /> : <Login />}</>;
}

export default Root;
