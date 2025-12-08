import { SlOptions } from "react-icons/sl";

const EmployeeSatisfactory = () => {
  const percent = 80;
  return (
    <div className="w-[30%] flex flex-col items-center justify-center">
      <div className="w-full flex justify-around items-center -translate-y-14">
        <p className="text-[30px] font-bold">Employee Satisfactory</p>
        <div className="border border-black/30 h-6 w-6 rounded-full flex justify-center items-center ">
          <SlOptions></SlOptions>
        </div>
      </div>

      <div className="relative w-100 h-100 rounded-full">
        <div
          className="w-full h-full rounded-full"
          style={{
            background: `conic-gradient(from 0deg, #63b9e0 0% ${percent}%, #b0c5d9 ${percent}% 100%)`,
          }}
        />

        <div className="absolute inset-12 bg-white rounded-full flex items-center justify-center">
          <p className="text-2xl font-bold">{percent}% satisfied</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSatisfactory;
