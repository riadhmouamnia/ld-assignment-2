import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import AuthWrapper from "../Layout/AuthWrapper";
import Cover from "./components/Cover";
import Form from "./components/Form";

function Login() {
  const [authState, setAuthState] = React.useState<{
    idle: boolean;
    isAuthFailure?: boolean;
  }>({
    idle: true,
    isAuthFailure: false,
  });

  const onSnackBarClose = () => setAuthState({ idle: true });

  return (
    <AuthWrapper
      cover={<Cover />}
      title="Login"
      subTitle="Thanks to come back on coraly"
    >
      <Form setAuthState={setAuthState} />
      <Box width="100%" mt={2} display="flex" gap={1}>
        <Typography>Don't you have an account?</Typography>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Typography
            fontWeight="bold"
            color="action.active"
            sx={{ textDecoration: "none" }}
          >
            Register
          </Typography>
        </Link>
      </Box>
      <Snackbar
        open={!authState.idle && !authState.isAuthFailure}
        autoHideDuration={6000}
        onClose={onSnackBarClose}
      >
        <Alert
          onClose={onSnackBarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Loged in to workspace successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={!authState.idle && authState.isAuthFailure}
        autoHideDuration={6000}
        onClose={onSnackBarClose}
      >
        <Alert
          severity="error"
          sx={{ width: "100%" }}
          onClose={onSnackBarClose}
        >
          email and password dosn't exist!
        </Alert>
      </Snackbar>
    </AuthWrapper>
  );
}

export default Login;
