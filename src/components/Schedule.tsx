import { SlOptions } from "react-icons/sl";
import profile from "../assets/profile.jpg";
import { LuDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
const Schedule = () => {
  return (
    <div className="flex flex-col p-10 space-y-8 border-r border-black/10">
      <div className="flex justify-between items-center space-x-7">
        <p className="font-bold text-[20px]">Schedule</p>
        <div className="flex space-x-4">
          <p>Today.Tuesday,2 December 2025</p>
          <div className="border border-black/30 h-6 w-6 rounded-full flex justify-center items-center">
            <SlOptions></SlOptions>
          </div>
        </div>
      </div>
      <div className="flex p-3 bg-black/20 justify-around rounded">
        <p className="bg-white px-4  py-2 font-bold rounded-2xl cursor-pointer">
          Meetings
        </p>
        <p className="hover:bg-white px-4 py-2 font-bold rounded-2xl cursor-pointer">
          Tasks
        </p>
        <p className="hover:bg-white px-4 py-2 font-bold rounded-2xl cursor-pointer">
          Events
        </p>
      </div>
      <div className=" border border-black/10 flex flex-col shadow-sm shadow-black space-y-4 justify-center items-center p-5 rounded-2xl ">
        <div className="flex justify-between items-center space-x-20">
          <p className="font-bold">Interview-UI/UX Designer</p>
          <div className=" flex relative w-20 justify-center items-center">
            <img
              src={profile}
              className="h-8 w-8 object-contain rounded-full border bg-white  border-black/50 absolute right-1"
            />
            <img
              src={profile}
              className="h-8 w-8 object-contain rounded-full border  bg-white  border-black/50 absolute right-6"
            />
            <img
              src={profile}
              className="h-8 w-8 object-contain rounded-full border bg-white   border-black/50 absolute right-10"
            />
          </div>
        </div>
        <div className="flex space-x-0.5 -translate-x-19 justify-center items-center">
          <LuDot color="green" size={50}></LuDot>
          <p>Google Meet | 13.00-13.30</p>
        </div>
        <div className="flex space-x-2 items-center cursor-pointer">
          <p className="text-blue-600 text-start">Go to</p>
          <FaArrowRight color="blue"></FaArrowRight>
        </div>
      </div>
      <div className=" border border-black/10 flex flex-col shadow-sm shadow-black space-y-4 justify-center items-center p-5 rounded-2xl ">
        <div className="flex justify-between items-center space-x-20">
          <p className="font-bold">Retro Day-HR Department</p>
          <div className=" flex relative w-20 justify-center items-center">
            <img
              src={profile}
              className="h-8 w-8 object-contain rounded-full border bg-white  border-black/50 absolute right-1"
            />
            <img
              src={profile}
              className="h-8 w-8 object-contain rounded-full border  bg-white  border-black/50 absolute right-6"
            />
            <img
              src={profile}
              className="h-8 w-8 object-contain rounded-full border bg-white   border-black/50 absolute right-10"
            />
          </div>
        </div>
        <div className="flex space-x-0.5 -translate-x-10 justify-center items-center">
          <LuDot color="green" size={50}></LuDot>
          <p>Meeting Room 7th Floor | 13.00-13.30</p>
        </div>
        <div className="flex space-x-2 items-center cursor-pointer">
          <p className="text-blue-600 text-start">Go to</p>
          <FaArrowRight color="blue"></FaArrowRight>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
