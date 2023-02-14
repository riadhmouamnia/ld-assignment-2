import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import stringAvatar from "./stringAvatar";
import Events from "../../../assets/Events.svg";
import Bell from "../../../assets/Bell.svg";
import Avatar from "@mui/material/Avatar";

import { drawerWidth } from "./Layout";
import { useAppSelector } from "../../../redux/hooks";

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
  const { userInfo } = useAppSelector(({ auth }) => auth);
  return (
    <AppBar open={open} elevation={0}>
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Process
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Box component="img" src={Bell} width="20px" height="20px" />
            <Box component="img" src={Events} width="26px" height="26px" />
            <Avatar
              {...stringAvatar(`${userInfo?.name} ${userInfo?.surname}`)}
              sx={{
                bgcolor: "#96E7DE",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              variant="square"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopAppBar;
