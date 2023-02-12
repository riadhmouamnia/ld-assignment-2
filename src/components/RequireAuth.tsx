import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

function RequireAuth() {
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const location = useLocation();
  return !!userInfo ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
