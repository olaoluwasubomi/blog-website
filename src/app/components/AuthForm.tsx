"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Invalid email address");

const loginSchema = z.object({
  email: emailSchema,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password is too long"),
  rememberMe: z.boolean().optional(),
});

const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: emailSchema,
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(10, "Password is too long"),
});

// Derive TypeScript types from schemas
type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

type AuthFormProps = {
  mode?: "login" | "signup";
};

export default function AuthForm({ mode = "login" }: AuthFormProps) {
  const router = useRouter();
  const isSignup = mode === "signup";
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues | LoginFormValues>({
    resolver: zodResolver(isSignup ? signupSchema : loginSchema),
  });

  const onSubmit = async (data: SignupFormValues | LoginFormValues) => {
    setLoading(true);
    setMessage("");
    try {
      if (isSignup) {
        const res = await axios.post(
          "https://mini-blog-production-d334.up.railway.app/api/auth/register",
          {
            name: (data as SignupFormValues).name,
            email: data.email,
            password: data.password,
          }
        );
        console.log("✅ Signup successful:", res.data);
        // setMessage("✅ Account created successfully!");
        if(res.status === 200) {
          const {user, token} = res.data;
          localStorage.setItem("token", token);
        }
        toast.success("Account successfully created");
        setTimeout(() => {
          router.push("/")
        }, 2000)
      } else {
        const response = await axios.post("https://mini-blog-production-d334.up.railway.app/api/auth/login", 
          {
            email:data.email,
            password:data.password,
          }
        );
        console.log("Logged in successfully");
        // setMessage("User Logged in successfully");
        if (response.status === 200) {
          const {user, token} = response.data;
          console.log("The username is", user , token);

          localStorage.setItem("user", JSON.stringify(user.name));
          localStorage.setItem("role", user.role);
          console.log("The role is", user.role);
          localStorage.setItem("token", token);
          toast.success(`Welcome back ${user.name}`);

          setTimeout(() => {
            router.push("/home");
          }, 2000);
        }
      }
    } catch (err: any) {
      console.error("Signup error:", err);
      if (err.response) {
        // setMessage(`${err.response.data.message || "Request failed"}`);
        toast.error(`${err.response.data.message || "An error occurred"}`)
      } else {
        // setMessage("Something went wrong. Please try again.");
        toast.error("Something went wrong, Please try again")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {/* Name field (only for signup) */}
      {isSignup && (
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("name" as const)}
            className="border p-2 rounded w-full outline-none"
          />
          {"name" in errors && (
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          )}
        </div>
      )}

      {/* Email */}
      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email")}
          className="border p-2 rounded w-full outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password")}
          className="border p-2 rounded w-full outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Remember Me (only for login) */}
      {!isSignup && (
        <div className="flex items-center gap-2">
          <input type="checkbox" {...register("rememberMe")} />
          <label>Remember me</label>
        </div>
      )}

      {/* Submit button */}
      {/* <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        {isSignup ? "Sign Up" : "Login"}
      </button> */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-60 flex items-center justify-center"
      >
        {loading ? (
          <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          isSignup ? "Sign Up" : "Login"
        )}
      </button>

      {/* Response Message */}
      {message && (
        <p className="text-center mt-2 text-sm font-medium">{message}</p>
      )}
    </form>
  );
}
