import { Box, styled, Typography } from "@mui/material";
import NetworkError from "assets/NetworkError.svg";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  padding: "25px",
  borderRadius: "16px",
  width: "700px",
});

const illustrationStyles = {
  width: "300px",
};

function NetWorkError({ message }: any): JSX.Element {
  return (
    <StyledBox>
      <Typography variant="h4" color="text.primary">
        {message}
      </Typography>
      <Box component="img" src={NetworkError} sx={illustrationStyles} />
    </StyledBox>
  );
}

export default NetWorkError;
