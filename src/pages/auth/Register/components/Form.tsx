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
  color: theme.palette.action.active,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function Form() {
  return (
    <>
      <Box component="form">
        <TextField
          margin="normal"
          fullWidth
          id="workspace-name"
          label="Workspace Name"
          name="workspace-name"
          autoComplete="workspace-name"
          autoFocus
          size="small"
        />
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
        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography my={1}>
                  Agree with <Anchor href="/Terms">Terms and conditions</Anchor>
                  , <Anchor href="/Privacy">Privacy Policy</Anchor> and
                  <Anchor href="/Coockies">Coockies Policy</Anchor>
                </Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I authorize Coraly to process my personal data in order to receive informational, promotional and commercial communications via e-mail."
            />
          </FormGroup>
        </Box>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          disableElevation
          sx={{ mt: 3 }}
          color="secondary"
        >
          Create now the account
        </Button>
      </Box>
    </>
  );
}

export default Form;
