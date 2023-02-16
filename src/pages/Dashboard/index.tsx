import { useState, useEffect } from "react";
import DrawerComponent from "./componenets/DrawerComponent";
import AppBarComponent from "./componenets/AppBarComponent";
import ContentComponent from "./componenets/ContentComponent";
import DashBoardContainer from "./componenets/DashBoardContainer";
import ProcessTable from "./componenets/ProcessTable";
import useAxiosFetch from "../../hooks/useAxiosFetch";

const BASE_URL = "http://localhost:3000/processes";

function Dashboard() {
  const [open, setOpen] = useState<boolean>(false);
  // const { data } = useAxiosFetch(BASE_URL);
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
