import {
  ListIcon,
  SubDirectoryIcon,
  GridLayout,
  BoardIcon,
  LabelIcon,
  FileIcon,
  RobotIcon,
  ConnectionIcon,
  UsersIcon,
  ExportIcon,
  SettingIcon,
} from "components/icons";

type NavLinksType = {
  title: string;
  icon: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

const NavLinks: NavLinksType[] = [
  {
    icon: <ListIcon />,
    title: "Startfrom",
  },
  {
    icon: <SubDirectoryIcon />,
    title: "Fasi",
  },
  {
    icon: <GridLayout />,
    title: "Tabila",
  },
  {
    icon: <BoardIcon />,
    title: "Card",
  },
  {
    icon: <LabelIcon />,
    title: "Labels",
  },
  {
    icon: <FileIcon />,
    title: "Campi Condizionali",
  },
  {
    icon: <RobotIcon />,
    title: "Automazioni",
  },
  {
    icon: <ConnectionIcon />,
    title: "Connessioni",
  },
  {
    icon: <UsersIcon />,
    title: "Membri",
  },
  {
    icon: <ExportIcon />,
    title: "Exportazione",
  },
  {
    icon: <SettingIcon />,
    title: "Generali",
  },
];

export default NavLinks;
