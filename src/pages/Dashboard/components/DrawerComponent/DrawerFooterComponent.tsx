import { Box, IconButton, Typography } from "@mui/material";
import { DraweFooter } from "pages/Dashboard/components/DrawerComponent/styles/drawerStyles";
import Logo from "assets/logo.svg";

function DraweFooterComponent() {
  return (
    <>
      <DraweFooter>
        <IconButton>
          <Box
            component="img"
            src={Logo}
            sx={{ width: "21.68", height: "22.16px" }}
          />
        </IconButton>
      </DraweFooter>
    </>
  );
}

export default DraweFooterComponent;
