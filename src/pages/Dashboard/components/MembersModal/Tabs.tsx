import { Box } from "@mui/material";
import { TabStyles } from "pages/Dashboard/components/MembersModal/styles";
import TabPanel from "pages/Dashboard/components/MembersModal/TabPanel";
import Membri from "pages/Dashboard/components/MembersModal/Membri";
import Startform from "pages/Dashboard/components/MembersModal/Startform";
import GenericTabComponent from "pages/Dashboard/components/MembersModal/GenericTabComponent";
import messy_papers_icon from "assets/messy_papers_icon.svg";
import woman_icon from "assets/woman_icon.svg";
import elaxation_icon from "assets/elaxation_icon.svg";
import plant_girl_icon from "assets/plant_girl_icon.svg";

type Props = { value: number; index: number };

function Tabs({ value }: Props) {
  return (
    <Box sx={TabStyles.container}>
      <TabPanel value={value} index={0}>
        <Startform />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GenericTabComponent
          title="Fasi"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          img={messy_papers_icon}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GenericTabComponent
          title="Tabila"
          paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,"
          img={woman_icon}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GenericTabComponent
          title="Card"
          paragraph="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."
          img={elaxation_icon}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GenericTabComponent
          title="Labels"
          paragraph="To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
          img={plant_girl_icon}
        />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <Membri />
      </TabPanel>
    </Box>
  );
}

export default Tabs;
