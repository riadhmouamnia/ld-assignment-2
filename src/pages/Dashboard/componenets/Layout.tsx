import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";
import SideDrawer from "./SideDrawer";
import TopAppBar from "./TopAppBar";

export const drawerWidth = 240;

interface Props {
  children?: React.ReactNode;
}

const StyledBox = styled(Box)({
  backgroundColor: "#F5F5F5",
  height: "100vh",
  display: "flex",
});

function Layout({ children }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <StyledBox>
      <TopAppBar open={open} />
      <SideDrawer open={open} setOpen={setOpen} />
      {children}
    </StyledBox>
  );
}

export default Layout;
