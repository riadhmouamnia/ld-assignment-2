import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";

//styled anchor elemnt
const Anchor = styled("a")(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function Form() {
  return (
    <>
      <Box width="100%" component="form" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          size="small"
        />
        <Button
          fullWidth
          variant="contained"
          disableElevation
          sx={{ mt: 3, mb: 2 }}
          color="error"
        >
          Reset password
        </Button>
      </Box>
    </>
  );
}

export default Form;
