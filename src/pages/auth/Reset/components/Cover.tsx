import React from "react";
import { Box, Typography } from "@mui/material";
import dotts from "../../../../assets/auth/dotts.svg";
import Ellipse from "../../../../assets/auth/login/Ellipse.svg";
import Polygon from "../../../../assets/auth/login/Polygon.svg";
import HalfEllipse from "../../../../assets/auth/login/HalfEllipse.svg";
import Rectangle from "../../../../assets/auth/login/Rectangle.svg";

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
          background: "#F6F8FA",
        }}
      >
        <Box position="relative">
          <Typography
            display="block"
            variant="h2"
            sx={{
              fontSize: "48px",
              width: "650px",
              px: 4,
              fontWeight: "bold",
              color: "#464356",
              zIndex: 1,
              position: "absolute",
              left: -350,
              top: -70,
              lineHeight: 1.5,
            }}
          >
            Get Started with Coraly now and Improve your workflow
          </Typography>

          <Box sx={{ position: "absolute", top: -215, left: -222, zIndex: 0 }}>
            <img src={dotts} />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: 0, left: 0 }}>
          <img src={Ellipse} />
        </Box>
        <Box sx={{ position: "absolute", top: 40, right: 0 }}>
          <img src={Polygon} />
        </Box>
        <Box sx={{ position: "absolute", top: 540, left: 30 }}>
          <img src={HalfEllipse} />
        </Box>
        <Box sx={{ position: "absolute", top: 655, right: 0 }}>
          <img src={Rectangle} />
        </Box>
      </Box>
    </>
  );
}

export default Cover;
