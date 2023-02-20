import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../../redux/hooks";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import { Box } from "@mui/material";
import AddCard from "./AddCard";
import CreateProcessModal from "./CreateProcessModal";
import { Spacer } from "../ProcessTable/styles/styles";
import { useNavigate } from "react-router-dom";
import { HeaderText } from "pages/Dashboard/components/ContentComponent/Styles";

const ContentComponent = () => {
  const { processData } = useAppSelector(({ data }) => data);
  const [open, setOpen] = useState<boolean>(false);
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const HndleOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  return (
    <Box p={6}>
      <CreateProcessModal open={open} setOpen={setOpen} />
      <Spacer />
      <HeaderText>
        <Typography variant="h4" color="text.primary">
          Welcome,{userInfo?.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Work with your team mates. take track of your process and close all
          tasks
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
    </Box>
  );
};

export default ContentComponent;
