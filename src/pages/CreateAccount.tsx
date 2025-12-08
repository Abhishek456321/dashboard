import { useForm } from "react-hook-form";
import { userSchema, type UserSchemaType } from "../schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdOutlineFileUpload } from "react-icons/md";
import { RxFramerLogo } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
  });
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();
  const submitHandler = async (data: UserSchemaType) => {
    console.log(data);
    const formData = new FormData();
    formData.append("employeeName", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.image) {
      formData.append("employeePhoto", data.image);
    }
    try {
      const res = await axios.post("http://localhost:4000/api/user", formData);
      if (res.data.success) {
        console.log(res.data);
        reset();
        fileRef.current = null;
        if (preview) {
          URL.revokeObjectURL(preview);
        }
        setPreview(null);
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlefileClick = () => {
    fileRef.current?.click();
  };
  return (
    <div className="h-screen w-screen p-10 flex justify-center items-center  space-x-8 bg-blue-300/20">
      <div className=" flex flex-col justify-center items-center bg-linear-to-r from-blue-900/40 to-blue-500/30 w-[50%] h-[85%]  rounded-2xl shadow-2xl shadow-black/50">
        <div className="flex space-x-2 items-center -translate-x-10 -translate-y-17">
          <RxFramerLogo color="purple" className="text-9xl -translate-y-3" />
          <p className="text-4xl font-bold text-blue-900">
            Welcome to , Galenan
          </p>
        </div>
        <div className="flex space-x-2 justify-center items-center text-purple-900 -translate-y-14 translate-x-3  cursor-pointer font-bold">
          <p>Register and connect with us.</p>
          <FaArrowRight></FaArrowRight>
        </div>

        <a
          href=""
          className="flex justify-center border border-black/20 hover:scale-108 transform duration-200 transition-transform translate-y-18 translate-x-3 cursor-pointer shadow-2xl shadow-black/50  rounded px-5 py-3  items-center space-x-2"
        >
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span className="font-bold">Login with Google</span>
        </a>
        <Link
          to="/login"
          className="underline translate-y-33 text-[16px]  translate-x-3  font-bold hover:scale-104  text-blue-950 cursor-pointer"
        >
          Already have an Account !
        </Link>
      </div>
      <form
        className="flex flex-col bg-linear-to-b from-blue-900/40 to-blue-300/30 justify-around items-center space-y-3 h-[85%] w-[50%]  p-5 shadow-2xl shadow-black/50  rounded-2xl"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div
          onClick={handlefileClick}
          className={`h-40 w-40  ${
            !preview && " border border-black  border-dashed"
          } relative flex flex-col justify-center items-center rounded-2xl cursor-pointer`}
        >
          {preview && (
            <img
              className="absolute top-0 left-0 h-40 rounded-2xl w-50 object-contain"
              src={preview}
            />
          )}
          <MdOutlineFileUpload className="h-[20%] w-[50%] mb-1" />
          <p className="text-sm font-bold">Click to Upload</p>
        </div>

        <input
          type="file"
          className="hidden"
          ref={fileRef}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setValue("image", file);

              setPreview(URL.createObjectURL(file));
            }
          }}
        />
        {errors?.image && (
          <p className="font-bold w-[80%] text-center -translate-y-2 text-red-500 text-sm">
            Upload image
          </p>
        )}
        <input
          {...register("username")}
          placeholder="Username"
          className="h-[10%] w-1/2 px-5 py-1 border-2 border-purple-700/30 rounded-4xl font-bold"
        />
        {errors?.username && (
          <p className="font-bold w-[80%] text-center -translate-y-2 text-red-500 text-sm">
            {errors?.username?.message}
          </p>
        )}
        <input
          {...register("email")}
          placeholder="Email"
          className="h-[10%] w-1/2 px-5 py-1 border-2 border-purple-700/30 font-bold  rounded-4xl"
        />
        {errors?.email && (
          <p className="font-bold w-[80%] text-center -translate-y-2 text-red-500 text-sm">
            {errors?.email?.message}
          </p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="h-[10%] w-1/2 px-5 py-1 border-2 border-purple-700/30 font-bold  rounded-4xl"
        />
        {errors?.password && (
          <p className="font-bold w-[80%] text-center -translate-y-2 text-red-500 text-sm">
            {errors?.password?.message}
          </p>
        )}
        <button
          type="submit"
          className="px-7 py-4 border-2 border-purple-700/30  rounded-4xl  font-bold hover:bg-blue-300 hover:text-black cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};
``;
export default CreateAccount;
