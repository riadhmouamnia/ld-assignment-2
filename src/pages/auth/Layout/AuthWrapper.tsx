import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import logo from "assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

type AuthWrapperProps = {
  title: String;
  subTitle: string;
  children: any;
  cover: React.ReactNode;
};

function AuthWrapper({ children, cover, title, subTitle }: AuthWrapperProps) {
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item px={3} xs={12} sm={8} md={5} component={Paper} square>
        <Box
          sx={{
            my: 8,
            mx: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            width: "70%",
          }}
        >
          <Box width="100%">
            <img src={logo} alt="logo" width="44px" />
          </Box>
          <Box width="100%">
            <Typography
              variant="h6"
              color="text.primary"
              fontWeight="bold"
              mt={8}
            >
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {subTitle}
            </Typography>
          </Box>
          {children}
        </Box>
      </Grid>
      <Grid item xs={false} sm={4} md={7}>
        {cover}
      </Grid>
    </Grid>
  );
}

export default AuthWrapper;
