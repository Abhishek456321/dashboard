import { Outlet, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import AdminOnly from "./components/AdminOnly";

import Autheticated from "./components/Autheticated";
import CompleteRegistration from "./pages/CompleteRegistration";

import EmployeeAppLayout from "./layouts/EmployeeAppLayout";
import EmployeeHome from "./pages/EmployeeHome";
import AdminAppLayout from "./layouts/AdminAppLayout";
import AdminHome from "./pages/admin/AdminHome";
import Employees from "./pages/admin/Employees";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>

        {/* Employee Route */}
        <Route
          path="/employee"
          element={
            <Autheticated>
              <EmployeeAppLayout>
                <Outlet></Outlet>
              </EmployeeAppLayout>
            </Autheticated>
          }
        >
          <Route path="home" element={<EmployeeHome />}></Route>
          <Route path="dashboard" element={<EmployeeHome />}></Route>
          <Route path="leave" element={<EmployeeHome />}></Route>
          <Route path="calendar" element={<EmployeeHome />}></Route>
        </Route>

        {/* Admin Route */}
        <Route
          path="/admin"
          element={
            <Autheticated>
              <AdminAppLayout>
                <Outlet></Outlet>
              </AdminAppLayout>
            </Autheticated>
          }
        >
          <Route path="home" element={<AdminHome />}></Route>
          <Route path="employees" element={<Employees />}></Route>
          <Route path="leave" element={<Employees />}></Route>
          <Route path="calendar" element={<Employees />}></Route>
          <Route
            path="dashboard"
            element={
              <AdminOnly>
                <Dashboard />
              </AdminOnly>
            }
          ></Route>
        </Route>
        <Route
          path="/complete-registration"
          element={
            <Autheticated>
              <CompleteRegistration />
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
