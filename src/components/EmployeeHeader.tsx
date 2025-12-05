import { RxFramerLogo } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../assets/profile.jpg";
import type { Iuser } from "../interface/user";
const EmployeeHeader = ({ user }: { user: Iuser }) => {
  const navigate = useNavigate();
  return (
    <nav className="fixed bg-blue-100/98 z-50 top-0 w-full flex items-center justify-around py-5 border-b border-black/10">
      <div className="flex justify-center items-center cursor-pointer">
        <RxFramerLogo color="purple" className="text-6xl " />
        <p className=" text-3xl font-bold">Galenan</p>
      </div>
      <div className="flex justify-center items-center space-x-7 font-bold">
        <Link
          to="/home"
          className=" hover:border-b-2  hover:border-blue-700 py-1"
        >
          Home
        </Link>

        <Link to="" className="hover:border-b-2  hover:border-blue-700 py-1">
          About
        </Link>
        <Link to="" className="hover:border-b-2  hover:border-blue-700 py-1">
          Contact us
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-5 ">
        <div className="bg-white flex justify-center items-center cursor-pointer   rounded-full p-3 ">
          <IoMdNotificationsOutline className="text-3xl " />
        </div>
        <div className="flex justify-center items-center  bg-white    p-3 rounded-4xl space-x-2 cursor-pointer font-bold">
          <img
            className="h-10 w-10 object-contain rounded-full border mr-3 border-black/20"
            src={profile}
          />
          <p>{user?.employeeName.split(" ")[0]}</p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            navigate("/login");
          }}
          className=" px-7 py-3 rounded-4xl bg-white font-bold cursor-pointer"
        >
          LogOut
        </button>

        {!user?.completion && (
          <button
            onClick={() => {
              navigate("/complete-registration");
            }}
            className=" px-7 py-3 rounded-4xl bg-white font-bold cursor-pointer"
          >
            Complete Registration
          </button>
        )}
      </div>
    </nav>
  );
};

export default EmployeeHeader;
