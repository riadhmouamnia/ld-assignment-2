import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector, useAppDispatch } from "redux/hooks";
import Grid from "@mui/material/Grid";
import Cards from "pages/Dashboard/components/ContentComponent/Cards";
import { Box } from "@mui/material";
import AddCard from "pages/Dashboard/components/ContentComponent/AddCard";
import CreateProcessModal from "pages/Dashboard/components/ContentComponent/CreateProcessModal";
import { Spacer } from "pages/Dashboard/components/ProcessTable/styles/styles";
import { useNavigate } from "react-router-dom";
import { HeaderText } from "pages/Dashboard/components/ContentComponent/Styles";
import { getProcesses } from "redux/features/data/dataSlice";
import CircularProgress from "@mui/material/CircularProgress";
import NetWorkError from "pages/Dashboard/components/ContentComponent/NetWorkError";

const ContentComponent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProcesses());
  }, []);
  const { processData, loading, error, isSuccess } = useAppSelector(
    ({ data }) => data
  );
  const [open, setOpen] = useState<boolean>(false);
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const HndleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  return (
    <Box p={6}>
      <Spacer />
      {loading && <CircularProgress />}
      {!loading && error ? <NetWorkError message={error} /> : null}
      {!loading && isSuccess ? (
        <>
          <CreateProcessModal open={open} setOpen={setOpen} />
          <HeaderText>
            <Typography variant="h4" color="text.primary">
              Welcome, {userInfo?.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Work with your team mates. take track of your process and close
              all tasks
            </Typography>
          </HeaderText>
          <Grid container gap={3} mt={4}>
            <Grid item>
              <AddCard HndleOpen={HndleOpen} />
            </Grid>
            {processData?.map((p) => (
              <Grid
                item
                key={p.id}
                onClick={() => {
                  if (p.private) {
                    return;
                  }
                  navigate(`/${p.id}`);
                }}
              >
                <Cards process={p} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : null}
    </Box>
  );
};

export default ContentComponent;
