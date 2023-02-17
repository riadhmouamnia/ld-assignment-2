import { Box, Typography, Button } from "@mui/material";
import { footerWrapper } from "pages/Dashboard/components/ProcessModel/Footer/styles";

type Props = {
  setIsProcessModel: (boolean: boolean) => void;
};

function index({ setIsProcessModel }: Props) {
  return (
    <Box sx={footerWrapper}>
      <Typography>Fase ID: d;sl;dadada</Typography>
      <Box sx={footerWrapper.Buttons}>
        <Button
          sx={footerWrapper.cancel}
          variant="outlined"
          onClick={() => setIsProcessModel(false)}
        >
          Annulla
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
        >
          Salva
        </Button>
      </Box>
    </Box>
  );
}

export default index;
