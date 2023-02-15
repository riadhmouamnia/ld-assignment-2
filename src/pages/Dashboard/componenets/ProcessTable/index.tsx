import { Box } from "@mui/material";
import React from "react";
import AppBarComponent from "../AppBarComponent";

function index() {
  return (
    <>
      <Box sx={{ height: "64px" }} p={20} />
      <AppBarComponent />
      <div>index</div>
    </>
  );
}

export default index;
