import ContentComponent from "pages/Dashboard/components/ContentComponent";
import useAxiosFetch from "hooks/useAxiosFetch";
import { useAppDispatch } from "redux/hooks";
import { setData, setError, setLoading } from "redux/features/data/dataSlice";

const BASE_URL = "http://localhost:3000/processes";

function Dashboard() {
  const { data, isLoading, fetchError } = useAxiosFetch(BASE_URL);
  const dispatch = useAppDispatch();
  dispatch(setData(data));
  dispatch(setLoading(isLoading));
  dispatch(setError(fetchError));

  return (
    <>
      <ContentComponent />
    </>
  );
}

export default Dashboard;
