import { Box, Typography, Button } from "@mui/material";
import {
  FooterText,
  footerWrapper,
} from "pages/Dashboard/components/ProcessModel/Footer/styles";

type Props = {
  setIsProcessModel: (boolean: boolean) => void;
};

function index({ setIsProcessModel }: Props) {
  return (
    <Box sx={footerWrapper}>
      <Box sx={FooterText.flexItems}>
        <Typography sx={FooterText.boldText}>Face ID:</Typography>
        <Typography sx={FooterText.normalText}>
          61571535e7058c00143322b8
        </Typography>
      </Box>

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
