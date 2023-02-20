import AppBarComponent from "pages/Dashboard/components/AppBarComponent";
import DrawerComponent from "pages/Dashboard/components/DrawerComponent";
import DashBoardContainer from "pages/Dashboard/components/DashBoardContainer";
import { useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

function Layout() {
  const [open, setOpen] = useState<boolean>(false);
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const location = useLocation();
  return !!userInfo ? (
    <DashBoardContainer>
      <AppBarComponent open={open} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <Outlet />
    </DashBoardContainer>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default Layout;
