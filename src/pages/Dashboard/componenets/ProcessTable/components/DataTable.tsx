import React from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { data } from "../data";
import { styles } from "../styles/styles";
import stringAvatar from "../../AppBarComponent/stringAvatar";
import { Avatar } from "@mui/material";

function DataTable() {
  return (
    <Table size="small">
      {data.map((d) => (
        <TableRow hover key={d.id}>
          <TableCell />
          <TableCell sx={styles.td}>{d.processId}</TableCell>
          <TableCell sx={styles.td}>{d.name}</TableCell>
          <TableCell sx={styles.td}>{d.phone}</TableCell>
          <TableCell sx={styles.td}>{d.issueNumber}</TableCell>
          <TableCell sx={(styles.td, styles.tdAvatar)}>
            <Avatar {...stringAvatar(`${d.reporter}`)} sx={styles.avatar} />
            {d.reporter}
          </TableCell>
          <TableCell sx={styles.td}>{d.date}</TableCell>
          <TableCell />
        </TableRow>
      ))}
    </Table>
  );
}

export default DataTable;
