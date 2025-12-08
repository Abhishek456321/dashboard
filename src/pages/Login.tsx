import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";
import { loginSchema, type loginSchemaType } from "../schema/loginSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const submitHandler = async (data: loginSchemaType) => {
    console.log(data);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/user/login",
        data
      );
      if (res.data.success) {
        console.log(res.data);
        reset();
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);
        if (res.data.token && res.data.role === "admin") {
          navigate("/admin/home");
        } else {
          navigate("/employee/home");
        }
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen p-10 flex justify-center items-center  bg-blue-300/20">
      <form
        className={`flex flex-col bg-linear-to-b ${
          errors.email || errors.password ? "space-y-7" : "space-y-14"
        }  from-blue-900/40 to-blue-300/30 justify-center items-center h-[75%] w-[50%]  p-5 shadow-2xl shadow-black/50 rounded-2xl`}
        onSubmit={handleSubmit(submitHandler)}
      >
        <p className="text-4xl font-bold text-blue-900 -translate-y-5">
          Sign in
        </p>
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
          className={`px-7 py-4 border-2 ${
            errors.email || errors.password ? "translate-y-5" : null
          } border-purple-700/30  rounded-4xl  font-bold hover:bg-blue-300 hover:text-black cursor-pointer`}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};
``;
export default Login;
