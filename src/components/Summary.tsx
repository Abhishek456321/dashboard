import { FiUsers } from "react-icons/fi";
import { FaArrowUp } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { FaArrowDownLong } from "react-icons/fa6";
const Summary = () => {
  return (
    <div className="flex ">
      <div className="flex flex-col space-y-12 border-r border-black/8 p-10  grow">
        <div className="flex justify-start items-center space-x-4">
          <FiUsers className="text-[35px] text-blue-600"></FiUsers>
          <p className="font-bold text-[20px]">Total Employee</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">400</p>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-0.5 text-green-700 font-bold">
              <FaArrowUp></FaArrowUp>
              <p>4.5%</p>
            </div>
            <p>Than last month</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12   border-r border-black/8 p-10  grow">
        <div className="flex justify-start  items-center space-x-4">
          <GiPayMoney className="text-[35px] text-blue-600"></GiPayMoney>
          <p className="font-bold text-[20px]">Total Payrolls</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">35</p>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-0.5 text-green-700 font-bold">
              <FaArrowUp></FaArrowUp>
              <p className="font-bold">3%</p>
            </div>
            <p>Than last month</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12   border-r border-black/8 p-10  grow">
        <div className="flex justify-start  items-center space-x-4">
          <FaArrowsTurnToDots className="text-[35px] text-blue-600"></FaArrowsTurnToDots>
          <p className="font-bold text-[20px]">Turnover Rate</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">9%</p>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-0.5 text-red-700 font-bold">
              <FaArrowDownLong></FaArrowDownLong>
              <p className="font-bold">1%</p>
            </div>
            <p>Than last month</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12  border-r border-black/8 p-10  grow">
        <div className="flex justify-start  items-center space-x-4">
          <RiPagesLine className="text-[35px] text-blue-600"></RiPagesLine>
          <p className="font-bold text-[20px]">Job Applicants</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-5xl font-bold">20</p>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-0.5 text-green-700 font-bold">
              <FaArrowUp></FaArrowUp>
              <p className="font-bold">7%</p>
            </div>
            <p>Than last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
