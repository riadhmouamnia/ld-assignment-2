import { Box, Tab, Tabs, Typography } from "@mui/material";
import { NavBarStyles } from "pages/Dashboard/components/MembersModal/styles";
import NavLinks from "utils/MembersModalTabElements";
import React, { useState } from "react";

type Props = {
  value: number;
  setValue: (value: number) => void;
};

function NavBar({ value, setValue }: Props) {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={NavBarStyles.container}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={NavBarStyles.TabStyles}
      >
        {NavLinks.map((link, index) => (
          <Tab key={index} label={link.title} icon={link.icon} />
        ))}
      </Tabs>
    </Box>
  );
}

export default NavBar;
