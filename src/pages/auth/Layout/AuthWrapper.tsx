import React from "react";
import { Alert, Box, Grid, Snackbar, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import logo from "../../../assets/logo.svg";

type AuthWrapperProps = {
  title: String;
  subTitle: string;
  askUserToTakeAction?: string;
  actionLink?: string;
  children: any;
  cover: React.ReactNode;
};

function AuthWrapper({
  children,
  cover,
  title,
  subTitle,
  askUserToTakeAction,
  actionLink,
}: AuthWrapperProps) {
  const [valid, setValid] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<boolean>(false);
  const handleClick = () => {
    setValid(true);
  };

  const handleClose = () => {
    setValid(false);
  };
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
          }}
        >
          <Box width="100%">
            <img src={logo} alt="logo" width="44px" />
          </Box>
          <Box width="100%">
            <Typography variant="h6" fontWeight="bold" mt={8}>
              {title}
            </Typography>
            <Typography variant="body1" color="#6F6D7B">
              {subTitle}
            </Typography>
          </Box>
          {children}
          <Box width="100%" mt={2} display="flex" gap={1}>
            <Typography>{askUserToTakeAction}</Typography>
            <Typography
              fontWeight="bold"
              color="secondary"
              component="a"
              href="/signup"
              sx={{ textDecoration: "none" }}
            >
              {actionLink}
            </Typography>
          </Box>
        </Box>
        <Snackbar open={valid} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Loged in to workspace successfully!
          </Alert>
        </Snackbar>
      </Grid>
      <Grid item xs={false} sm={4} md={7}>
        {cover}
      </Grid>
    </Grid>
  );
}

export default AuthWrapper;
