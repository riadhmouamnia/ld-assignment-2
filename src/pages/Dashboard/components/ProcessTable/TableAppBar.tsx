import { Button, IconButton, Box } from "@mui/material";
import {
  AppBar,
  appBarStyles,
} from "pages/Dashboard/components/ProcessTable/styles/styles";
import AddCircle from "assets/AddCircle.svg";
import Icon from "@mui/material/Icon";
import TableAppBarButton from "pages/Dashboard/components/ProcessTable/TableAppBarButton";
import { items, iconList } from "utils/TableAppBarItems";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function TableAppBar({ setOpen, open }: Props) {
  return (
    <AppBar>
      <Box sx={appBarStyles.leftContainer}>
        <Box sx={appBarStyles.iconWrapper}>
          {items.map((item, index) => (
            <TableAppBarButton key={index} {...item} index={index} />
          ))}
        </Box>
      </Box>
      <Box sx={appBarStyles.rightContainer}>
        {iconList.map((item, index) => (
          <IconButton key={index} sx={appBarStyles.iconWrapper}>
            <Icon>
              <Box component="img" src={item} />
            </Icon>
          </IconButton>
        ))}
        <Button
          sx={appBarStyles.addButton}
          startIcon={
            <Icon>
              <Box
                component="img"
                src={AddCircle}
                sx={appBarStyles.iconWrapper}
              />
            </Icon>
          }
          onClick={() => setOpen(true)}
        >
          Add
        </Button>
      </Box>
    </AppBar>
  );
}

export default TableAppBar;
