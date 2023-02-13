import React from "react";
import { Button } from "@mui/material";
import { cacheService } from "../../utils/cacheService";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import Processes from "./componenets/Processes";
import Layout from "./componenets/Layout";
import styled from "@emotion/styled";

const ToolBarSpace = styled("div")({
  display: "block",
  height: "64px",
  width: "100vw",
});

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <Layout>
      <Processes />
      {/* <Button
        onClick={() => {
          cacheService.clear("user");
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </Button> */}
    </Layout>
  );
}

export default Dashboard;
