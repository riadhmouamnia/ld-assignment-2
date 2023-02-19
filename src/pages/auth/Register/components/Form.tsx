import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import React from "react";
import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import Input from "../../../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "components/CheckBox";

type InitialValues = {
  email: string;
  workspace: string;
};

const Anchor = styled("a")(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.action.active,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

interface Props {
  onNextStep: () => void;
}

function Form({ onNextStep }: Props) {
  const [isTermsAccepted, setTermsAccpeted] = React.useState(false);
  const [isPrivacyAccepted, setPrivacyAccepted] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = (values: InitialValues) => {
    const { email, workspace } = values;
    navigate(`?workspaceName=${workspace}&email=${email}`);
    console.log(values);
    onNextStep();
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", workspace: "" }}
        onSubmit={onSubmit}
        validationSchema={yup.object({
          email: yup.string().email().required(),
          workspace: yup.string().required(),
        })}
      >
        {() => (
          <FormikForm>
            <Input
              margin="normal"
              fullWidth
              label="Workspace Name"
              name="workspace"
              autoComplete="workspace"
              size="small"
              autoFocus
            />
            <Input
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              size="small"
            />
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <CheckBox
                      onChange={(e) => setTermsAccpeted(e.target.checked)}
                    />
                  }
                  label={
                    <Typography my={1}>
                      Agree with{" "}
                      <Anchor href="/Terms">Terms and conditions</Anchor>,{" "}
                      <Anchor href="/Privacy">Privacy Policy</Anchor> and
                      <Anchor href="/Coockies"> Coockies Policy</Anchor>
                    </Typography>
                  }
                />
                <FormControlLabel
                  control={
                    <CheckBox
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    />
                  }
                  label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
                />
              </FormGroup>
            </Box>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              disableElevation
              sx={{ mt: 2 }}
              color="secondary"
              disabled={!isPrivacyAccepted || !isTermsAccepted}
            >
              Create now the account
            </Button>
          </FormikForm>
        )}
      </Formik>
      <Box width="100%" mt={1} display="flex" gap={1}>
        <Typography>Do you have an account?</Typography>
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
    </>
  );
}

export default Form;
