import Box from "@mui/material/Box";
import LD from "assets/LD.svg";
import Apps from "assets/Apps.svg";
import Groups from "assets/Groups.svg";
import Files from "assets/Files.svg";
import Database from "assets/Database.svg";
import Share from "assets/Share.svg";
import Dev from "assets/Dev.svg";
import Network from "assets/Network.svg";
import Support from "assets/Support.svg";
import Logout from "assets/Logout.svg";

export const draworElemnts = [
  {
    text: "Lasting Dynamics",
    icon: <Box component="img" src={LD} />,
    path: "#",
  },
  {
    text: "Apps",
    icon: <Box component="img" sx={{ width: "38px" }} src={Apps} />,
    path: "#",
  },
  { text: "Teams", icon: <Box component="img" src={Groups} />, path: "#" },
  { text: "Files", icon: <Box component="img" src={Files} />, path: "#" },
  { text: "Database", icon: <Box component="img" src={Database} />, path: "#" },
  { text: "share", icon: <Box component="img" src={Share} />, path: "#" },
  { text: "development", icon: <Box component="img" src={Dev} />, path: "#" },
  { text: "Network", icon: <Box component="img" src={Network} />, path: "#" },
  {
    text: "Customer Support",
    icon: <Box component="img" src={Support} />,
    path: "#",
  },
  { text: "Logout", icon: <Box component="img" src={Logout} />, path: "#" },
];
