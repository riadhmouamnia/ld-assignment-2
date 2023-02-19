import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../../redux/hooks";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
import { Box } from "@mui/material";
import AddCard from "./AddCard";
import CreateProcessModal from "./CreateProcessModal";
import { DataProps } from "./contentTypes";
import { Spacer } from "../ProcessTable/styles/styles";
import { useNavigate } from "react-router-dom";

const ContentComponent = ({ data }: DataProps) => {
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
