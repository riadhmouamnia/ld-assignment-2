import { Box, IconButton, Typography } from "@mui/material";
import { headerContainer, ModelHeader } from "./styles";
import {
  MinusPath,
  Focus,
  Folder,
  Trash,
  Link,
  Close,
  Eye,
  Divider,
} from "components/icons";

const HeaderIcons = [
  <Folder />,
  <Focus />,
  <Link />,
  <MinusPath />,
  <Trash />,
  <Divider />,
  <Close />,
];

type Props = {
  setIsProcessModel: (isProcessModelOpen: boolean) => void;
};

function Header({ setIsProcessModel }: Props) {
  return (
    <ModelHeader>
      <Typography variant="h4" sx={headerContainer.title}>
        Courtney@mail.com
      </Typography>
      <Box sx={headerContainer.rightContainer}>
        <Box sx={headerContainer.KOMotivation}>
          <IconButton>
            <Eye />
          </IconButton>
          <Typography sx={headerContainer.KOMotivation.text}>
            KO Motivation
          </Typography>
        </Box>
        {HeaderIcons.map((icon, index) =>
          index === HeaderIcons.length - 1 ? (
            <IconButton key={index} onClick={() => setIsProcessModel(false)}>
              {icon}
            </IconButton>
          ) : (
            <IconButton key={index}>{icon}</IconButton>
          )
        )}
      </Box>
    </ModelHeader>
  );
}

export default Header;
