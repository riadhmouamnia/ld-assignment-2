import { Spacer, Wrapper } from "./styles/styles";
import { useState } from "react";
import DataTable from "pages/Dashboard/components/ProcessTable/DataTable";
import TableAppBar from "pages/Dashboard/components/ProcessTable/TableAppBar";
import TableHead from "pages/Dashboard/components/ProcessTable/TableHead";
import InfoPanel from "pages/Dashboard/components/ProcessTable/InfoPanel";
import ProcessModel from "pages/Dashboard/components/ProcessModel";
import MembersModal from "pages/Dashboard/components/MembersModal";

function index() {
  const [isInfoPanelOpen, setIsInfoPanel] = useState(false);
  const [isProcessModelOpen, setIsProcessModel] = useState(false);
  const [isMembersModalOpen, setIsMembersModal] = useState(false);
  return (
    <Wrapper>
      <Spacer />
      <TableAppBar
        setIsInfoPanel={setIsInfoPanel}
        setIsMembersModal={setIsMembersModal}
      />
      <InfoPanel
        isInfoPanelOpen={isInfoPanelOpen}
        setIsInfoPanel={setIsInfoPanel}
      />
      <TableHead />
      <DataTable setIsProcessModel={setIsProcessModel} />
      <ProcessModel
        isProcessModelOpen={isProcessModelOpen}
        setIsProcessModel={setIsProcessModel}
      />
      <MembersModal
        isMembersModalOpen={isMembersModalOpen}
        setIsMembersModal={setIsMembersModal}
      />
    </Wrapper>
  );
}

export default index;
