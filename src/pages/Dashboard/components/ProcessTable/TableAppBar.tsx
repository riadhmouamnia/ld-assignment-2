import { Button, IconButton, Box } from "@mui/material";
import {
  AppBar,
  appBarStyles,
} from "pages/Dashboard/components/ProcessTable/styles/styles";
import TableAppBarButton from "pages/Dashboard/components/ProcessTable/TableAppBarButton";
import { items } from "utils/TableAppBarItems";
import { TbCirclePlus } from "react-icons/tb";
import {
  SettingIconMeduim,
  ShoppingBagAppBar,
  SearchIconAppBar,
  FileImport,
  FileExport,
} from "components/icons";

const iconList = [
  { icon: <ShoppingBagAppBar />, name: "Shopping bag" },
  { icon: <SearchIconAppBar />, name: "Search" },
  { icon: <FileImport />, name: "Import" },
  { icon: <FileExport />, name: "Import" },
  { icon: <SettingIconMeduim />, name: "settings" },
];

type Props = {
  setIsInfoPanel: (isInfoPanelOpen: boolean) => void;
  setIsMembersModal: (isMemberModalOpen: boolean) => void;
};

function TableAppBar({ setIsInfoPanel, setIsMembersModal }: Props) {
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
        {iconList.map((item, index) =>
          item.name === "settings" ? (
            <IconButton key={index} onClick={() => setIsMembersModal(true)}>
              {item.icon}
            </IconButton>
          ) : (
            <IconButton key={index}>{item.icon}</IconButton>
          )
        )}
        <Button
          sx={appBarStyles.addButton}
          startIcon={<TbCirclePlus />}
          onClick={() => setIsInfoPanel(true)}
        >
          Add
        </Button>
      </Box>
    </AppBar>
  );
}

export default TableAppBar;
