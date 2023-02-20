import Box from "@mui/material/Box";
import React from "react";
import checked from "assets/auth/checked.svg";
interface Props {
  onNextStep: () => void;
}
function EmailSent({ onNextStep }: Props) {
  React.useEffect(() => {
    setTimeout(() => {
      onNextStep();
    }, 1000);
  }, []);

  return (
    <Box width="100%" mt={4}>
      <img src={checked} alt="logo" width="122px" />
    </Box>
  );
}

export default EmailSent;
