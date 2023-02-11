import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/auth/Login";
import Reset from "./pages/auth/Reset";
import Register from "./pages/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { cacheService } from "./utils/cacheService";

// import { RouterProvider } from "react-router";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/reset",
//     element: <Reset />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// store.subscribe(
//   debounce(() => {
//     const { userInfo } = store.getState().auth;
//     cacheService.saveState("user", userInfo);
//   }, 200)
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
