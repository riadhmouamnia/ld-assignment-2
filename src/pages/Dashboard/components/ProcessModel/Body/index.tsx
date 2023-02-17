import { Box } from "@mui/material";
import { container, dialogRightSide } from "./styles";
import DialogLeftSide from "pages/Dashboard/components/ProcessModel/Body/DialogLeftSide";
import TabsComponent from "pages/Dashboard/components/ProcessModel/Body/TabsComponent";

function styles() {
  return (
    <Box sx={container}>
      <DialogLeftSide />
      <Box sx={dialogRightSide}>two</Box>
      <TabsComponent />
    </Box>
  );
}

export default styles;
