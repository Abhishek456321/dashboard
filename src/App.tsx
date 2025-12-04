import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import AdminOnly from "./components/AdminOnly";
import Home from "./pages/Home";
import Autheticated from "./components/Autheticated";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <Autheticated>
              <Home />
            </Autheticated>
          }
        ></Route>
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
