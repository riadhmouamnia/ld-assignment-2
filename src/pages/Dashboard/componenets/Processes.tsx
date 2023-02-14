import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../redux/hooks";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import { Box } from "@mui/material";
import AddCard from "./AddCard";
import CreateProcessModal from "./CreateProcessModal";

interface ResponseData {
  id: number;
  processName: string;
  color: string;
  private?: boolean;
  // data: [];
}
const Processes: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [processes, setProcesses] = useState<ResponseData[]>([]);
  const { userInfo } = useAppSelector(({ auth }) => auth);
  const HndleOpen: React.MouseEventHandler<HTMLDivElement> = () => {
    setOpen(true);
  };
  const getProcesses = async () => {
    try {
      const response = await fetch("http://localhost:3000/processes");
      const processes = await response.json();
      setProcesses(processes);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProcesses();
  }, []);
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
        {processes.map((p) => (
          <Grid item key={p.id}>
            <Cards process={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Processes;
