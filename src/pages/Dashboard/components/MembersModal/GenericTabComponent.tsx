import { Box, Button, Typography, styled, TextField } from "@mui/material";

type Props = {
  title: string;
  paragraph: string;
  img: any;
};

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  backgroundColor: "#F5F5F5",
  padding: "25px",
  borderRadius: "16px",
});

const illustrationStyles = {
  width: "300px",
};

function GenericTabComponent({ title, paragraph, img }: Props) {
  return (
    <StyledBox>
      <Box width="560px">
        <Typography variant="h4" color="text.primary" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body1" component="p" color="text.primary" mt={4}>
          {paragraph}
        </Typography>
      </Box>
      <Box component="img" src={img} sx={illustrationStyles} />
    </StyledBox>
  );
}

export default GenericTabComponent;
