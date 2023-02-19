import {
  Box,
  Breadcrumbs,
  Toolbar,
  Typography,
  Link as MUILink,
} from "@mui/material";
import { AppBar, AppBarProps, pathStyles } from "./styles/AppBarStyles";
import stringAvatar from "./stringAvatar";
import Events from "../../../../assets/Events.svg";
import Bell from "../../../../assets/Bell.svg";
import Avatar from "@mui/material/Avatar";

import { useAppSelector } from "../../../../redux/hooks";
import { Link, useParams } from "react-router-dom";
import { ChevronRight } from "components/icons";

function AppBarComponent({ open }: AppBarProps) {
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const { id } = useParams();
  return (
    <AppBar open={open} elevation={0}>
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* {id ? (
            <Box sx={pathStyles}>
              <Typography variant="h6" sx={pathStyles.greyText}>
                
              </Typography>
              <ChevronRight />
              <Typography variant="h6" sx={pathStyles.primaryText}>
                Process {id}
              </Typography>
            </Box>
          ) : (
            <Typography variant="h6" sx={pathStyles.primaryText}>
              Process
            </Typography>
          )} */}

          <Breadcrumbs
            separator={<ChevronRight fontSize="small" />}
            aria-label="breadcrumb"
          >
            <MUILink component={Link} underline="none" color="inherit" to="/">
              <Typography
                variant="h6"
                sx={id ? pathStyles.greyText : pathStyles.primaryText}
              >
                Process
              </Typography>
            </MUILink>
            {id && (
              <Typography variant="h6" sx={pathStyles.primaryText}>
                Process {id}
              </Typography>
            )}
          </Breadcrumbs>

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
