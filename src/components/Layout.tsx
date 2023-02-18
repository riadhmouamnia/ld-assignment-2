import AppBarComponent from "pages/Dashboard/components/AppBarComponent";
import DrawerComponent from "pages/Dashboard/components/DrawerComponent";
import DashBoardContainer from "pages/Dashboard/components/DashBoardContainer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <DashBoardContainer>
      <AppBarComponent open={open} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <Outlet />
    </DashBoardContainer>
  );
}

export default Layout;
