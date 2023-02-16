import Views from "assets/Views.svg";
import Divider from "assets/Divider.svg";
import Tables from "assets/Tables.svg";
import DownArrow from "assets/DownArrow.svg";
import Column from "assets/Column.svg";
import Filter from "assets/Filter.svg";
import Phases from "assets/Phases.svg";
import ArrowsUpDown from "assets/ArrowsUpDown.svg";
import Colors from "assets/Colors.svg";
import VerticalResize from "assets/VerticalResize.svg";
import ShoppingBag from "assets/ShoppingBag.svg";
import Research from "assets/Research.svg";
import FileImport from "assets/FileImport.svg";
import FileExport from "assets/FileExport.svg";
import Setting from "assets/Setting.svg";
import { appBarStyles } from "pages/Dashboard/components/ProcessTable/styles/styles";

type ItemProps = {
  title?: string;
  icon?: string;
  style?: any;
  iconStyle?: any;
};

export const items: ItemProps[] = [
  {
    title: "Views",
    icon: Views,
    style: appBarStyles.filterButton,
    iconStyle: appBarStyles.icon,
  },
  {
    title: "Tables",
    icon: Tables,
    style: appBarStyles.filterButton,
    iconStyle: appBarStyles.icon,
  },
  {
    title: "Columns",
    icon: Column,
    style: appBarStyles.columnButton,
  },
  {
    title: "Filters",
    icon: Filter,
    style: appBarStyles.filterButton,
  },
  {
    title: "Phases",
    icon: Phases,
    style: appBarStyles.phasesButton,
  },
  {
    title: "Orders",
    icon: ArrowsUpDown,
    style: appBarStyles.filterButton,
  },
  {
    title: "Colors",
    icon: Colors,
    style: appBarStyles.filterButton,
  },
  {
    title: "Height",
    icon: VerticalResize,
    style: appBarStyles.filterButton,
  },
];

export const iconList = [
  ShoppingBag,
  Research,
  FileImport,
  FileExport,
  Setting,
];
