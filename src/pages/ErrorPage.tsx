import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import error from "../assets/error.svg";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

function ErrorPage() {
  return (
    <StyledContainer>
      <Box
        width={650}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          gap: 4,
        }}
      >
        <Box>
          <img src={error} alt="not found" />
        </Box>
        <Box>
          <Typography
            textAlign="center"
            fontWeight="bold"
            variant="h6"
            color="text.primary"
          >
            Page not found
          </Typography>
          <Typography textAlign="center" color="text.secondary" variant="body1">
            The page you are trying to reach is not availble. It may have been
            deleted or its URL was misspelled.
          </Typography>
        </Box>
        <Link to="/">
          <Button variant="contained" disableElevation>
            Go back
          </Button>
        </Link>
      </Box>
    </StyledContainer>
  );
}

export default ErrorPage;
