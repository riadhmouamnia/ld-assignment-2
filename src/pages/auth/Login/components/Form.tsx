import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { login, UserInfo } from "redux/features/auth/authSlice";
import { cacheService } from "utils/cacheService";
import { Formik, Form as FormikForm } from "formik";
import React from "react";
import * as yup from "yup";
import Input from "components/Input";
import CheckBox from "components/CheckBox";
import useAxiosFetch from "hooks/useAxiosFetch";

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
  const { data, fetchError } = useAxiosFetch(
    "https://coraly-academy.onrender.com/users"
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values: InitialValues) => {
    if (fetchError) {
      setSnackBarMsg(fetchError);
      setAuthState({ idle: false, isAuthFailure: true });
      return;
    }
    if (data) {
      const user = data.find(
        (user: any) =>
          user.email === values.email && user.password === values.password
      );
      if (!user) {
        setSnackBarMsg("User not found!");
        setAuthState({ idle: false, isAuthFailure: true });
        return;
      } else {
        const { password: _password, ...rest } = user;
        if (isRememberMe) cacheService.saveState("user", { userInfo: rest });
        setSnackBarMsg("Loged in successfully!");
        setAuthState({ idle: false, isAuthFailure: false });
        setTimeout(() => {
          dispatch(login(rest));
          navigate("/");
        }, 1500);
      }
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
                  <CheckBox
                    value="remember"
                    // color="error"
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
