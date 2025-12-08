import type { Iuser } from "@/interface/user";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { IonIcon } from "@ionic/react";
import { trashOutline } from "ionicons/icons";

const Employees = () => {
  const [employees, setEmployees] = useState<Iuser[] | undefined>();
  const [search, setSearch] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>();

  const pageData = async () => {
    const res = await axios.get(
      `http://localhost:4000/admin/users?page=${page}&limit=10`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    if (res.data.success) {
      setEmployees(res.data.data);
      setTotalPage(res.data.totalPage);
    }
  };
  useEffect(() => {
    pageData();
  }, [page]);
  return (
    <div className="w-screen h-[93vh] px-15 py-4 relative">
      <p className="font-bold text-[25px] text-blue-600">List Employee</p>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="px-4 py-2 border border-blue-500/30 rounded-2xl mt-3"
      />

      <div className="w-full flex flex-col mt-5 border border-blue-900/20 rounded-2xl">
        <div className=" bg-blue-500/20 h-10 flex  w-full space-x-9 items-center px-5">
          <p className=" w-[15%] font-bold">Employee Name</p>
          <p className="w-[15%]  font-bold">Employee Designation</p>

          <p className=" w-[15%] font-bold">Email</p>
          <p className=" w-[15%] font-bold">Date of joining</p>
        </div>
        {search
          ? employees
              ?.filter((i) =>
                i.employeeName
                  .toLowerCase()
                  .includes(search.toLowerCase() as string)
              )
              .map((user) => (
                <div
                  className="h-10 flex  w-full items-center space-x-9 px-5 my-3"
                  key={user._id}
                >
                  <p className=" w-[15%] font-bold">{user.employeeName}</p>
                  <p className="w-[15%]  font-bold">{user.designation}</p>
                  <p className=" w-[15%] font-bold">{user.email}</p>
                  <p className=" w-[15%] font-bold">
                    {user.dateOfJoining
                      ? new Date(user?.dateOfJoining).toLocaleDateString()
                      : ""}
                  </p>
                  <div className="flex justify-center space-x-15 items-center">
                    <button className="border transform transition-transform duration-100 shadow-md px-5 hover:scale-110 cursor-pointer py-2 font-bold text-green-900 rounded-2xl">
                      view
                    </button>
                    <button className="border shadow-md transform transition-transform duration-100  cursor-pointer px-5 hover:scale-110 py-2 font-bold text-red-900 rounded-2xl">
                      edit
                    </button>
                    <IonIcon
                      icon={trashOutline}
                      className="text-2xl shadow-md transform transition-transform duration-100  hover:scale-115 cursor-pointer flex justify-center text-amber-950 rounded-2xl "
                    />
                  </div>
                </div>
              ))
          : employees?.map((user) => (
              <div
                className="h-10 flex  w-full items-center space-x-9 px-5 my-3"
                key={user._id}
              >
                <p className=" w-[15%] font-bold">{user.employeeName}</p>
                <p className="w-[15%]  font-bold">{user.designation}</p>
                <p className=" w-[15%] font-bold">{user.email}</p>
                <p className=" w-[15%] font-bold">
                  {user.dateOfJoining
                    ? new Date(user?.dateOfJoining).toLocaleDateString()
                    : ""}
                </p>
                <div className="flex justify-center space-x-15 items-center">
                  <button className="border transform transition-transform duration-100 shadow-md px-5 hover:scale-110 cursor-pointer py-2 font-bold text-green-900 rounded-2xl">
                    view
                  </button>
                  <button className="border shadow-md transform transition-transform duration-100  cursor-pointer px-5 hover:scale-110 py-2 font-bold text-red-900 rounded-2xl">
                    edit
                  </button>

                  <IonIcon
                    icon={trashOutline}
                    className="text-2xl shadow-md transform transition-transform duration-100  hover:scale-115 cursor-pointer flex justify-center text-amber-950 rounded-2xl "
                  />
                </div>
              </div>
            ))}
      </div>
      <div className="flex space-x-5 items-center my-2 absolute bottom-0 ">
        <button
          className="px-6 py-2 border border-blue-500 text-blue-500 cursor-pointer shadow-xl shadow-black/20 transform transition-transform duration-100  hover:scale-110 rounded-2xl"
          onClick={() => {
            if (page > 1) setPage((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        <p className="font-bold text-blue-700">{page}</p>
        <button
          onClick={() => {
            if (totalPage) if (page < totalPage) setPage((prev) => prev + 1);
          }}
          className="px-6 py-2 border border-blue-500 text-blue-500 transform shadow-black/20 transition-transform duration-100 cursor-pointer shadow-xl rounded-2xl hover:scale-110"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Employees;
