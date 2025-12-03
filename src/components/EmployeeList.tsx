import { SlOptions } from "react-icons/sl";
import { employee } from "../dummyGraphData";

const EmployeeList = () => {
  return (
    <div className="w-[70%] mt-4 border-r border-black/10 p-10 ">
      <div className="flex justify-around items-center w-full mb-10">
        <p className="font-bold text-[25px]">List Employee</p>
        <div className="flex justify-center items-center space-x-8 w-[30%]">
          <input
            type="text"
            placeholder="Search Employee"
            className="p-2 border-2 border-blue-500 rounded-2xl w-full "
          />
          <div className="border border-black/30 h-6 w-6 rounded-full flex justify-center items-center ">
            <SlOptions></SlOptions>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className=" bg-blue-500/20 h-10 flex justify-around w-full items-center px-5">
          <p className=" w-[25%] font-bold">Name</p>
          <p className=" w-[25%] font-bold">EmployeeId</p>
          <p className=" w-[25%] font-bold">Role</p>
          <p className=" w-[25%] font-bold">Email</p>
          <p className=" w-[25%] font-bold text-center">Status</p>
        </div>
        {employee.map((i) => (
          <div
            className="w-full h-13  flex justify-around items-center px-5 py-5 border-b border-black/10"
            key={i.name}
          >
            <p className="w-[25%]">{i.name}</p>
            <p className="w-[25%]">{i.employeeId}</p>
            <p className="w-[25%]">{i.role}</p>
            <p className="w-[25%]">{i.email}</p>
            <p
              className={`w-[25%] ${
                i.status === "Active" ? "text-green-700" : "text-red-600"
              } text-center font-bold`}
            >
              {i.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
