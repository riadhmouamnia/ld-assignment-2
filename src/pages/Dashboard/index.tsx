import ContentComponent from "pages/Dashboard/components/ContentComponent";
import useAxiosFetch from "hooks/useAxiosFetch";

const BASE_URL = "http://localhost:3000/processes";

function Dashboard() {
  const { data } = useAxiosFetch(BASE_URL);
  return (
    <>
      <ContentComponent data={data} />
    </>
  );
}

export default Dashboard;
