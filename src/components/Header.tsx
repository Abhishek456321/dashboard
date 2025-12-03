import { RxFramerLogo } from "react-icons/rx";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from "../assets/profile.jpg";
const Header = () => {
  return (
    <nav className="fixed bg-blue-100/98 z-50 top-0 w-full flex items-center justify-around py-5 border-b border-black/10">
      <div className="flex justify-center items-center cursor-pointer">
        <RxFramerLogo color="purple" className="text-6xl " />
        <p className=" text-3xl font-bold">Galenan</p>
      </div>
      <div className="flex justify-center items-center space-x-7 font-bold">
        <Link to="/dashboard" className=" border-b-2  border-blue-700 py-1">
          Dashboard
        </Link>
        <Link
          to="/employee"
          className="hover:border-b-2  hover:border-blue-700 py-1"
        >
          Employees
        </Link>
        <Link
          to="/time"
          className="hover:border-b-2  hover:border-blue-700 py-1"
        >
          Time Management
        </Link>
        <Link
          to="/finance"
          className="hover:border-b-2  hover:border-blue-700 py-1"
        >
          Finance
        </Link>
        <Link
          to="/payroll"
          className="hover:border-b-2  hover:border-blue-700 py-1"
        >
          Payroll
        </Link>
      </div>
      <div className="flex justify-center items-center space-x-5 ">
        <div className="bg-white flex justify-center items-center cursor-pointer   rounded-full p-3">
          <IoSearchSharp className="text-3xl" />
        </div>
        <div className="bg-white flex justify-center items-center cursor-pointer   rounded-full p-3 ">
          <IoMdNotificationsOutline className="text-3xl " />
        </div>

        <div className="flex justify-center items-center  bg-white    p-3 rounded-4xl space-x-2 cursor-pointer font-bold">
          <img
            className="h-10 w-10 object-contain rounded-full border mr-3 border-black/20"
            src={profile}
          />
          <p>Abhishek</p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
