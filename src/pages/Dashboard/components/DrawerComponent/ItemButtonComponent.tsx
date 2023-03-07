import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { StyledIcon } from "pages/Dashboard/components/DrawerComponent/styles/drawerStyles";

type Props = {
  open: boolean;
  handleLogout: () => void;
  element: any;
};

function ItemButtonComponent({ open, handleLogout, element }: Props) {
  return (
    <>
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
        <ListItemText primary={element.text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </>
  );
}

export default ItemButtonComponent;
