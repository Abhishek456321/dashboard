import axios from "axios";
import EmployeeHeader from "../components/EmployeeHeader";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import type { Iuser } from "../interface/user";

const EmployeeHome = () => {
  const [user, setUser] = useState<Iuser>();
  const fetchUserDetails = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setUser(res.data.data);
      }
    } catch (error) {
      toast.error("Network Error.");
    }
  };
  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <div>{/* <EmployeeHeader user={user as Iuser}></EmployeeHeader> */}</div>
  );
};

export default EmployeeHome;
