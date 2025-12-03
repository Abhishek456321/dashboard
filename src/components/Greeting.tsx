import { SlCalender } from "react-icons/sl";
import { CiExport } from "react-icons/ci";
const Greeting = () => {
  return (
    <div className="flex justify-around items-end mt-[103px]  py-12 border-b border-black/8 ">
      <div>
        <p className=" text-[30px] font-bold">
          Good morning , Abhishek Khadka !
        </p>
        <p className="text-[16px]">It's Tuesday , 2 December 2025</p>
      </div>
      <div className="flex justify-center items-center space-x-6 font-bold">
        <div className="flex justify-center items-center space-x-2 bg-blue-700/30 rounded-3xl py-2 px-4 cursor-pointer">
          <SlCalender className="text-[20px]"></SlCalender>
          <p>Calender</p>
        </div>
        <div className="flex justify-center items-center space-x-2 bg-blue-700/30 rounded-3xl py-2 px-4 cursor-pointer">
          <CiExport className="text-[20px]"></CiExport>
          <p>Export</p>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
