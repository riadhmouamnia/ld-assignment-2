import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import stringAvatar from "pages/Dashboard/components/AppBarComponent/stringAvatar";
import HrDivider from "assets/HrDivider.svg";
import { dialogLeftSide } from "./DialogLeftSideStyles";
import TextField from "@mui/material/TextField/TextField";
import { TbCirclePlus } from "react-icons/tb";
import {
  colors,
  DialogContainer,
} from "pages/Dashboard/components/ProcessModel/styles";
import {
  ChevronDownSmall,
  DateIcon,
  PersonIcon,
  TwoArrowsRight,
  DataStorage,
  Divider,
  DocumentIcon,
  VrDevider,
} from "components/icons";

const avatarNames = [
  { id: 1, name: "P L" },
  { id: 2, name: "C M" },
  { id: 3, name: "F N" },
  { id: 4, name: "L M" },
  { id: 5, name: "S T" },
];

const Genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "notDeprecated", label: "Not Deprecated" },
];

function DialogLeftSide() {
  return (
    <Box sx={DialogContainer}>
      <Box sx={dialogLeftSide.head}>
        <Box sx={dialogLeftSide.flexContainer}>
          {avatarNames.map((n) => (
            <Avatar
              key={n.id}
              {...stringAvatar(`${n.name}`)}
              sx={dialogLeftSide.avatar}
            />
          ))}
          <Typography sx={dialogLeftSide.plusText}>+5</Typography>
          <IconButton sx={colors.primary}>
            <TbCirclePlus />
          </IconButton>
        </Box>
        <Box sx={dialogLeftSide.flexContainer}>
          <TwoArrowsRight />
          <Button
            sx={dialogLeftSide.greyTextButton}
            endIcon={<ChevronDownSmall />}
          >
            Chapter One
          </Button>
        </Box>
        <Button sx={dialogLeftSide.greyTextButton} startIcon={<DateIcon />}>
          05/10/2021 - 17:50
        </Button>
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
        <IconButton sx={colors.primary}>
          <TbCirclePlus />
        </IconButton>
      </Box>
      <Box sx={dialogLeftSide.flexContainer}>
        <Button
          sx={dialogLeftSide.greyTextButton}
          startIcon={<PersonIcon />}
          endIcon={<ChevronDownSmall />}
        >
          Select vendors
        </Button>
        <Divider />
        <Box sx={dialogLeftSide.flexContainer}>
          <Button sx={dialogLeftSide.labelGrey} startIcon={<DataStorage />}>
            #database_object_1
          </Button>
          <Button sx={dialogLeftSide.labelGrey} startIcon={<DataStorage />}>
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
            <DocumentIcon />
            <VrDevider />
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
        <Typography sx={dialogLeftSide.formHeading}>Gender</Typography>
        <RadioGroup name="use-radio-group" defaultValue="female">
          {Genders.map((gender, index) => (
            <FormControlLabel
              key={index}
              value={gender.value}
              control={<Radio sx={dialogLeftSide.radioButtons} />}
              label={gender.label}
            />
          ))}
        </RadioGroup>
      </Box>
    </Box>
  );
}

export default DialogLeftSide;
