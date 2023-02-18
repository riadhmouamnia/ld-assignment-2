import { Typography, Box, Collapse, TextField } from "@mui/material";
import { ChevronUp, TwoArrowsRight, ChevronDown } from "components/icons";
import Chip from "@mui/material/Chip";
import { dialogRightSide } from "pages/Dashboard/components/ProcessModel/Body/styles";
import {
  ChipStyles,
  CollapseStyles,
  CollapseText,
  flexContainer,
  InputsWrapper,
  PhaseTitle,
} from "pages/Dashboard/components/ProcessModel/Body/FieldPhaseStyles";
import { useState } from "react";

const PhaseTwo = [
  { label: "Contract Number", name: "contractNumber" },
  { label: "Contract Number 2", name: "contractNumber2" },
];

function FieldPhase() {
  const [isPhaseTwoOpen, setPhaseTwoOpen] = useState(true);
  const [isNewContractOpen, setNewContractOpen] = useState(true);
  const [isStartOpen, setStartOpen] = useState(false);
  return (
    <Box sx={dialogRightSide}>
      <Typography sx={PhaseTitle}>Field's Phase</Typography>
      <Box sx={CollapseStyles} onClick={() => setPhaseTwoOpen(!isPhaseTwoOpen)}>
        <Box sx={flexContainer}>
          <TwoArrowsRight />
          <Typography sx={CollapseText}>Phase 2</Typography>
        </Box>
        <Box sx={flexContainer}>
          <Chip label="Ready" color="error" sx={ChipStyles} />
          {isPhaseTwoOpen ? <ChevronUp /> : <ChevronDown />}
        </Box>
      </Box>
      <Collapse in={isPhaseTwoOpen} timeout="auto" unmountOnExit>
        <Box sx={InputsWrapper}>
          {PhaseTwo.map((settings, index) => (
            <TextField
              key={index}
              size="small"
              margin="normal"
              fullWidth
              {...settings}
            />
          ))}
        </Box>
      </Collapse>
      <Box
        sx={CollapseStyles}
        onClick={() => setNewContractOpen(!isNewContractOpen)}
      >
        <Box sx={flexContainer}>
          <TwoArrowsRight />
          <Typography sx={CollapseText}>New Contract</Typography>
        </Box>
        <Box sx={flexContainer}>
          {isPhaseTwoOpen ? <ChevronUp /> : <ChevronDown />}
        </Box>
      </Box>
      <Collapse in={isNewContractOpen} timeout="auto" unmountOnExit>
        <Box sx={InputsWrapper}>
          <TextField
            size="small"
            margin="normal"
            fullWidth
            label="Start Date"
            name="startDate"
          />
        </Box>
      </Collapse>
      {/* Start */}
      <Box sx={CollapseStyles} onClick={() => setStartOpen(!isStartOpen)}>
        <Box sx={flexContainer}>
          <TwoArrowsRight />
          <Typography sx={CollapseText}>Start</Typography>
        </Box>
        <Box sx={flexContainer}>
          {isStartOpen ? <ChevronUp /> : <ChevronDown />}
        </Box>
      </Box>
      <Collapse in={isStartOpen} timeout="auto" unmountOnExit>
        <Box sx={InputsWrapper}>
          <TextField
            size="small"
            margin="normal"
            fullWidth
            label="Start Date"
            name="startDate"
          />
        </Box>
      </Collapse>
    </Box>
  );
}

export default FieldPhase;
