export const container = {
  display: "flex",
  marginTop: "8px",
  // justifyContent: "center",
  // alignItems: "center",
  gap: 2,
};

export const dialogRightSide = {
  display: "flex",
  flex: "4",
  flexDirection: "column",

  backgroundColor: "green",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};

export const TabStyles = {
  width: "55px",
  borderLeft: 2,
  borderColor: "divider",
  "& .MuiTabs-indicator": {
    left: 0,
    width: "3px",
    borderRadius: "10px",
    backgroundColor: "#F93E6C",
  },
  "& .MuiTabs": {
    width: "100%",
    alignItems: "center",
  },
  "& .MuiButtonBase-root": {
    minWidth: "68px",
    minHeight: "24px",
  },
  "& .MuiTabs-scroller": {
    paddingTop: "100px",
  },
};
