import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../../redux/hooks";
import Grid from "@mui/material/Grid";
import Cards from "./components/Cards";
import { Box } from "@mui/material";
import AddCard from "./components/AddCard";
import CreateProcessModal from "./components/CreateProcessModal";
import { DataProps } from "./contentTypes";

const ContentComponent = ({ data }: DataProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const HndleOpen = () => {
    setOpen(true);
  };
  return (
    <Box p={6}>
      <CreateProcessModal open={open} setOpen={setOpen} />
      <Box sx={{ height: "64px" }} />
      <Box width="600px" display="flex" flexDirection="column" gap={2}>
        <Typography variant="h4" color="text.primary">
          Welcome,{userInfo?.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Work with your team mates. take track of your process and close all
          tasks
        </Typography>
      </Box>
      <Grid container gap={3} mt={4}>
        <Grid item>
          <AddCard HndleOpen={HndleOpen} />
        </Grid>
        {data?.map((p) => (
          <Grid item key={p.id}>
            <Cards process={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentComponent;
