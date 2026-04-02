import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../contexts/AuthContext.tsx";
import type { User } from "../types/UserType.ts";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  username: z.string().trim().min(1, "Username is required!"),

  password: z
    .string()
    .trim()
    .min(5, "Password must be at least 8 characters long!")
    .min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

/* -------------------------Component ----------------------*/
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const user = useContext<User | null>(UserContext);
  const navigate = useNavigate();

  const validate = (data: LoginFormData): boolean => {
    return !(!(data.username === user?.username && data.password === user.password));
  };

  const onFormSubmit = (data: LoginFormData) => {
    if (!validate(data)) return;

    navigate("/main");
    console.log(user);
  };

  return (
    <div className="flex flex-col flex-1 justify-center items-center text-white p-10">
      <h1 className={"text-5xl mb-10"}>Welcome back!</h1>

      <form
        action=""
        className="flex flex-col w-120 gap-2 p-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="mb-5">
          <label
            htmlFor="username"
            className="select-none flex gap-3 w-full justify-between"
          >
            Username or Email:
            <input
              type="text"
              id="username"
              className="border p-1 rounded-xl w-[60%]"
              autoComplete="off"
              {...register("username")}
            />
          </label>
          {errors.username && (
            <label className="text-sm text-red-500">
              {errors.username.message}
            </label>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="flex gap-3 w-full justify-between select-none "
          >
            Password:
            <input
              type="password"
              id="password"
              className="border p-1 rounded-xl w-[60%]"
              autoComplete="off"
              {...register("password")}
            />
          </label>
          {errors.password && (
            <label className="text-sm text-red-500">
              {errors.password.message}
            </label>
          )}
        </div>

        <button
          type={"submit"}
          className="border p-2 w-[50%] m-auto rounded-2xl mt-10 cursor-pointer"
        >
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
