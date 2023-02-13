import React from "react";
import Paper from "@mui/material/Paper/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface Props {
  process?: any;
  children?: React.ReactNode;
  color?: string;
}
const StyledPaper = styled(Paper)(({ color }: Props) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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
      {process.private ? <Box>Private</Box> : ""}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>{process.private ? "P" : "N"}</Typography>
        <Typography>{process.name}</Typography>
      </Box>
    </StyledPaper>
  );
};

export default Cards;
