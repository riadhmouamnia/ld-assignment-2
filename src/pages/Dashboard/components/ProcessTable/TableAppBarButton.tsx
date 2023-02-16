import React from "react";
import { appBarStyles } from "pages/Dashboard/components/ProcessTable/styles/styles";
import { Button, Box, Icon } from "@mui/material";
import Divider from "assets/Divider.svg";
import DownArrow from "assets/DownArrow.svg";

type Props = {
  title?: string;
  icon?: string;
  style?: any;
  iconStyle?: any;
  index: number;
};

function TableAppBarButton({ style, iconStyle, icon, title, index }: Props) {
  return (
    <React.Fragment key={index}>
      <Button
        sx={style}
        startIcon={
          <Icon sx={iconStyle}>
            <Box component="img" src={icon} sx={appBarStyles.iconWrapper} />
          </Icon>
        }
        endIcon={
          title === "Tables" ? (
            <Box component="img" src={DownArrow} sx={appBarStyles.downArrow} />
          ) : null
        }
      >
        {title}
      </Button>
      {index <= 1 && <Box component="img" src={Divider} />}
    </React.Fragment>
  );
}

export default TableAppBarButton;
