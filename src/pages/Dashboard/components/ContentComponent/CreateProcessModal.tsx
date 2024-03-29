import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment, Modal, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CreateProcessModalProps } from "./contentTypes";
import { Circle, ColorPalette } from "components/icons";
import { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { style } from "pages/Dashboard/components/ContentComponent/CreateProcessModalStyles";
import { postProcess } from "redux/features/data/dataSlice";

function CreateProcessModal({ open, setOpen }: CreateProcessModalProps) {
  const [color, setColor] = useState("#FF2200");
  const [processName, setProcessName] = useState("");
  const dispatch = useAppDispatch();

  const handleColorChange = (e: any) => {
    setColor(e.target.value);
  };
  const handleProcessChange = (e: any) => {
    setProcessName(e.target.value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const data = {
      name: processName,
      color: color,
      private: false,
    };
    dispatch(postProcess(data));
    setOpen(false);
    setProcessName("");
    setColor("");
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box color={"text.primary"} sx={style}>
        <Box>
          <Box sx={style.header}>
            <Typography variant="h6" fontWeight="bold">
              Create a new process
            </Typography>
            <IconButton color="primary" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              margin="normal"
              fullWidth
              label="Process name"
              name="name"
              size="small"
              value={processName}
              onChange={handleProcessChange}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Color"
              name="color"
              size="small"
              value={color}
              onChange={handleColorChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Circle fill={color} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <ColorPalette />
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={style.buttons}>
              <Button
                variant="outlined"
                disableElevation
                sx={style.buttons.cancle}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disableElevation
                sx={style.buttons.create}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default CreateProcessModal;
