import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import { InfosIcon, Trash } from "components/icons";
import { IconButton } from "@mui/material";
import { rows } from "utils/membersList";
import CheckBox from "components/CheckBox";

const StyledTableHead = styled(TableHead)({
  backgroundColor: "#F6F8FA",
  "& .MuiTableCell-root": {
    fontWeight: "600",
    color: "#312E43",
  },
});

const CenterIcon = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 1,
};

function TableContent() {
  const [tableData, setTableData] = useState([...rows]);
  const [isChecked, setIsChecked] = useState(Array(rows.length).fill(false));

  const handleCheckboxClick = (index: number) => {
    const newCheckedState = [...isChecked];
    newCheckedState[index] = !isChecked[index];
    setIsChecked(newCheckedState);
  };
  const handleDelete = (index: number) => {
    if (isChecked[index]) {
      const newTableData = [...tableData];
      newTableData.splice(index, 1);
      setTableData(newTableData);
    } else return;
  };

  return (
    <Table size="small">
      <StyledTableHead>
        <TableRow>
          <TableCell>
            <CheckBox
              checked={isChecked.every(Boolean)}
              onChange={() => {
                setIsChecked(
                  Array(rows.length).fill(!isChecked.every(Boolean))
                );
              }}
            />
            Nome
          </TableCell>
          <TableCell>Email</TableCell>
          <TableCell>
            <Box component="span" sx={CenterIcon}>
              Permessi
              <InfosIcon />
            </Box>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </StyledTableHead>
      <TableBody>
        {tableData.map((row, index) => (
          <TableRow key={row.id}>
            <TableCell>
              <CheckBox
                checked={isChecked[index]}
                onChange={() => handleCheckboxClick(index)}
              />
              {row.fullName}
            </TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.permessi}</TableCell>
            <TableCell>
              <IconButton
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  handleDelete(index)
                }
                disabled={!isChecked[index]}
              >
                <Trash />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableContent;
