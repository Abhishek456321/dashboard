import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Autheticated = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  useEffect(() => {
    toast.error("Please login.");
    navigate("/login");
  }, []);
};

export default Autheticated;
