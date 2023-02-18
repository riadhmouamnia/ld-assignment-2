import { Box, IconButton, Typography } from "@mui/material";
import { Logo } from "components/icons";
import { DraweFooter } from "pages/Dashboard/components/DrawerComponent/styles/drawerStyles";
import { useNavigate } from "react-router-dom";

function DraweFooterComponent() {
  const navigate = useNavigate();
  return (
    <>
      <DraweFooter>
        <IconButton onClick={() => navigate("/")}>
          <Logo />
        </IconButton>
      </DraweFooter>
    </>
  );
}

export default DraweFooterComponent;
