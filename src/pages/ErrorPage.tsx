import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import error from "../assets/error.svg";

function ErrorPage() {
  return (
    <Container>
      <Box>
        <Box>
          <img src={error} alt="not found" />
        </Box>
        <Box>
          <Typography variant="h6">Page not found</Typography>
          <Typography variant="body1">
            The page you are trying to reach is not availble. It may have been
            deleted or its URL was misspelled.
          </Typography>
        </Box>
        <Button variant="contained" disableElevation>
          Go back
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
