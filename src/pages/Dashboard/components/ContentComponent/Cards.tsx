import Paper from "@mui/material/Paper/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import ProcessIcon from "assets/ProcessIcon.svg";
import PrivateIcon from "assets/PrivateIcon.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardProps } from "pages/Dashboard/components/ContentComponent/contentTypes";

const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isDisabled",
})(({ color, isDisabled }: CardProps & { isDisabled: boolean }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  alignItems: "center",
  width: "150px",
  height: "150px",
  fontWeight: "bold",
  backgroundColor: color,
  color: "#FFF",
  cursor: isDisabled ? "not-allowed" : "pointer",
  userSelect: "none",
}));

const StyledCardHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: 16,
  width: "80%",
  height: "16px",
});
const StyledCardCOntent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "126px",
  height: "64px",
});

const Cards = ({ process }: CardProps) => {
  return (
    <StyledPaper
      elevation={0}
      color={process.color}
      isDisabled={process.private}
    >
      {process.private ? (
        <StyledCardHeader>
          <Box
            component="img"
            src={PrivateIcon}
            width="10.67px"
            height="13.33px"
          />
          <MoreVertIcon fontSize="small" />
        </StyledCardHeader>
      ) : (
        <StyledCardHeader />
      )}
      <StyledCardCOntent>
        <Icon>
          <Box component="img" src={ProcessIcon} width="100%" />
        </Icon>
        <Typography>{process.name}</Typography>
      </StyledCardCOntent>
    </StyledPaper>
  );
};

export default Cards;
