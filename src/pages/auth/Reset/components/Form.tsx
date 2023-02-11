import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import Input from "../../../../components/Input";
import * as yup from "yup";

type InitialValues = {
  email: string;
};

const Anchor = styled("a")(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

interface Props {
  onNextStep: () => void;
}
function Form({ onNextStep }: Props) {
  const navigate = useNavigate();
  const onSubmit = (values: InitialValues) => {
    const { email } = values;
    navigate(`?email=${email}`);
    onNextStep();
  };

  return (
    <Box width="100%">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={yup.object({
          email: yup.string().email().required(),
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
            <Button
              fullWidth
              variant="contained"
              disableElevation
              sx={{ mt: 3, mb: 2 }}
              color="error"
              type="submit"
            >
              Reset password
            </Button>
          </FormikForm>
        )}
      </Formik>

      <Box width="100%" mt={2} display="flex" gap={1}>
        <Typography>Go back to</Typography>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Typography
            fontWeight="bold"
            color="action.active"
            sx={{ textDecoration: "none" }}
          >
            Login
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Form;
