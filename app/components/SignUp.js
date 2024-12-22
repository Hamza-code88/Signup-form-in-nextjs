'use client';

import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const passwordValue = watch("password");

  const onSubmit = async (data) => {
    alert("Signup successful!"); // Temporary success alert
    console.log("Form Data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md border border-pink-200"
      >
        <h2 className="text-2xl font-bold text-pink-600 text-center mb-6">
          🌸 Welcome to Signup 🌸
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-pink-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-2 border rounded-full text-pink-600 focus:ring-2 focus:ring-pink-300 ${
              errors.name ? "border-red-500" : "border-pink-200"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-pink-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-4 py-2 border rounded-full text-pink-600 focus:ring-2 focus:ring-pink-300 ${
              errors.email ? "border-red-500" : "border-pink-200"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-pink-600 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Include uppercase, lowercase, number & special character",
              },
            })}
            className={`w-full px-4 py-2 border rounded-full text-pink-600 focus:ring-2 focus:ring-pink-300 ${
              errors.password ? "border-red-500" : "border-pink-200"
            }`}
            placeholder="Create a strong password"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-pink-600 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            className={`w-full px-4 py-2 border rounded-full text-pink-600 focus:ring-2 focus:ring-pink-300 ${
              errors.confirmPassword ? "border-red-500" : "border-pink-200"
            }`}
            placeholder="Re-enter your password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold py-2 rounded-full shadow-md hover:from-pink-500 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-pink-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="underline hover:text-pink-800">
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
