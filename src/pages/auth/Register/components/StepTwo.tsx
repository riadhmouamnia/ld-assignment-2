import { Box, Button, TextField } from "@mui/material";
import React from "react";

function StepTwo() {
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Box display="flex" gap={2}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            size="small"
          />
          <TextField
            margin="normal"
            fullWidth
            id="surname"
            label="Surname"
            name="surname"
            autoComplete="surname"
            size="small"
          />
        </Box>
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          size="small"
        />
        <TextField
          margin="normal"
          fullWidth
          name="repeat-password"
          label="Repeat password"
          type="password"
          id="repeat-password"
          size="small"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disableElevation
          sx={{ mt: 3, mb: 2, color: "white" }}
          color="secondary"
        >
          Complete now
        </Button>
      </Box>
    </>
  );
}

export default StepTwo;
