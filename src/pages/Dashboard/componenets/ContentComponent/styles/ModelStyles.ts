export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 603,
  bgcolor: "#FFF",
  outline: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    gap: 2,
    justifyContent: "flex-end",
    cancle: {
      mt: 3,
      mb: 2,
      ":hover": { backgroundColor: "#F93E6C", color: "white" },
    },
    create: {
      mt: 3,
      mb: 2,
    },
  },
};
