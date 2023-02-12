import React from "react";
import { Button } from "@mui/material";
import { cacheService } from "../../utils/cacheService";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div>
      Dashboard
      <Button
        onClick={() => {
          cacheService.clear("user");
          dispatch(logout());
          navigate("/login");
        }}
      >
        logout
      </Button>
    </div>
  );
}

export default Dashboard;
