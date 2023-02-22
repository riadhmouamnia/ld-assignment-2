import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StyledIcon, Drawer } from "./styles/drawerStyles";
import { draworElemnts } from "./drawerElemnts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hooks";
import { logout } from "../../../../redux/features/auth/authSlice";
import { cacheService } from "../../../../utils/cacheService";
import DrawerHeaderComponent from "./DrawerHeaderComponent";
import DraweFooterComponent from "./DrawerFooterComponent";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function DrawerComponent({ open, setOpen }: Props) {
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
        <DrawerHeaderComponent
          handleDrawerClose={handleDrawerClose}
          open={open}
        />
        <List>
          {draworElemnts.map((element, index) => (
            <ListItem key={index} disablePadding>
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
          <DraweFooterComponent />
        </List>
      </Drawer>
    </div>
  );
}

export default DrawerComponent;
