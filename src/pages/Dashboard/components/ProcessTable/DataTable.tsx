import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { data } from "pages/Dashboard/components/ProcessTable/data";
import { styles } from "pages/Dashboard/components/ProcessTable/styles/styles";
import stringAvatar from "pages/Dashboard/components/AppBarComponent/stringAvatar";
import { Avatar } from "@mui/material";

type ModelProps = {
  setIsProcessModel: (isProcessModelOpen: boolean) => void;
};

function DataTable({ setIsProcessModel }: ModelProps) {
  return (
    <Table size="small">
      {data.map((d) => (
        <TableRow hover key={d.id}>
          <TableCell />
          <TableCell
            onClick={() => setIsProcessModel(true)}
            sx={{ ...styles.td, ...styles.tdClick }}
          >
            {d.processId}
          </TableCell>
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
