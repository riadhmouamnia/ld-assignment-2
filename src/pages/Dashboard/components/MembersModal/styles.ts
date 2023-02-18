import { styled, InputBase } from "@mui/material";
export const modalStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "52.2%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "88%",
  bgcolor: "#FFF",
  outline: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
  DeviderStyle: {
    border: "0",
    width: "2px",
    borderRadius: "5px",
    backgroundColor: "#EAEAEC",
  },
};

export const headerStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0px",
    marginBottom: "20px",
  },
  title: {
    color: "#464356",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export const NavBarStyles = {
  container: {
    // backgroundColor: "pink",
  },
  TabStyles: {
    borderLeft: 2,
    borderColor: "divider",
    "& .MuiTabs-indicator": {
      left: 0,
      width: "3px",
      borderRadius: "10px",
      backgroundColor: "#F93E6C",
    },
    "& .MuiTab-root": {
      color: "#83828E",
    },
    "& .MuiButtonBase-root": {
      width: "100%",
      minHeight: "24px",
      fill: "#83828E",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginLeft: 1,
      gap: 1,
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#F93E6C",
      fill: "#F93E6C",
    },
  },
};

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "#F6F8FA",
  },
  marginLeft: 0,
  width: "100%",
  border: "1px solid #C1C0C7",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

export const TableStyles = {
  container: {
    backgroundColor: "skyblue",
    width: "100%",
    height: "100%",
  },
  TopPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InviteButton: {
    height: "32px",
  },
  Title: {
    color: "#464356",
    fontWeight: "bold",
    fontSize: "16px",
    marginRight: "80px",
  },
};
