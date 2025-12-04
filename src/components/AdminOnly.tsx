import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminOnly = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (token && role === "admin") {
    return children;
  }
  useEffect(() => {
    toast.error("Unauthorized user.");
    navigate("/");
  }, []);
};

export default AdminOnly;
