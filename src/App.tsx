import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<Reset />} />

        {/* Private Route */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
