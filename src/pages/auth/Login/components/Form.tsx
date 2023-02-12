import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "../../../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { login, UserInfo } from "../../../../redux/features/auth/authSlice";
import { cacheService } from "../../../../utils/cacheService";
import { Formik, Form as FormikForm } from "formik";
import React from "react";
import * as yup from "yup";
import Input from "../../../../components/Input";

type LoginResponse = UserInfo & { password: string };

type InitialValues = {
  email: string;
  password: string;
};

interface Props {
  setAuthState: (authState: { idle: boolean; isAuthFailure: boolean }) => void;
  setSnackBarMsg: React.Dispatch<React.SetStateAction<string>>;
}

function Form({ setAuthState, setSnackBarMsg }: Props) {
  const [isRememberMe, setIsRememberMe] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: InitialValues) => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response) {
      }
      console.log(response);
      if (response.status === 404) {
        setSnackBarMsg("404 Error resource not found!");
        setAuthState({ idle: false, isAuthFailure: true });
        throw new Error("404 Error resource not found!");
      }
      if (response.status === 200 && response.statusText === "OK") {
        const users = (await response.json()) as LoginResponse[];
        const user = users.find(
          (user: any) =>
            user.email === values.email && user.password === values.password
        );
        if (!user) {
          setSnackBarMsg("User not found!");
          setAuthState({ idle: false, isAuthFailure: true });
          return;
        }
        //If we have a user save them to our local storage and log them in
        const { password: _password, ...rest } = user;
        if (isRememberMe) cacheService.saveState("user", { userInfo: rest });
        setSnackBarMsg("Loged in successfully!");
        setAuthState({ idle: false, isAuthFailure: false });
        setTimeout(() => {
          dispatch(login(rest));
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={yup.object({
          email: yup.string().email().required(),
          password: yup.string().required().min(8).max(24),
        })}
      >
        {() => (
          <FormikForm>
            <Input
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              size="small"
            />
            <Input
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              size="small"
            />
            <Box
              display="flex"
              alignItems="center"
              mb={4}
              justifyContent="space-between"
            >
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="primary"
                    onChange={(e) => setIsRememberMe(e.target.checked)}
                  />
                }
                label="Remember me"
              />
              <Link to="/reset" style={{ textDecoration: "none" }}>
                <Typography
                  fontWeight="bold"
                  color="action.active"
                  sx={{ textDecoration: "none" }}
                >
                  Forget password
                </Typography>
              </Link>
            </Box>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              disableElevation
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </FormikForm>
        )}
      </Formik>
    </>
  );
}

export default Form;
