import React from "react";
import { Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

import { drawerWidth } from "./Layout";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }: any) => ({
  "& .MuiAppBar-paper": {
    backgroundColor: "#eee",
  },
  width: `calc(100% - ${65}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function TopAppBar({ open }: AppBarProps) {
  return (
    <AppBar open={open} elevation={0}>
      <Toolbar>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Process
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
