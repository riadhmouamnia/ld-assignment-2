import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "components/icons";
import { headerStyles } from "pages/Dashboard/components/MembersModal/styles";
import React from "react";

function Header() {
  return (
    <Box sx={headerStyles.container}>
      <Typography variant="h6" sx={headerStyles.title}>
        Impostazioni
      </Typography>
      <IconButton>
        <Close />
      </IconButton>
    </Box>
  );
}

export default Header;
