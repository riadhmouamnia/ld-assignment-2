import { useNavigate } from "react-router";
import Input from "../../../../components/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import { IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { style } from "./styles/ModelStyles";
import {
  CreateProcessModalProps,
  CreateProcessModalInitialValues,
} from "./contentTypes";

function CreateProcessModal({ open, setOpen }: CreateProcessModalProps) {
  const navigate = useNavigate();

  const onSubmit = async (values: CreateProcessModalInitialValues) => {
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
          <Formik
            initialValues={{ name: "", color: "" }}
            onSubmit={onSubmit}
            validationSchema={yup.object({
              name: yup.string(),
              color: yup.string(),
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
              </FormikForm>
            )}
          </Formik>
        </Box>
      </Box>
    </Modal>
  );
}

export default CreateProcessModal;
