// import { Field, FieldProps } from "@mui/material";
// import { FieldHookConfig, useField } from "formik";
// import ColorLensIcon from "@mui/icons-material/ColorLens";
// import { Select, FormControl, MenuItem, InputLabel } from "@mui/material/";

// type Props = FieldProps & FieldHookConfig<string> & React.ReactElement;

// function SelectInput({ props, children }: Props) {
//   const [field, meta] = useField(props);
//   const errorText = meta && meta.touched && meta.error;

//   return (
//     <>
//       <InputLabel id="select-label">Age</InputLabel>
//       <Field name="selectValue.value">
//         <Select
//           {...field}
//           // labelId="select-label"
//           // id="select"
//           // value={field.value}
//           // onChange={form.handleChange}
//           // onBlur={form.handleBlur}
//           error={Boolean(errorText)}
//           helperText={errorText}
//           IconComponent={ColorLensIcon}
//           value={field.value ?? ""}
//           {...props}
//         >
//           {children}
//         </Select>
//       </Field>
//     </>
//   );
// }

// export default SelectInput;
