import { Box, Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "components/Input";
type InitialValues = {
  name: string;
  surName: string;
  password: string;
  confirmPassword: string;
};
function StepTwo() {
  const [params] = useSearchParams();
  const workspaceName = params.get("workspaceName");
  const email = params.get("email");
  console.log(workspaceName, email);
  const onSubmit = (values: InitialValues) => {
    const { name, surName, password, confirmPassword } = values;
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          surName: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object({
          name: yup.string().required().min(2),
          surName: yup.string().required().min(2),
          password: yup.string().required().min(8).max(24),
          confirmPassword: yup
            .string()
            .required()
            .oneOf([yup.ref("password")], "Passwords must match"),
        })}
      >
        {() => (
          <Form>
            <Box display="flex" gap={2}>
              <Input
                margin="normal"
                fullWidth
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                size="small"
              />
              <Input
                margin="normal"
                fullWidth
                label="Surname"
                name="surName"
                autoComplete="surname"
                size="small"
              />
            </Box>
            <Input
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              size="small"
            />
            <Input
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Repeat password"
              type="password"
              size="small"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              sx={{ mt: 3, mb: 2, color: "white" }}
              color="secondary"
            >
              Complete now
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default StepTwo;
