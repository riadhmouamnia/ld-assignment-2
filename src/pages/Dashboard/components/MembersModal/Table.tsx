import { Box, Button, Typography } from "@mui/material";
import { SearchIcon } from "components/icons";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  TableStyles,
} from "pages/Dashboard/components/MembersModal/styles";
import { TbCirclePlus } from "react-icons/tb";
import Divider from "@mui/material/Divider";
import TabPanel from "pages/Dashboard/components/MembersModal/TabPanel";

type Props = { value: number; index: number };

function Table({ value }: Props) {
  return (
    <Box sx={TableStyles.container}>
      <TabPanel value={value} index={0}>
        Startfrom
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Box sx={TableStyles.TopPart}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Cerca utente"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Typography sx={TableStyles.Title}>Membri</Typography>
          <Button
            variant="contained"
            color="error"
            disableElevation
            startIcon={<TbCirclePlus />}
            sx={TableStyles.InviteButton}
          >
            Invita
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}

export default Table;
