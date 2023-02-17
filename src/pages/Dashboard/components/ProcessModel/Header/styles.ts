import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ModelHeader = styled(Box)({
  witdh: "100vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const headerContainer = {
  rightContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#464356",
  },
  KOMotivation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    text: {
      textDecoration: "underline",
      color: "#F93E6C",
      fontSize: "16px",
      fontWieght: "600",
      cursor: "pointer",
    },
  },
};
