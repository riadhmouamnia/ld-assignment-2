import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

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
        <TextField
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          size="small"
        />
        <Box
          display="flex"
          alignItems="center"
          mb={4}
          justifyContent="space-between"
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Typography
            fontWeight="bold"
            color="secondary"
            component="a"
            href="/reset"
            sx={{ textDecoration: "none" }}
          >
            Forget password
          </Typography>
        </Box>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disableElevation
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </>
  );
}

export default Form;
