import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";

const StyledPaper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "150px",
  fontWeight: "bold",
  border: "1px dashed #D6D5D9",
  borderRadius: 8,
  color: "#6F6D7B",
  ":hover": {
    cursor: "pointer",
  },
});

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

type Props = {
  HndleOpen: React.MouseEventHandler<HTMLDivElement> | undefined;
};

function AddCard({ HndleOpen }: Props) {
  return (
    <StyledPaper onClick={HndleOpen}>
      <Container>
        <AddIcon fontSize="large" />
        <Typography variant="h6" color="text.secondary" textAlign="center">
          Create new Process
        </Typography>
      </Container>
    </StyledPaper>
  );
}

export default AddCard;
