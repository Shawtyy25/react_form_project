import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const loginSchema = z.object({
  username: z.string().trim().min(1, "Username is required!"),

  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters long!")
    .min(1, "Password is required"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit = (data: LoginFormData) => {
    console.log("data valid", data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="flex flex-col flex-1 justify-center items-center text-white p-10">
      <h1 className={"text-5xl"}>Welcome back!</h1>

      <form
        action=""
        className="flex flex-col w-100 gap-2 p-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <label htmlFor="" className="flex gap-3 w-full justify-between">
          Username or Email:
          <input type="text" className="border" {...register("username")} />
        </label>
        {errors.username && (
          <label className="text-sm text-red-500">
            {errors.username.message}
          </label>
        )}

        <label htmlFor="" className="flex gap-3 w-full justify-between">
          Password:
          <input type="password" className="border" {...register("password")} />
        </label>
        {errors.password && (
          <label className="text-sm text-red-500">
            {errors.password.message}
          </label>
        )}

        <button type={"submit"}>
          {isSubmitting ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
};

export default Login;
