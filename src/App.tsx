import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import AdminOnly from "./components/AdminOnly";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <AdminOnly>
              <Dashboard />
            </AdminOnly>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
