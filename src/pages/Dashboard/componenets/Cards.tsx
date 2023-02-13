import React from "react";
import Paper from "@mui/material/Paper/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import ProcessIcon from "../../../assets/ProcessIcon.svg";
import PrivateIcon from "../../../assets/PrivateIcon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  process?: any;
  children?: React.ReactNode;
  color?: string;
}
const StyledPaper = styled(Paper)(({ color }: Props) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "center",
  gap: 8,
  alignItems: "center",
  width: "150px",
  height: "150px",
  fontWeight: "bold",
  backgroundColor: color,
  color: "#FFF",
  ":hover": {
    cursor: "pointer",
  },
}));

const Cards: React.FC<Props> = ({ process }) => {
  return (
    <StyledPaper color={process.color}>
      {process.private ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt={2}
          width="80%"
          height="16px"
        >
          <Box
            component="img"
            src={PrivateIcon}
            width="10.67px"
            height="13.33px"
          />
          <MoreVertIcon fontSize="small" />
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pt={2}
          width="80%"
          height="16px"
        />
      )}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="126px"
        height="64px"
      >
        <Icon>
          <Box component="img" src={ProcessIcon} width="100%" />
        </Icon>
        <Typography>{process.name}</Typography>
      </Box>
    </StyledPaper>
  );
};

export default Cards;
