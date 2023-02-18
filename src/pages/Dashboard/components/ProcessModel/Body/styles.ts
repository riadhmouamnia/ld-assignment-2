export const container = {
  display: "flex",
  marginTop: "8px",
  gap: 2,
};

export const dialogRightSide = {
  display: "flex",
  height: "600px",
  overFlowY: "hidden",
  flex: "4",
  flexDirection: "column",
  gap: 1,
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
