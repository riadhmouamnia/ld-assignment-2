import { Box, styled } from "@mui/material";

export const styles = {
  headerButton: {
    backgroundColor: "#D6D5D9",
    color: "#04385A",
    fontSize: "12px",
    fontWeight: "600",
    height: "21.5px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#abaaae",
    },
  },
  icon: {
    width: "24px",
    height: "24px",
    margin: "3px",
    cursor: "pointer",
  },
  td: {
    border: "2px solid #EAEAEC",
    color: "#312E43",
    fontWeight: "400",
    fontSize: "14px",
  },
  tdClick: {
    cursor: "pointer",
  },
  tdAvatar: {
    display: "flex",
  },
  avatar: {
    width: "24px",
    height: "24px",
    mr: "8px",
    fontSize: "10px",
    backgroundColor: "#04385A",
  },
  contact: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#312E43",
  },
};

export const Header = styled(Box)({
  height: "60px",
  backgroundColor: "#F6F8FA",
  display: "flex",
  gap: 10,
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: 20,
});
export const AppBar = styled(Box)({
  backgroundColor: "white",
  height: "60px",
  borderBottom: "2px #D6D5D9 solid",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
});

export const Spacer = styled(Box)({
  height: "64px",
});
//appBar Styles
export const appBarStyles = {
  leftContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    paddingRight: "30px",
  },
  icon: {
    width: "28px",
    height: "28px",
    margin: "3px",
    cursor: "pointer",
  },
  columnButton: {
    backgroundColor: "#47FF9120",
    color: "#5A5869",
    height: "30px",
    borderRadius: "4px",
    fontSize: "12px",
    padding: "0 12px",
    "&:hover": {
      backgroundColor: "#47FF9140",
    },
  },
  downArrow: {
    width: "20px",
    height: "20px",
  },
  font: {
    fontSize: "12px",
    color: "#83828E",
    fontWeight: "600",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
  },
  filterButton: {
    backgroundColor: "#fff",
    color: "#83828E",
    height: "30px",
    fontSize: "12px",
    borderRadius: "4px",
    padding: "0 12px",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
  phasesButton: {
    backgroundColor: "#6C47FF20",
    color: "#312E43",
    height: "30px",
    borderRadius: "4px",
    fontSize: "12px",
    padding: "0 12px",
    "&:hover": {
      backgroundColor: "#6C47FF40",
    },
    innerText: {
      color: "#5A5869",
      paddingRight: "8px",
    },
  },
  addButton: {
    height: "32px",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "0 12px",
    backgroundColor: "#F93E6C",
    color: "#FFF",
    "&:hover": {
      backgroundColor: "#96E7DE",
    },
  },
};

export const drawerStyles = {
  "& .MuiPaper-root": {
    width: "381px",
    top: "126px",
    height: "80%",
    overflowY: "scroll",
    padding: "24px 24px",
    backgroundColor: "#fff",
    color: "#5A5869",
    "::-webkit-scrollbar": {
      width: "6px",
      borderRadius: "20px",
    },
    /* Track */
    "::-webkit-scrollbar-track": {
      background: "#D6D5D9",
      borderRadius: "20px",
    },

    /* Handle */
    "::-webkit-scrollbar-thumb": {
      background: "#C1C0C7",
      borderRadius: "20px",
    },

    /* Handle on hover */
    "::-webkit-scrollbar-thumb:hover": {
      background: "#747377",
    },
  },
  dropDown: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "24px",
    padding: "4px 0px",
    marginTop: "10px",
    cursor: "pointer",
  },
  iconText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greyFont: {
    color: "#9897A1",
  },
  text: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#5A5869",
    marginLeft: "16px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  container: {
    marginTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
  },
  cancel: {
    ":hover": { backgroundColor: "#F93E6C", color: "white" },
  },
};
