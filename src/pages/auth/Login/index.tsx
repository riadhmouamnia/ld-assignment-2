import { Alert, Snackbar } from "@mui/material";
import React from "react";
import AuthWrapper from "../Layout/AuthWrapper";
import Cover from "./components/Cover";
import Form from "./components/Form";

function index() {
  const [valid, setValid] = React.useState<boolean>(false);
  const [notValid, setNotValid] = React.useState<boolean>(false);

  const handleClose = () => {
    setValid(false);
    setNotValid(false);
  };

  return (
    <AuthWrapper
      cover={<Cover />}
      title="Login"
      subTitle="Thanks to come back on coraly"
      askUserToTakeAction="Don't your have an account?"
      actionLink="Sign up now"
      link="/register"
    >
      <Form setValid={setValid} setNotValid={setNotValid} />
      <Snackbar open={valid} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Loged in to workspace successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={notValid} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          email and password dosn't exist!
        </Alert>
      </Snackbar>
    </AuthWrapper>
  );
}

export default index;
