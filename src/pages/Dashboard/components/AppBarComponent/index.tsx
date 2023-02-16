import { Box, Toolbar, Typography } from "@mui/material";
import { AppBar, AppBarProps } from "./styles/AppBarStyles";
import stringAvatar from "./stringAvatar";
import Events from "../../../../assets/Events.svg";
import Bell from "../../../../assets/Bell.svg";
import Avatar from "@mui/material/Avatar";

import { useAppSelector } from "../../../../redux/hooks";

function AppBarComponent({ open }: AppBarProps) {
  const { userInfo } = useAppSelector(({ auth }) => auth);
  return (
    <AppBar open={open} elevation={0}>
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" fontWeight="bold" color="text.primary">
            Process
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Box component="img" src={Bell} width="20px" height="20px" />
            <Box component="img" src={Events} width="26px" height="26px" />
            <Avatar
              {...stringAvatar(`${userInfo?.name} ${userInfo?.surname}`)}
              sx={{
                bgcolor: "#96E7DE",
                borderRadius: "8px",
                width: "40px",
                height: "40px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              variant="square"
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
