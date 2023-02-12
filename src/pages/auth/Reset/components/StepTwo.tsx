import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useSearchParams } from "react-router-dom";
import Input from "../../../../components/Input";

type InitialValues = {
  password: string;
  confirmPassword: string;
};
function StepTwo() {
  const [params] = useSearchParams();
  const workspaceName = params.get("workspaceName");
  const email = params.get("email"); // this is supposed to be token or something else

  const onSubmit = (values: InitialValues) => {
    // save those for later if we want to pass the to our db for updates
    const { password, confirmPassword } = values;
    console.log({ ...values, email });
  };

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      onSubmit={onSubmit}
      validationSchema={yup.object({
        password: yup.string().required().min(8).max(24),
        confirmPassword: yup
          .string()
          .required()
          .oneOf([yup.ref("password")], "Passwords must match"),
      })}
    >
      {() => (
        <Form>
          <Input
            margin="normal"
            fullWidth
            name="password"
            label="New password"
            type="password"
            size="small"
            autoFocus
          />
          <Input
            margin="normal"
            fullWidth
            name="confirmPassword"
            label="Confirm password"
            type="password"
            size="small"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{ mt: 3, mb: 2, color: "white" }}
            color="error"
          >
            Complete now
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default StepTwo;
