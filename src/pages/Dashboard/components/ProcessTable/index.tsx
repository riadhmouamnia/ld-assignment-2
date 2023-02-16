import { Spacer, Wrapper } from "./styles/styles";
import { useState } from "react";
import DataTable from "pages/Dashboard/components/ProcessTable/DataTable";
import TableAppBar from "pages/Dashboard/components/ProcessTable/TableAppBar";
import TableHead from "pages/Dashboard/components/ProcessTable/TableHead";
import SettingDrawer from "pages/Dashboard/components/ProcessTable/SettingDrawer";
import ProcessModel from "pages/Dashboard/components/ProcessModel";

function index() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Spacer />
      <TableAppBar open={open} setOpen={setOpen} />
      <SettingDrawer open={open} setOpen={setOpen} />
      <TableHead />
      <DataTable />
      <ProcessModel />
    </Wrapper>
  );
}

export default index;
