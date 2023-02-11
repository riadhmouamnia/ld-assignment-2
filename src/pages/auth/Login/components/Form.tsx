import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Form({ setValid, setNotValid }: any) {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    const user = users.find(
      (user: any) => user.email === email && user.password === password
    );
    if (user) {
      setValid(true);
      setNotValid(false);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setNotValid(true);
      setValid(false);
      console.log("user not found");
    }

    console.log(email, password);
  };

  return (
    <>
      <Box width="100%" onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus
          size="small"
        />
        <TextField
          margin="normal"
          fullWidth
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          id="password"
          size="small"
        />
        <Box
          display="flex"
          alignItems="center"
          mb={4}
          justifyContent="space-between"
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link to="/reset" style={{ textDecoration: "none" }}>
            <Typography
              fontWeight="bold"
              color="action.active"
              sx={{ textDecoration: "none" }}
            >
              Forget password
            </Typography>
          </Link>
        </Box>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disableElevation
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </>
  );
}

export default Form;
