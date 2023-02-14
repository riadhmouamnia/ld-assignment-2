import { createTheme } from "@mui/material";
import componentOverrides from "./overrides";
import palette from "./palette";

const theme = createTheme({
  palette,
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    button: {
      fontWeight: "bold",
      textTransform: "none",
    },
    h4: {
      fontWeight: "bold",
    },
  },
  components: componentOverrides,
  shape: {
    borderRadius: 8,
  },
});

export default theme;
