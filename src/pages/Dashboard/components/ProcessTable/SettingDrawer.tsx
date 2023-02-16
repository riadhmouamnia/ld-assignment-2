import {
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { appBarStyles, drawerStyles } from "./styles/styles";
import MenuItem from "@mui/material/MenuItem";
import ShoppingBag from "assets/ShoppingBag.svg";
import ArrowDownSetting from "assets/ArrowDownSetting.svg";
import ArrowUpSetting from "assets/ArrowUpSetting.svg";
import LeftArrow from "assets/LeftArrow.svg";
import RightArrow from "assets/RightArrow.svg";
import Icon from "@mui/material/Icon";
import { useState } from "react";

const contractTypes = [
  { value: "1 year", label: "1y" },
  { value: "2 year", label: "2y" },
  { value: "3 year", label: "3y" },
  { value: "4 year", label: "4y" },
  { value: "Monthly", label: "m" },
  { value: "Weekly", label: "w" },
];

type settingsItemProps = {
  label: string;
  name?: string;
  options?: any;
  select?: boolean;
};

const settingMainInputs: settingsItemProps[] = [
  { label: "Contact numbers", name: "contactNumbers" },
  { label: "Customer number", name: "customerNumber" },
  { label: "Email", name: "email" },
  { label: "Contract type", options: contractTypes, select: true },
  { label: "Phone provider", name: "phoneProvider" },
];

const settingsFooterInputs: settingsItemProps[] = [
  { label: "Email", name: "email" },
  { label: "Contract type", options: contractTypes, select: true },
  { label: "Discount", name: "discount" },
];

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function SettingDrawer({ open, setOpen }: Props) {
  const [openCollapse, setOpenCollapse] = useState(true);
  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
  };
  return (
    <Drawer variant={"persistent"} sx={drawerStyles} anchor="right" open={open}>
      <Box>
        {settingMainInputs.map((settingItem, index) => (
          <TextField
            key={index}
            size="small"
            margin="normal"
            fullWidth
            {...settingItem}
          >
            {settingItem.options?.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        ))}

        <Box sx={drawerStyles.dropDown}>
          <Box sx={drawerStyles.iconText}>
            <Icon sx={drawerStyles.iconText}>
              <Box component="img" src={ShoppingBag} />
            </Icon>
            <Typography sx={drawerStyles.text}>TIM</Typography>
          </Box>
          <Icon sx={drawerStyles.iconText}>
            <Box component="img" src={ArrowDownSetting} />
          </Icon>
        </Box>
        <Box sx={drawerStyles.dropDown} onClick={handleCollapse}>
          <Box sx={drawerStyles.iconText}>
            <Icon sx={drawerStyles.iconText}>
              <Box component="img" src={ShoppingBag} />
            </Icon>
            <Typography sx={drawerStyles.text}>Disney Plus</Typography>
          </Box>
          <Icon sx={drawerStyles.iconText}>
            <Box
              component="img"
              src={openCollapse ? ArrowUpSetting : ArrowDownSetting}
            />
          </Icon>
        </Box>
        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
          {settingsFooterInputs.map((settings, index) => (
            <TextField
              key={index}
              size="small"
              margin="normal"
              fullWidth
              {...settings}
            >
              {settings.options?.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          ))}
        </Collapse>
        <Box sx={drawerStyles.footer}>
          <Box sx={drawerStyles.container}>
            <IconButton sx={appBarStyles.iconWrapper} aria-label="settings">
              <Icon sx={drawerStyles.iconText}>
                <Box component="img" src={LeftArrow} />
              </Icon>
            </IconButton>
            <IconButton sx={appBarStyles.iconWrapper} aria-label="settings">
              <Icon sx={drawerStyles.iconText}>
                <Box component="img" src={RightArrow} />
              </Icon>
            </IconButton>
          </Box>
          <Box sx={drawerStyles.container}>
            <Button
              variant="outlined"
              sx={drawerStyles.cancel}
              disableElevation
              onClick={() => setOpen(false)}
            >
              Annula
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disableElevation
            >
              Salva
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default SettingDrawer;
