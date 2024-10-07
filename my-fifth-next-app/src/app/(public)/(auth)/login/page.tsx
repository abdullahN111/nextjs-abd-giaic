"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="w-full max-w-sm mx-auto mt-20 p-6 border border-gray-300 shadow-lg rounded-lg">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold">User Login</h1>
      </div>

      <div className="border border-gray-400 rounded-lg flex items-center px-3 py-2 my-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full focus:outline-none"
        />
      </div>
      <div className="relative flex items-center border border-gray-400 rounded-lg px-3 py-2">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          name="password"
          className="w-full focus:outline-none"
        />
        <span className="absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}{" "}
        </span>
      </div>
      <div className="mb-6 text-center bg-blue-600 text-white rounded-lg px-3 py-2 mt-8 hover:bg-blue-700 cursor-pointer">
        <button>Login</button>
      </div>
    </form>
  );
}

export default Login;
