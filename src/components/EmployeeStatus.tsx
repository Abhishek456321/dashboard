import { SlOptions } from "react-icons/sl";
import { LuDot } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
const EmployeeStatus = () => {
  return (
    <div className="flex flex-col w-[30%] items-center space-y-9 py-7">
      <div className="flex  items-center space-x-70 ">
        <p className="font-bold  text-[25px] translate-x-10">
          Employment Status
        </p>
        <div className="border border-black/30 h-6 w-6 rounded-full flex justify-center items-center">
          <SlOptions></SlOptions>
        </div>
      </div>
      <div className="flex h-5 w-full translate-x-7">
        <div className="bg-red-500 h-full w-[20%]"></div>
        <div className="bg-blue-500 h-full w-[30%]"></div>
        <div className="bg-purple-500 h-full w-[50%]"></div>
      </div>
      <div className="flex justify-between items-center space-x-100">
        <p className="font-bold -translate-x-2 -translate-y-5">0%</p>
        <p className="font-bold translate-x-18 -translate-y-5">100%</p>
      </div>
      <div className="flex justify-center items-center space-x-15 border shadow-sm shadow-black translate-x-7 -translate-y-6 w-full px-3 rounded-2xl py-2">
        <div className="flex flex-col justify-center items-center space-y-1">
          <div className="flex space-x-1 justify-center items-center ">
            <LuDot color="purple" size={50}></LuDot>
            <p className="font-bold">Permanent</p>
          </div>
          <p className="text-[20px] font-bold">293</p>
          <p>50%</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <div className="flex space-x-1 justify-center items-center">
            <LuDot color="blue" size={50}></LuDot>
            <p className="font-bold">Contract</p>
          </div>
          <p className="text-[20px] font-bold">121</p>
          <p>30%</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-1">
          <div className="flex space-x-1 justify-center items-center">
            <LuDot color="red " size={50}></LuDot>
            <p className="font-bold">Probation</p>
          </div>
          <p className="text-[20px] font-bold">80</p>
          <p>20%</p>
        </div>
      </div>

      <div className=" w-full translate-x-7 flex space-y-10 flex-col justify-center items-center space-x-10">
        <div className="flex space-x-20">
          <p className=" font-bold text-[25px] -translate-x-22">
            Leave Summary
          </p>
          <div className="border border-black/30 h-6 w-6 rounded-full flex justify-center items-center translate-x-32">
            <SlOptions></SlOptions>
          </div>
        </div>
        <div className="flex  w-full justify-center items-center space-x-20 ">
          <div className="border shadow-sm shadow-black flex flex-col space-y-1 justify-center items-center rounded-2xl p-2 px-3 ">
            <div className="flex space-x-2 justify-center items-center -translate-x-3">
              <LuDot color="green" size={40}></LuDot>
              <p className="font-bold">Annual Leave</p>
            </div>
            <p>12 Days</p>
            <div className="flex space-x-2 justify-center items-center text-sm text-blue-500">
              <p className="mt-1">Request to leave</p>
              <FaArrowRight color="blue"></FaArrowRight>
            </div>
          </div>
          <div className="border shadow-sm shadow-black flex flex-col space-y-1 justify-center rounded-2xl p-2 px-3  items-center">
            <div className="flex space-x-2 justify-center items-center -translate-x-3">
              <LuDot color="green" size={40}></LuDot>
              <p className="font-bold">Sick Leave Used</p>
            </div>
            <p>5 Days</p>
            <div className="flex space-x-2 justify-center items-center text-sm text-blue-500">
              <p className="mt-1">Request leave</p>
              <FaArrowRight color="blue"></FaArrowRight>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStatus;
