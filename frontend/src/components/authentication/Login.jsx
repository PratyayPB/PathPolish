import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-200 flex flex-col justify-center items-start px-20">
        <h2 className="text-4xl font-semibold text-white leading-snug mb-8">
          Need web design for your business? <br />
          <span className="font-bold text-blue-600">PathPolish</span> will help
          you.
        </h2>
        <div className="text-center mt-auto mb-10">
          <div className="bg-blue-600 text-white rounded-3xl h-48 w-48 flex justify-center items-center text-8xl font-bold shadow-lg">
            P
          </div>
          <p className="text-white mt-4 text-sm opacity-70">pathpolish.com</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center px-20">
        <h1 className="text-2xl font-semibold mb-8">Sign In</h1>

        <form className="w-full max-w-md space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-6">
            Login
          </button>
        </form>

        <p className="mt-6 text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-semibold">
            Signup Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
