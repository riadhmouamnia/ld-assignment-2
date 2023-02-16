import { Box } from "@mui/material";
import { container, dialogRightSide } from "./styles";
import DialogLeftSide from "pages/Dashboard/components/ProcessModel/Body/DialogLeftSide";

function styles() {
  return (
    <Box sx={container}>
      <DialogLeftSide />
      <Box sx={dialogRightSide}>two</Box>
      <Box>three</Box>
    </Box>
  );
}

export default styles;
