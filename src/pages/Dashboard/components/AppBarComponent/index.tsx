import {
  Box,
  Breadcrumbs,
  Toolbar,
  Typography,
  Link as MUILink,
} from "@mui/material";
import stringAvatar from "pages/Dashboard/components/AppBarComponent/stringAvatar";
import Events from "assets/Events.svg";
import Avatar from "@mui/material/Avatar";

import { useAppSelector } from "redux/hooks";
import { Link, useParams } from "react-router-dom";
import { BellIcon, ChevronRight } from "components/icons";
import {
  AppBar,
  AppBarContainer,
  AppBarProps,
  AvatarStyles,
  pathStyles,
} from "pages/Dashboard/components/AppBarComponent/AppBarStyles";
import IconButton from "@mui/material/IconButton";

function AppBarComponent({ open }: AppBarProps) {
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const { id } = useParams();
  return (
    <AppBar open={open} elevation={0}>
      <Toolbar>
        <AppBarContainer>
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
            <IconButton>
              <BellIcon />
            </IconButton>
            <IconButton>
              <Box component="img" src={Events} width="26px" height="26px" />
            </IconButton>
            <Avatar
              {...stringAvatar(`${userInfo?.name} ${userInfo?.surname}`)}
              sx={AvatarStyles}
              variant="square"
            />
          </Box>
        </AppBarContainer>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;
