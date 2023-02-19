import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TabStyles,
} from "pages/Dashboard/components/MembersModal/styles";
import { ExpandPermessiMenu, SearchIcon } from "components/icons";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import { TbCirclePlus } from "react-icons/tb";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { InfosIcon, Trash } from "components/icons";
import { IconButton } from "@mui/material";
import { rows, Permessi } from "utils/membersList";
import CheckBox from "components/CheckBox";
import {
  CenterIcon,
  PermessiStyles,
  StyledTableHead,
} from "pages/Dashboard/components/MembersModal/MembriStyles";
const permessiList = ["Admin", "Utente", "Venditore", "Solo Lettura"];

const getButtonStyle = (permesso: Permessi) => {
  switch (permesso) {
    case "Admin":
      return PermessiStyles.admin;
    case "Utente":
      return PermessiStyles.utente;
    case "Venditore":
      return PermessiStyles.venditore;
    case "Solo Lettura":
      return PermessiStyles.soloLettura;
    default:
      return {};
  }
};

function Membri() {
  const [tableData, setTableData] = useState([...rows]);
  const [query, setQuery] = useState("");
  const [selectedMenu, setSelectedMenu] = useState<number>();

  const filtredData = tableData.filter((data) =>
    data.fullName.toLowerCase().includes(query.toLowerCase())
  );

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handlePermessoClick =
    (id: number) => (event: React.MouseEvent<HTMLElement>) => {
      setSelectedMenu(id);
      setAnchorEl(event.currentTarget);
    };

  const handlePermessoClose = (permesso: Permessi) => {
    if (!selectedMenu) return;
    setTableData(
      tableData.map((data) =>
        data.id !== selectedMenu ? data : { ...data, permessi: permesso }
      )
    );
    setSelectedMenu(undefined);
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={TabStyles.TopPart}>
        <Search onChange={handleQuery}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Cerca utente"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Typography sx={TabStyles.Title}>Membri</Typography>
        <Button
          variant="contained"
          color="error"
          disableElevation
          startIcon={<TbCirclePlus />}
          sx={TabStyles.InviteButton}
        >
          Invita
        </Button>
      </Box>
      <Table size="small">
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <CheckBox
                checked={tableData.every(({ checked }) => checked)}
                onChange={(e) => {
                  setTableData(
                    tableData.map((row) => ({
                      ...row,
                      checked: e.target.checked,
                    }))
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
          {filtredData.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>
                <CheckBox
                  checked={row.checked}
                  onChange={(e) => {
                    const newData = tableData.slice();
                    newData.splice(index, 1, {
                      ...row,
                      checked: e.target.checked,
                    });
                    setTableData(newData);
                  }}
                />
                {row.fullName}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                <Button
                  onClick={handlePermessoClick(row.id)}
                  sx={getButtonStyle(row.permessi)}
                  endIcon={<ExpandPermessiMenu />}
                >
                  {row.permessi}
                </Button>
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    if (!row.checked) {
                      return;
                    }
                    const newData = tableData.slice();
                    newData.splice(index, 1);
                    setTableData(newData);
                  }}
                  sx={{ cursor: !row.checked ? "not-allowed" : "pointer" }}
                >
                  <Trash />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu anchorEl={anchorEl} open={!!selectedMenu} elevation={1}>
        {permessiList.map((permesso) => (
          <MenuItem
            key={permesso}
            onClick={() => handlePermessoClose(permesso as Permessi)}
          >
            {permesso}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default Membri;
