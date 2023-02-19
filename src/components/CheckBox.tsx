import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { CheckBoxChecked, CheckBoxDefault } from "components/icons";

type Props = Omit<CheckboxProps, "icon" | "checkedIcon"> & {
  // Add any additional props you want to pass to the Checkbox component
};

function CheckBox(props: Props) {
  return (
    <Checkbox
      icon={<CheckBoxDefault />}
      checkedIcon={<CheckBoxChecked />}
      {...props}
    />
  );
}

export default CheckBox;
