import React from "react";
import { Typography, Box } from "@mui/material";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import LD from "../../../assets/LD.svg";
import Menu from "../../../assets/Menu.svg";
import Apps from "../../../assets/Apps.svg";
import Groups from "../../../assets/Groups.svg";
import Files from "../../../assets/Files.svg";
import Database from "../../../assets/Database.svg";
import Share from "../../../assets/Share.svg";
import Dev from "../../../assets/Dev.svg";
import Network from "../../../assets/Network.svg";
import Support from "../../../assets/Support.svg";
import Logout from "../../../assets/Logout.svg";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/features/auth/authSlice";
import { cacheService } from "../../../utils/cacheService";
import { drawerWidth } from "./Layout";

const StyledIcon = styled(Icon)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "48px",
  height: "48px",
});

const draworElemnts = [
  {
    text: "Lasting Dynamics",
    icon: <Box component="img" src={LD} />,
    path: "#",
  },
  { text: "Apps", icon: <Box component="img" src={Apps} />, path: "#" },
  { text: "Teams", icon: <Box component="img" src={Groups} />, path: "#" },
  { text: "Files", icon: <Box component="img" src={Files} />, path: "#" },
  { text: "Database", icon: <Box component="img" src={Database} />, path: "#" },
  { text: "share", icon: <Box component="img" src={Share} />, path: "#" },
  { text: "development", icon: <Box component="img" src={Dev} />, path: "#" },
  { text: "Network", icon: <Box component="img" src={Network} />, path: "#" },
  {
    text: "Customer Support",
    icon: <Box component="img" src={Support} />,
    path: "#",
  },
  { text: "Logout", icon: <Box component="img" src={Logout} />, path: "#" },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: "white",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function SideDrawer({ open, setOpen }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    cacheService.clear("user");
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open ? <Typography variant="h6">Coraly Academy</Typography> : null}
          <IconButton onClick={handleDrawerClose}>
            <Box component="img" src={Menu} />
          </IconButton>
        </DrawerHeader>
        <List>
          {draworElemnts.map((element, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              {element.text === "Logout" ? (
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={handleLogout}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <StyledIcon>{element.icon}</StyledIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={element.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              ) : (
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 2 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <StyledIcon>{element.icon}</StyledIcon>
                  </ListItemIcon>
                  <ListItemText
                    primary={element.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

export default SideDrawer;
