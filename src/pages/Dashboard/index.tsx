import { useState } from "react";
import DrawerComponent from "pages/Dashboard/components/DrawerComponent";
import AppBarComponent from "pages/Dashboard/components/AppBarComponent";
import ContentComponent from "pages/Dashboard/components/ContentComponent";
import DashBoardContainer from "pages/Dashboard/components/DashBoardContainer";
import ProcessTable from "pages/Dashboard/components/ProcessTable";
import useAxiosFetch from "hooks/useAxiosFetch";

const BASE_URL = "http://localhost:3000/processes";

function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useAxiosFetch(BASE_URL);
  return (
    <DashBoardContainer>
      <AppBarComponent open={open} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <ProcessTable />
      {/* <ContentComponent data={data} /> */}
    </DashBoardContainer>
  );
}

export default Dashboard;
