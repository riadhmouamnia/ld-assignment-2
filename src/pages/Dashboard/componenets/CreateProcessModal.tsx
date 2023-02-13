import React from "react";
import { useNavigate } from "react-router";
import Input from "../../../components/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import { IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type InitialValues = {
  name: string;
  color: string;
};

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 603,
  bgcolor: "#FFF",
  outline: "none",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function CreateProcessModal({ open, setOpen }: Props) {
  const navigate = useNavigate();

  const onSubmit = async (values: InitialValues) => {
    try {
      const response = await fetch("http://localhost:3000/processes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, private: false, data: [] }),
      });
      console.log(response);
      navigate("/");
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box color={"text.primary"} sx={style}>
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              Create a new process
            </Typography>
            <IconButton color="primary" onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Formik
            initialValues={{ name: "", color: "" }}
            onSubmit={onSubmit}
            validationSchema={yup.object({
              name: yup.string().required(),
              color: yup.string().required(),
            })}
          >
            {() => (
              <FormikForm>
                <Input
                  margin="normal"
                  fullWidth
                  label="Process name"
                  name="name"
                  size="small"
                />
                <Input
                  margin="normal"
                  fullWidth
                  name="color"
                  label="Color"
                  size="small"
                />

                <Box display="flex" gap={2} justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    disableElevation
                    sx={{
                      mt: 3,
                      mb: 2,
                      ":hover": { backgroundColor: "#F93E6C", color: "white" },
                    }}
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disableElevation
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create
                  </Button>
                </Box>
              </FormikForm>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
}

export default CreateProcessModal;
