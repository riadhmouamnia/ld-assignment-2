import { Box, Icon, IconButton, Typography } from "@mui/material";
import { headerContainer, ModelHeader } from "./styles";
import Divider from "assets/Divider.svg";
import Eye from "assets/Eye.svg";
import Folder from "assets/Folder.svg";
import Focus from "assets/Focus.svg";
import Link from "assets/Link.svg";
import MinusPath from "assets/MinusPath.svg";
import Trash from "assets/Trash.svg";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  return (
    <ModelHeader>
      <Typography variant="h4" sx={headerContainer.title}>
        Courtney@mail.com
      </Typography>
      <Box sx={headerContainer.rightContainer}>
        <Box sx={headerContainer.KOMotivation}>
          <IconButton sx={headerContainer.iconWrapper} aria-label="settings">
            <Icon>
              <Box component="img" src={Eye} />
            </Icon>
          </IconButton>
          <Typography sx={headerContainer.KOMotivation.text}>
            KO Motivation
          </Typography>
        </Box>
        <IconButton sx={headerContainer.iconWrapper} aria-label="settings">
          <Icon>
            <Box component="img" src={Folder} />
          </Icon>
        </IconButton>
        <IconButton sx={headerContainer.iconWrapper} aria-label="settings">
          <Icon>
            <Box component="img" src={Focus} />
          </Icon>
        </IconButton>
        <IconButton sx={headerContainer.iconWrapper} aria-label="settings">
          <Icon>
            <Box component="img" src={Link} />
          </Icon>
        </IconButton>
        <IconButton sx={headerContainer.iconWrapper} aria-label="settings">
          <Icon>
            <Box component="img" src={MinusPath} />
          </Icon>
        </IconButton>
        <IconButton sx={headerContainer.iconWrapper} aria-label="settings">
          <Icon>
            <Box component="img" src={Trash} />
          </Icon>
        </IconButton>
        <Box component="img" src={Divider} />
        <IconButton color="primary">
          <CloseIcon sx={headerContainer.colseIcon} />
        </IconButton>
      </Box>
    </ModelHeader>
  );
}

export default Header;
