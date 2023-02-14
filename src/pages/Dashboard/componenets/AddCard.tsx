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

type Props = {
  HndleOpen: React.MouseEventHandler<HTMLDivElement> | undefined;
};

function AddCard({ HndleOpen }: Props) {
  return (
    <StyledPaper onClick={HndleOpen}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <AddIcon sx={{ fontSize: "40px" }} />
        <Typography variant="h6" color="text.secondary" textAlign="center">
          Create new Process
        </Typography>
      </Box>
    </StyledPaper>
  );
}

export default AddCard;
