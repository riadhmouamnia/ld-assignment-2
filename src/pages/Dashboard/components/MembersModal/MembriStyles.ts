import { styled, TableHead } from "@mui/material";

export const StyledTableHead = styled(TableHead)({
  backgroundColor: "#F6F8FA",
  "& .MuiTableCell-root": {
    fontWeight: "600",
    color: "#312E43",
  },
});

export const CenterIcon = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
};

export const PermessiStyles = {
  admin: {
    backgroundColor: "#F93E6C",
    color: "white",
    fontSize: "12px",
    height: "22px",
    padding: "8px 10px",
    "&:hover": {
      backgroundColor: "#F93E6C80",
    },
  },
  utente: {
    backgroundColor: "#04385A",
    color: "white",
    fontSize: "12px",
    height: "22px",
    padding: "8px 10px",
    "&:hover": {
      backgroundColor: "#04385A80",
    },
  },
  venditore: {
    backgroundColor: "#2CCFBC",
    color: "white",
    fontSize: "12px",
    height: "22px",
    padding: "8px 10px",
    "&:hover": {
      backgroundColor: "#2CCFBC80",
    },
  },
  soloLettura: {
    backgroundColor: "#6F6D7B",
    color: "white",
    fontSize: "12px",
    height: "22px",
    padding: "8px 10px",
    "&:hover": {
      backgroundColor: "#6F6D7B80",
    },
  },
};
