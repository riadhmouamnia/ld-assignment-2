import { Box, Button, Typography, styled, TextField } from "@mui/material";
import unboxing_icon from "assets/unboxing_icon.svg";
import { useAppSelector } from "redux/hooks";

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#F5F5F5",
  padding: "25px",
  borderRadius: "16px",
});

const StyledForm = styled(Box)({
  width: "300px",
  marginTop: "20px",
});

const illustrationStyles = {
  position: "absolute",
  bottom: "150px",
  right: "50px",
  width: "300px",
};

function Startform() {
  const { userInfo } = useAppSelector(({ auth }) => auth);
  return (
    <StyledBox>
      <Box>
        <Typography variant="h4" fontWeight="bold" color="text.primary">
          Start Form
        </Typography>
        <Typography variant="h6" color="text.primary">
          Welcome to Startform, {userInfo?.name}
        </Typography>
        <StyledForm>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            margin="normal"
          />
          <Button type="submit">Submit</Button>
        </StyledForm>
      </Box>
      <Box component="img" src={unboxing_icon} sx={illustrationStyles} />
    </StyledBox>
  );
}

export default Startform;
