import { Box, IconButton, Typography } from "@mui/material";
import { DrawerHeader } from "pages/Dashboard/components/DrawerComponent/styles/drawerStyles";
import Menu from "assets/Menu.svg";

type Props = {
  handleDrawerClose: () => void;
  open: boolean;
};

function DrawerHeaderComponent({ handleDrawerClose, open }: Props) {
  return (
    <>
      <DrawerHeader>
        {open ? <Typography variant="h6">Coraly Academy</Typography> : null}
        <IconButton onClick={handleDrawerClose}>
          <Box component="img" src={Menu} />
        </IconButton>
      </DrawerHeader>
    </>
  );
}

export default DrawerHeaderComponent;
