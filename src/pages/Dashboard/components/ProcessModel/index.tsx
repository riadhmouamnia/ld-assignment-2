import { Box, Modal } from "@mui/material";
import Header from "pages/Dashboard/components/ProcessModel/Header";
import Body from "pages/Dashboard/components/ProcessModel/Body";
import { modelStyles } from "./styles";
import Footer from "pages/Dashboard/components/ProcessModel/Footer";

type ModalProps = {
  isProcessModelOpen: boolean;
  setIsProcessModel: (isProcessModelOpen: boolean) => void;
};

function ProcessModel({ isProcessModelOpen, setIsProcessModel }: ModalProps) {
  return (
    <Modal open={isProcessModelOpen}>
      <Box sx={modelStyles}>
        <Header setIsProcessModel={setIsProcessModel} />
        <Body />
        <Footer setIsProcessModel={setIsProcessModel} />
      </Box>
    </Modal>
  );
}

export default ProcessModel;
