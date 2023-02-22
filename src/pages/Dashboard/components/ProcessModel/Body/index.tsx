import { Box } from "@mui/material";
import { container } from "./styles";
import DialogLeftSide from "pages/Dashboard/components/ProcessModel/Body/DialogLeftSide";
import TabsComponent from "pages/Dashboard/components/ProcessModel/Body/TabsComponent";
import FieldPhase from "pages/Dashboard/components/ProcessModel/Body/FieldPhase";

function Body() {
  return (
    <Box sx={container}>
      <DialogLeftSide />
      <FieldPhase />
      <TabsComponent />
    </Box>
  );
}

export default Body;
