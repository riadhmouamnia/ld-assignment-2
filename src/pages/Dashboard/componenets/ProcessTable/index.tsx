import { Box } from "@mui/material";
import { Spacer, Wrapper } from "./styles/styles";
import DataTable from "./components/DataTable";
import { DataProps } from "../ContentComponent/contentTypes";
import TableAppBar from "./components/TableAppBar";
import TableHead from "./components/TableHead";

function index() {
  return (
    <Wrapper>
      <Spacer />
      <TableAppBar />
      <TableHead />
      <DataTable />
    </Wrapper>
  );
}

export default index;
