import { createTheme } from "@mui/material";
import componentOverrides from "./overrides";
import palette from "./palette";

const theme = createTheme({
  palette,
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  components: componentOverrides,
});

export default theme;
