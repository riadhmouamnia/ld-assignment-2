import { Box, Button, Typography } from "@mui/material";
import { SearchIcon } from "components/icons";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TabStyles,
} from "pages/Dashboard/components/MembersModal/styles";
import { TbCirclePlus } from "react-icons/tb";
import TabPanel from "pages/Dashboard/components/MembersModal/TabPanel";
import TableContent from "pages/Dashboard/components/MembersModal/TableContent";

type Props = { value: number; index: number };

function Tabs({ value }: Props) {
  return (
    <Box sx={TabStyles.container}>
      <TabPanel value={value} index={0}>
        Startfrom
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Box sx={TabStyles.TopPart}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cerca utente"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography sx={TabStyles.Title}>Membri</Typography>
          <Button
            variant="contained"
            color="error"
            disableElevation
            startIcon={<TbCirclePlus />}
            sx={TabStyles.InviteButton}
          >
            Invita
          </Button>
        </Box>
        <Box>
          <TableContent />
        </Box>
      </TabPanel>
    </Box>
  );
}

export default Tabs;
