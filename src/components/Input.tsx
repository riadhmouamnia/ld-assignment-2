import { TextField, TextFieldProps } from "@mui/material";
import { FieldHookConfig, useField } from "formik";

type Props = TextFieldProps & FieldHookConfig<string>;

function Input(props: Props) {
  const [field, meta] = useField(props);
  const errorText = meta && meta.touched && meta.error;

  return (
    <TextField
      error={Boolean(errorText)}
      helperText={errorText}
      {...field}
      value={field.value ?? ""}
      {...props}
    />
  );
}

export default Input;
