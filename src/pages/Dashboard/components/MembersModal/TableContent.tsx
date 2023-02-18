// import React, { useState } from "react";
// // import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Checkbox from "@mui/material/Checkbox";

// // const columns: GridColDef[] = [
// //     { field: 'fullName', headerName: 'Utente', width: 70 },
// //     { field: 'email', headerName: 'Email', width: 130 },
// //     { field: 'permessi', headerName: 'Permessi', width: 130 },
// //     {
// //       field: 'fullName',
// //       headerName: 'Utente',
// //       description: 'This column has a value getter and is not sortable.',
// //       sortable: false,
// //       width: 160,
// //       valueGetter: (params: GridValueGetterParams) =>
// //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //     },
// //   ];

// const rows = [
//   {
//     id: 1,
//     fullName: "Michele Cimmino",
//     Email: "michele.cimmino@lastingdynamics.com",
//     permessi: "Admin",
//   },
//   {
//     id: 2,
//     fullName: "Marino Panariello",
//     Email: "marino.panariello@lastingdynamics.com",
//     permessi: "Utente",
//   },
//   {
//     id: 3,
//     fullName: "Vincenzo Lavorante",
//     Email: "vincenzo.lavorante@lastingdynamics.com",
//     permessi: "Venditore",
//   },
//   {
//     id: 4,
//     fullName: "Antonio Langella",
//     Email: "antonio.langella@lastingdynamics.com",
//     permessi: "Solo Lettura",
//   },
//   {
//     id: 5,
//     fullName: "Alessandro Durni",
//     Email: "a.durni@lastingdynamics.com",
//     permessi: "Venditore",
//   },
//   {
//     id: 6,
//     fullName: "Andrea",
//     Email: "andrea@coraly.com",
//     permessi: "Venditore",
//   },
//   {
//     id: 7,
//     fullName: "Francesco",
//     Email: "francesco@coraly",
//     permessi: "Utente  ",
//   },
// ];

// function TableContent() {
//   const [isSelected, setIsSelected] = useState(false);
//   const [selected, setSelected] = useState(false);
//   console.log(selected);

//   return (
//     <Table size="small" >
//       <TableHead>
//         <TableRow>
//           <TableCell>
//             <Checkbox onClick={() => setIsSelected(!isSelected)} />
//             Nome
//           </TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>Permessi</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {rows.map((row) => (
//           <TableRow key={row.id}>
//             <TableCell>
//               <Checkbox onChange={(e) => console.log(e.target.id)} />
//               {row.fullName}
//             </TableCell>
//             <TableCell>{row.Email}</TableCell>
//             <TableCell>{row.permessi}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }

// export default TableContent;

import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import { Trash } from "components/icons";

interface Data {
  name: string;
  email: string;
  permessi: string;
  //   fat: any;
}

function createData(
  name: string,
  email: string,
  permessi: string
  //   fat: number
): Data {
  return {
    name,
    email,
    permessi,
    // fat,
  };
}

const rows = [
  createData("Michele Cimmino", "michele.cimmino@lastingdynamics.com", "Admin"),
  createData(
    "Marino Panariello",
    "marino.panariello@lastingdynamics.com",
    "Utente"
  ),
  createData(
    "Vincenzo Lavorante",
    "vincenzo.lavorante@lastingdynamics.com",
    "Venditore"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Ultente",
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "permessi",
    numeric: true,
    disablePadding: false,
    label: "Permessi",
  },
  //   {
  //     id: "delete",
  //     numeric: false,
  //     disablePadding: false,
  //     label: "",
  //   },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("email");
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size="small">
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(rows, getComparator(order, orderBy)).map(
              (row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.permessi}</TableCell>
                    <TableCell align="right">
                      <Trash />
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
