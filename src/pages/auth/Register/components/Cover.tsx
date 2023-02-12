import { Box, Typography } from "@mui/material";
import Ellipse from "../../../../assets/auth/signup/Ellipse.svg";
import Polygon from "../../../../assets/auth/signup/Polygon.svg";
import HalfEllipse from "../../../../assets/auth/signup/HalfEllipse.svg";
import Rectangle from "../../../../assets/auth/signup/Rectangle.svg";
import dotts from "../../../../assets/auth/signup/dottsSignup.svg";

function Cover() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        position="relative"
        overflow="hidden"
        sx={{
          background: "#2ccfbc1a",
        }}
      >
        <Box position="relative">
          <Typography
            display="block"
            variant="h2"
            color="text.primary"
            sx={{
              fontSize: "48px",
              width: "650px",
              fontWeight: "bold",
              zIndex: 1,
              position: "absolute",
              left: -350,
              top: 20,
              lineHeight: 1.5,
            }}
          >
            Get Started with Coraly now and Improve your workflow
          </Typography>

          <Box
            component="img"
            src={dotts}
            sx={{ position: "absolute", top: -97, left: -300, zIndex: 0 }}
          />
        </Box>
        <Box
          component="img"
          src={Ellipse}
          sx={{ position: "absolute", top: 20, left: 0 }}
        />
        <Box
          component="img"
          src={Rectangle}
          sx={{ position: "absolute", top: 0, right: 80 }}
        />
        <Box
          component="img"
          src={Polygon}
          sx={{ position: "absolute", bottom: 0, left: 60 }}
        />
        <Box
          component="img"
          src={HalfEllipse}
          sx={{ position: "absolute", bottom: 55, right: 5 }}
        />
      </Box>
    </>
  );
}

export default Cover;
