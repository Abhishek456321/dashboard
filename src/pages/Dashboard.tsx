import EmployeeList from "../components/EmployeeList";
import EmployeeSatisfactory from "../components/EmployeeSatisfactory";
import EmployeeStatus from "../components/EmployeeStatus";
import Graph from "../components/Graph";
import Greeting from "../components/Greeting";
import Header from "../components/Header";
import Schedule from "../components/Schedule";
import Summary from "../components/Summary";

const Dashboard = () => {
  return (
    <div className="w-[86vw]  pt-[102px]  bg-linear-to-b from-blue-500/15 to-blue-500/5">
      <div className="">
        <Header></Header>
        <Greeting></Greeting>
        <Summary></Summary>
      </div>
      <div className="bg-white mx-10 mt-1 rounded-3xl">
        <div className="flex pt-5 px-5 border-b border-black/10">
          <Schedule></Schedule>
          <Graph></Graph>
          <EmployeeStatus></EmployeeStatus>
        </div>
        <div className=" mt-1 flex">
          <EmployeeList></EmployeeList>
          <EmployeeSatisfactory></EmployeeSatisfactory>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
