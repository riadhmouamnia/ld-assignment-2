import { Box, Typography } from "@mui/material";
import dotts from "../../../../assets/auth/reset/resetDotts.svg";
import Ellipse from "../../../../assets/auth/reset/Ellipse.svg";
import Polygon from "../../../../assets/auth/reset/Polygon.svg";
import HalfEllipse from "../../../../assets/auth/reset/HalfEllipse.svg";
import Rectangle from "../../../../assets/auth/reset/Rectangle.svg";

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
          background: "#f93e6c1a",
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
              px: 4,
              fontWeight: "bold",
              zIndex: 1,
              position: "absolute",
              left: -230,
              top: -150,
              lineHeight: 1.5,
            }}
          >
            Get Started with Coraly now and Improve your workflow
          </Typography>

          <Box
            component="img"
            src={dotts}
            sx={{ position: "absolute", top: -130, left: 65, zIndex: 0 }}
          />
        </Box>
        <Box
          component="img"
          src={Rectangle}
          sx={{ position: "absolute", top: 50, left: 0 }}
        />
        <Box
          component="img"
          src={Polygon}
          sx={{ position: "absolute", top: 40, right: 0 }}
        />
        <Box
          component="img"
          src={Ellipse}
          sx={{ position: "absolute", bottom: 0, left: 30 }}
        />
        <Box
          component="img"
          src={HalfEllipse}
          sx={{ position: "absolute", bottom: 20, right: 0 }}
        />
      </Box>
    </>
  );
}

export default Cover;
