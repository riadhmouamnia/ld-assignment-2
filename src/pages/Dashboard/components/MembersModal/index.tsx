import { Box, Grid, Modal } from "@mui/material";
import Header from "pages/Dashboard/components/MembersModal/Header";
import NavBar from "pages/Dashboard/components/MembersModal/NavBar";
import { modalStyles } from "pages/Dashboard/components/MembersModal/styles";
import Table from "pages/Dashboard/components/MembersModal/Table";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";

function MembersModal() {
  const [value, setValue] = useState(8);
  return (
    <Modal open={true}>
      <Box sx={modalStyles}>
        <Header />
        <Grid container spacing={2} height="90%">
          <Grid item xs={2}>
            <NavBar value={value} setValue={setValue} />
          </Grid>
          <Grid item xs={0.1}>
            <Divider orientation="vertical" sx={modalStyles.DeviderStyle} />
          </Grid>
          <Grid item xs={9.8}>
            <Table value={value} index={value} />
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default MembersModal;
