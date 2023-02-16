import {
  styles,
  Header,
} from "pages/Dashboard/components/ProcessTable/styles/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DownArrow from "assets/DownArrow.svg";
import Start from "assets/Start.svg";
import ErrorStatusButton from "assets/ErrorStatusButton.svg";
import WarningStatusButton from "assets/WarningStatusButton.svg";
import AddNewButton from "assets/AddNewButton.svg";
import VerticalMenu from "assets/VerticalMenu.svg";

function TableHead() {
  return (
    <Header>
      <Box component="img" src={DownArrow} sx={styles.icon} />
      <Box component="img" src={Start} sx={styles.icon} />
      <Typography variant="h6" sx={styles.contact}>
        New Contract
      </Typography>
      <Button sx={styles.headerButton}>8 Schede</Button>
      <Box component="img" src={ErrorStatusButton} sx={styles.icon} />
      <Box component="img" src={WarningStatusButton} sx={styles.icon} />
      <Box component="img" src={AddNewButton} sx={styles.icon} />
      <Box component="img" src={VerticalMenu} sx={styles.icon} />
    </Header>
  );
}

export default TableHead;
