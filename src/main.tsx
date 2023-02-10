import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import Root from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import Register from "./pages/auth/Register";
import { createBrowserRouter } from "react-router-dom";

import { RouterProvider } from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
