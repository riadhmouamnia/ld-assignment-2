import Dashboard from "./pages/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import ErrorPage from "./pages/ErrorPage";
import ProcessTable from "./pages/Dashboard/components/ProcessTable";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="reset" element={<Reset />} />
      {/* Private Route */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path=":id" element={<ProcessTable />} />
      </Route>
      {/* Catch All */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
