import { Box, Button, TextField } from "@mui/material";
import React from "react";

function StepTwo() {
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          autoFocus
          name="new-password"
          label="New password"
          type="password"
          id="new-password"
          size="small"
        />
        <TextField
          margin="normal"
          fullWidth
          name="confirm-password"
          label="Confirm password"
          type="password"
          id="confirm-password"
          size="small"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
          sx={{ mt: 3, mb: 2, color: "white" }}
          color="error"
        >
          Complete now
        </Button>
      </Box>
    </>
  );
}

export default StepTwo;
