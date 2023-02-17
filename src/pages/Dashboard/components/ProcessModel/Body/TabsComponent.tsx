import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  ShoppingBag,
  LineSpace,
  Comments,
  Attach,
  SmallLink,
  List,
} from "components/icons";
import { useState } from "react";
import { TabStyles } from "pages/Dashboard/components/ProcessModel/Body/styles";
import { colors } from "pages/Dashboard/components/ProcessModel/styles";

const TabsIcons = [
  {
    selected: <ShoppingBag fill={colors.primary.color} />,
    notSelcted: <ShoppingBag fill={colors.secondary.color} />,
  },
  {
    selected: <LineSpace fill={colors.primary.color} />,
    notSelcted: <LineSpace fill={colors.secondary.color} />,
  },
  {
    selected: <Comments fill={colors.primary.color} />,
    notSelcted: <Comments fill={colors.secondary.color} />,
  },
  {
    selected: <Attach fill={colors.primary.color} />,
    notSelcted: <Attach fill={colors.secondary.color} />,
  },
  {
    selected: <SmallLink fill={colors.primary.color} />,
    notSelcted: <SmallLink fill={colors.secondary.color} />,
  },
];

function TabsComponent() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      onChange={handleChange}
      value={value}
      sx={TabStyles}
    >
      {TabsIcons.map((icon, index) => (
        <Tab
          key={index}
          icon={value === index ? icon.selected : icon.notSelcted}
        />
      ))}
    </Tabs>
  );
}

export default TabsComponent;
