import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  Icon,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import stringAvatar from "pages/Dashboard/components/AppBarComponent/stringAvatar";
import AddNewButton from "assets/AddNewButton.svg";
import DownArrow from "assets/DownArrow.svg";
import PhaseArrows from "assets/PhaseArrows.svg";
import Date from "assets/Date.svg";
import Vendor from "assets/Vendor.svg";
import Divider from "assets/Divider.svg";
import DataStorage from "assets/DataStorage.svg";
import HrDivider from "assets/HrDivider.svg";
import Document from "assets/Document.svg";
import VerticalDivider from "assets/VerticalDivider.svg";
import { dialogLeftSide } from "./DialogLeftSideStyles";
import TextField from "@mui/material/TextField/TextField";

const avatarNames = [
  { id: 1, name: "P L" },
  { id: 2, name: "C M" },
  { id: 3, name: "F N" },
  { id: 4, name: "L M" },
  { id: 5, name: "S T" },
];

function DialogLeftSide() {
  return (
    <Box sx={dialogLeftSide.wrapper}>
      <Box sx={dialogLeftSide.head}>
        <Box sx={dialogLeftSide.flexContainer}>
          {avatarNames.map((n) => (
            <Box key={n.id}>
              <Avatar
                {...stringAvatar(`${n.name}`)}
                sx={dialogLeftSide.avatar}
              />
            </Box>
          ))}
          <Typography sx={dialogLeftSide.plusText}>+5</Typography>
          <IconButton sx={dialogLeftSide.iconWrapper}>
            <Icon>
              <Box component="img" src={AddNewButton} />
            </Icon>
          </IconButton>
        </Box>
        <Box sx={dialogLeftSide.flexContainer}>
          <Icon sx={dialogLeftSide.iconWrapper}>
            <Box component="img" src={PhaseArrows} />
          </Icon>
          <Button
            sx={dialogLeftSide.greyTextButton}
            endIcon={
              <Icon sx={dialogLeftSide.iconWrapper}>
                <Box component="img" src={DownArrow} />
              </Icon>
            }
          >
            Chapter One
          </Button>
        </Box>
        <Box sx={dialogLeftSide.flexContainer}>
          <Button
            sx={dialogLeftSide.greyTextButton}
            startIcon={
              <Icon sx={dialogLeftSide.iconWrapper}>
                <Box component="img" src={Date} />
              </Icon>
            }
          >
            05/10/2021 - 17:50
          </Button>
        </Box>
      </Box>
      <Box sx={dialogLeftSide.flexContainer}>
        <Button sx={{ ...dialogLeftSide.label, ...dialogLeftSide.labelOne }}>
          label 1
        </Button>
        <Button sx={{ ...dialogLeftSide.label, ...dialogLeftSide.labelTwo }}>
          label 2
        </Button>
        <Button sx={{ ...dialogLeftSide.label, ...dialogLeftSide.labelThree }}>
          label 3
        </Button>
        <IconButton sx={dialogLeftSide.iconWrapper}>
          <Icon>
            <Box component="img" src={AddNewButton} />
          </Icon>
        </IconButton>
      </Box>
      <Box sx={dialogLeftSide.flexContainer}>
        <Button
          sx={dialogLeftSide.greyTextButton}
          startIcon={
            <Icon sx={dialogLeftSide.iconWrapper}>
              <Box component="img" src={Vendor} />
            </Icon>
          }
          endIcon={
            <Icon sx={dialogLeftSide.iconWrapper}>
              <Box component="img" src={DownArrow} />
            </Icon>
          }
        >
          Select vendors
        </Button>
        <Box component="img" src={Divider} sx={dialogLeftSide.dividerSpace} />
        <Box sx={dialogLeftSide.flexContainer}>
          <Button
            sx={dialogLeftSide.labelGrey}
            startIcon={
              <Icon sx={dialogLeftSide.iconWrapper}>
                <Box component="img" src={DataStorage} />
              </Icon>
            }
          >
            #database_object_1
          </Button>
          <Button
            sx={dialogLeftSide.labelGrey}
            startIcon={
              <Icon sx={dialogLeftSide.iconWrapper}>
                <Box component="img" src={DataStorage} />
              </Icon>
            }
          >
            #db_object1
          </Button>
        </Box>
      </Box>
      <Box component="img" src={HrDivider} sx={dialogLeftSide.hrDevider} />
      <Box>
        <Typography sx={dialogLeftSide.formHeading}>Startform Name</Typography>
        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          size="small"
        />
        <TextField
          fullWidth
          label="Description test"
          margin="normal"
          defaultValue="Lorem ipsum"
          multiline
          maxRows={4}
          helperText="This is a description"
        />
        <Typography sx={dialogLeftSide.formHeading}>Company data</Typography>
        <Box sx={dialogLeftSide.companyData}>
          <Box sx={dialogLeftSide.fileContainer}>
            <Icon>
              <Box component="img" src={Document} />
            </Icon>
            <Icon sx={dialogLeftSide.vrDevider}>
              <Box component="img" src={VerticalDivider} />
            </Icon>
          </Box>
          <Box sx={dialogLeftSide.companyDataForm}>
            <TextField
              fullWidth
              label="Company name"
              name="companyName"
              margin="normal"
              size="small"
            />
            <TextField
              fullWidth
              label="Surname"
              name="surName"
              margin="normal"
              size="small"
            />
            <RadioGroup name="use-radio-group" defaultValue="company">
              <FormControlLabel
                value="company"
                control={<Radio sx={dialogLeftSide.radioButtons} />}
                label="Company"
              />
              <FormControlLabel
                value="person"
                control={<Radio sx={dialogLeftSide.radioButtons} />}
                label="Person"
              />
            </RadioGroup>
          </Box>
        </Box>
        <Typography sx={dialogLeftSide.formHeading}>Company data</Typography>
        <RadioGroup name="use-radio-group" defaultValue="company">
          <FormControlLabel
            value="company"
            control={<Radio sx={dialogLeftSide.radioButtons} />}
            label="Company"
          />
          <FormControlLabel
            value="person"
            control={<Radio sx={dialogLeftSide.radioButtons} />}
            label="Person"
          />
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default DialogLeftSide;
