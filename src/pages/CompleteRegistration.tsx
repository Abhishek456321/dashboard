// import { useEffect, useState } from "react";
// import type { Iuser } from "../interface/user";
// import axios from "axios";
// import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CompleteRegistration = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState<Iuser>();
  // const fetchUserDetails = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:4000/api/user", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });
  //     if (res.data.success) {
  //       setUser(res.data.data);
  //     }
  //   } catch (error) {
  //     toast.error("Network Error.");
  //   }
  // };
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    // formState: { errors },
  } = useForm();
  // useEffect(() => {
  //   fetchUserDetails();
  // }, []);
  const submitHandler = async (data: any) => {
    const formData = new FormData();
    formData.append("parentName", data.parentName);
    formData.append("citizenshipNumber", data.citizenshipNumber);
    formData.append("citizenshipPhoto", data.citizenshipPhoto);
    formData.append("panNumber", data.panNumber);
    formData.append("panPhoto", data.PanPhoto);
    formData.append("dateOfJoining", data.dateOfJoining);
    formData.append("dob", data.dob);

    try {
      const res = await axios.patch(
        "http://localhost:4000/api/user/edit",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
        navigate("/home");
        await axios.patch(
          "http://localhost:4000/api/user/edit",
          { completion: true },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className=" flex flex-col justify-center items-center space-y-12 bg-linear-to-b from-blue-900/50 to-blue-300/30  h-screen w-screen   shadow-purple-300  "
      onSubmit={handleSubmit(submitHandler)}
    >
      <p className="text-[35px] font-bold text-blue-900">
        Complete registration
      </p>
      {/* citizenNumber */}
      <div>
        <label htmlFor="citizenNumber" className="font-bold ">
          Citizenship Number :
        </label>
        <input
          type="text"
          id="citizenNumber"
          className="px-3 py-2 border ml-1"
          {...register("citizenshipNumber")}
          placeholder="Citizenship Number"
        />
      </div>
      {/* citizenPhoto */}
      <div>
        <label htmlFor="citizenPhoto" className="font-bold mr-2 ">
          Citizenship Photo :
        </label>
        <input
          className="border  px-3 py-2"
          id="citizenPhoto"
          onChange={(e) => {
            const file = e?.target?.files?.[0];
            if (file) setValue("citizenshipPhoto", file);
          }}
          type="file"
        />
      </div>
      {/* pan NUmber */}
      <div>
        <label htmlFor="PanNumber" className="font-bold mr-2 ">
          PAN Number :
        </label>
        <input
          id="PanNumber"
          type="number"
          className="px-3 py-2 border ml-1"
          {...register("panNumber")}
          placeholder="PAN Number"
        />
      </div>
      {/* pan photo */}
      <div>
        <label htmlFor="PanPhoto" className="font-bold mr-2 ">
          PAN Photo :
        </label>
        <input
          id="PanPhoto"
          type="file"
          onChange={(e) => {
            const file = e?.target?.files?.[0];
            if (file) setValue("PanPhoto", file);
          }}
          className="px-3 py-2 border ml-1"
        />
      </div>
      {/* dob */}
      <div>
        <label htmlFor="dob" className="font-bold mr-2 ">
          Date of Birth :
        </label>
        <input
          id="dob"
          className="px-3 py-2 border ml-1"
          {...register("dob")}
          type="date"
        />
      </div>
      {/* parentName */}
      <div>
        <label htmlFor="parentName" className="font-bold mr-2 ">
          Parent Name :
        </label>
        <input
          id="parentName"
          className="px-3 py-2 border ml-1"
          type="text"
          {...register("parentName")}
          placeholder="Parent Name"
        />
      </div>
      {/* data of joining */}
      <div>
        <label htmlFor="dateOfJoining" className="font-bold mr-2 ">
          Date of joining :
        </label>
        <input
          id="dateOfJoining"
          className="px-3 py-2 border ml-1"
          type="date"
          {...register("dateOfJoining")}
        />
      </div>
      <button
        type="submit"
        className="px-7 py-4 border-2 border-purple-700/30  rounded-4xl  font-bold hover:bg-blue-300 hover:text-black cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
};

export default CompleteRegistration;
