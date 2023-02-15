import React from "react";
import DrawerComponent from "./componenets/DrawerComponent";
import AppBarComponent from "./componenets/AppBarComponent";
import ContentComponent from "./componenets/ContentComponent";
import DashBoardContainer from "./componenets/DashBoardContainer";
import axios from "axios";

interface ResponseData {
  id: number;
  processName: string;
  color: string;
  private?: boolean;
  // data: [];
}

const BASE_URL = "http://localhost:3000/processes";

function Dashboard() {
  const [data, setData] = React.useState<any>([]);
  const [fetchError, setFetchError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(BASE_URL, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err: any) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        setTimeout(() => {
          isMounted && setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();

    const cleanUp = () => {
      isMounted = false;
      source.cancel();
    };

    return cleanUp;
  }, [BASE_URL]);

  return (
    <DashBoardContainer>
      <AppBarComponent open={open} />
      <DrawerComponent open={open} setOpen={setOpen} />
      <ContentComponent data={data} isLoading={isLoading} />
    </DashBoardContainer>
  );
}

export default Dashboard;
