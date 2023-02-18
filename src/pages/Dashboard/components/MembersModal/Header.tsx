import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "components/icons";
import { headerStyles } from "pages/Dashboard/components/MembersModal/styles";

type Props = {
  setIsMembersModal: (isMembersModal: boolean) => void;
};

function Header({ setIsMembersModal }: Props) {
  return (
    <Box sx={headerStyles.container}>
      <Typography variant="h6" sx={headerStyles.title}>
        Impostazioni
      </Typography>
      <IconButton onClick={() => setIsMembersModal(false)}>
        <Close />
      </IconButton>
    </Box>
  );
}

export default Header;
