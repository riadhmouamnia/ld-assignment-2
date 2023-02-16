import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { AppBar, appBarStyles } from "../styles/styles";
import Views from "../../../../../assets/Views.svg";
import Divider from "../../../../../assets/Divider.svg";
import Tables from "../../../../../assets/Tables.svg";
import DownArrow from "../../../../../assets/DownArrow.svg";
import Column from "../../../../../assets/Column.svg";
import Filter from "../../../../../assets/Filter.svg";
import Phases from "../../../../../assets/Phases.svg";
import ArrowsUpDown from "../../../../../assets/ArrowsUpDown.svg";
import Colors from "../../../../../assets/Colors.svg";
import VerticalResize from "../../../../../assets/VerticalResize.svg";
import ShoppingBag from "../../../../../assets/ShoppingBag.svg";
import Research from "../../../../../assets/Research.svg";
import FileImport from "../../../../../assets/FileImport.svg";
import FileExport from "../../../../../assets/FileExport.svg";
import Setting from "../../../../../assets/Setting.svg";
import AddCircle from "../../../../../assets/AddCircle.svg";

import Icon from "@mui/material/Icon";

function TableAppBar() {
  return (
    <AppBar>
      <Box sx={appBarStyles.leftContainer}>
        <Box sx={appBarStyles.iconWrapper}>
          <Box component="img" src={Views} sx={appBarStyles.icon} />
          <Typography sx={appBarStyles.font}>Views</Typography>
        </Box>
        <Box component="img" src={Divider} sx={appBarStyles.icon} />
        <Box sx={appBarStyles.iconWrapper}>
          <Box component="img" src={Tables} sx={appBarStyles.icon} />
          <Typography sx={appBarStyles.font}>Tables</Typography>
          <Box component="img" src={DownArrow} sx={appBarStyles.downArrow} />
        </Box>
        <Box component="img" src={Divider} sx={appBarStyles.icon} />
        <Box sx={appBarStyles.iconWrapper}>
          <Button
            sx={appBarStyles.columnButton}
            startIcon={
              <Icon>
                <Box
                  component="img"
                  src={Column}
                  sx={appBarStyles.iconWrapper}
                />
              </Icon>
            }
          >
            Columns
          </Button>
          <Button
            sx={appBarStyles.filterButton}
            startIcon={
              <Icon>
                <Box
                  component="img"
                  src={Filter}
                  sx={appBarStyles.iconWrapper}
                />
              </Icon>
            }
          >
            Filter
          </Button>
          <Button
            sx={appBarStyles.phasesButton}
            startIcon={
              <Icon>
                <Box
                  component="img"
                  src={Phases}
                  sx={appBarStyles.iconWrapper}
                />
              </Icon>
            }
          >
            <Box sx={appBarStyles.phasesButton.innerText}>Grouped in:</Box>
            Phases
          </Button>
          <Button
            sx={appBarStyles.filterButton}
            startIcon={
              <Icon>
                <Box
                  component="img"
                  src={ArrowsUpDown}
                  sx={appBarStyles.iconWrapper}
                />
              </Icon>
            }
          >
            Orders
          </Button>
          <Button
            sx={appBarStyles.filterButton}
            startIcon={
              <Icon>
                <Box
                  component="img"
                  src={Colors}
                  sx={appBarStyles.iconWrapper}
                />
              </Icon>
            }
          >
            Colors
          </Button>
          <Button
            sx={appBarStyles.filterButton}
            startIcon={
              <Icon>
                <Box
                  component="img"
                  src={VerticalResize}
                  sx={appBarStyles.iconWrapper}
                />
              </Icon>
            }
          >
            Height
          </Button>
        </Box>
      </Box>
      <Box sx={appBarStyles.rightContainer}>
        <Icon>
          <Box
            component="img"
            src={ShoppingBag}
            sx={appBarStyles.iconWrapper}
          />
        </Icon>
        <Icon>
          <Box component="img" src={Research} sx={appBarStyles.iconWrapper} />
        </Icon>
        <Icon>
          <Box component="img" src={FileImport} sx={appBarStyles.iconWrapper} />
        </Icon>
        <Icon>
          <Box component="img" src={FileExport} sx={appBarStyles.iconWrapper} />
        </Icon>
        <Icon>
          <Box component="img" src={Setting} sx={appBarStyles.iconWrapper} />
        </Icon>
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
        >
          Add
        </Button>
      </Box>
    </AppBar>
  );
}

export default TableAppBar;
