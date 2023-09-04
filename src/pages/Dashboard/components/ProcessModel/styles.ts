export const modelStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "52.2%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "88vh",
  bgcolor: "#FFF",
  outline: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};

export const colors = {
  primary: {
    color: "#F93E6C",
  },
  secondary: {
    color: "#9897A1",
  },
};

export const DialogContainer = {
  height: "550px",
  overflowY: "scroll",
  padding: "0px 16px",
  flex: 4,
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
};
