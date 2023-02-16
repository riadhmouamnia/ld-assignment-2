export const dialogLeftSide = {
  wrapper: {
    height: "600px",
    overflow: "scroll",
    backgroundColor: "pink",
    flex: 4,
  },
  flex: "4",
  flexDirection: "column",
  backgroundColor: "pink",
  gap: 2,
  head: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    width: "24px",
    height: "24px",
    mr: "4px",
    fontSize: "10px",
    backgroundColor: "#04385A",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
  },
  plusText: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#04385A",
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
  },
  dividerSpace: {
    margin: "0px 14px",
  },
  greyTextButton: {
    // backgroundColor: "#fff",
    color: "#83828E",
    height: "30px",
    fontSize: "12px",
    borderRadius: "4px",
    padding: "0 12px",
    "&:hover": {
      backgroundColor: "#eee",
    },
  },
  label: {
    height: "22px",
    width: "79px",
    padding: "0px 4px",
    borderRadius: "35px",
    fontSize: "14px",
    color: "#FFF",
  },
  labelOne: {
    backgroundColor: "#47BDFF",
    marginRight: "8px",
    "&:hover": {
      backgroundColor: "#47BDFF70",
    },
  },
  labelTwo: {
    backgroundColor: "#E547FF",
    marginRight: "8px",
    "&:hover": {
      backgroundColor: "#E547FF70",
    },
  },
  labelThree: {
    backgroundColor: "#FF9F47",
    "&:hover": {
      backgroundColor: "#FF9F4770",
    },
  },
  labelGrey: {
    height: "22px",
    padding: "14px 18px",
    borderRadius: "35px",
    fontSize: "14px",
    color: "#312E43",
    marginLeft: "12px",
    backgroundColor: "#D6D5D9",
    "&:hover": {
      backgroundColor: "#D6D5D970",
    },
  },
  hrDevider: {
    margingTop: "8px",
    width: "100%",
  },
  vrDevider: {
    marginTop: "8px",
    height: "160%",
  },
  formHeading: {
    marginTop: "16px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#464356",
  },
  companyData: {
    display: "flex",
    // alignItems: "center",
    width: "100%",
    gap: 2,
  },
  companyDataForm: {
    width: "100%",
  },
  radioButtons: {
    color: "#F93E6C",
    "&.Mui-checked": {
      color: "#F93E6C",
    },
  },
  fileContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
};
