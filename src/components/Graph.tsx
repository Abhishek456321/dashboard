import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowUp } from "react-icons/fa6";
import data from "../dummyGraphData";
import { SlOptions } from "react-icons/sl";

const Graph = () => {
  return (
    <div className="w-[40%] flex flex-col border-r border-black/10 space-y-8 px-5 py-7">
      <div className="flex justify-between items-center px-10">
        <p className="font-bold translate-x-10 text-[25px]">Average Team KPI</p>
        <div className="border border-black/30 h-6 w-6 rounded-full flex justify-center items-center">
          <SlOptions></SlOptions>
        </div>
      </div>
      <div className="flex justify-around items-center ">
        <p className="text-[30px]"> 60%</p>
        <div className="flex space-x-2">
          <div className="text-green-800 font-bold space-x-1 flex justify-center items-center ">
            <FaArrowUp color="green" className="font-bold "></FaArrowUp>
            <p>6%</p>
          </div>
          <p>Than last year</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />

          <Tooltip formatter={(value: number) => `${value}%`} />

          <Line
            type="monotone"
            dataKey="value"
            stroke="blue"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
