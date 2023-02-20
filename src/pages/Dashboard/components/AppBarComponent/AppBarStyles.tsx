import styled from "@emotion/styled";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { drawerWidth } from "../DrawerComponent/styles/drawerStyles";

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export const AppBar = styled(MuiAppBar, {
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

export const pathStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  greyText: {
    color: "#83828E",
    fontWeight: "bold",
  },
  primaryText: {
    fontWeight: "bold",
    color: "#312E43",
  },
};

export const AvatarStyles = {
  bgcolor: "#96E7DE",
  borderRadius: "8px",
  width: "40px",
  height: "40px",
  fontSize: "16px",
  fontWeight: "bold",
};

export const AppBarContainer = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
