import { Box, Modal } from "@mui/material";
import Header from "pages/Dashboard/components/ProcessModel/Header";
import Body from "pages/Dashboard/components/ProcessModel/Body";
import { modelStyles } from "./styles";

function ProcessModel() {
  return (
    <Modal open={false}>
      <Box sx={modelStyles}>
        <Header />
        <Body />
      </Box>
    </Modal>
  );
}

export default ProcessModel;
