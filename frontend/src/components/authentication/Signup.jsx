import React from "react";

const Signup = () => {
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
        <h1 className="text-2xl font-semibold mb-8">Create Account</h1>

        <div className="flex gap-4 mb-6">
          <button className="border border-blue-500 text-blue-600 py-2 px-6 rounded-md">
            Sign up with Google
          </button>
          <button className="border border-blue-500 text-blue-600 py-2 px-6 rounded-md">
            Sign up with Facebook
          </button>
        </div>

        <div className="flex items-center justify-center w-full my-6">
          <span className="w-1/4 border-t border-gray-300"></span>
          <p className="mx-4 text-gray-400 font-medium">OR</p>
          <span className="w-1/4 border-t border-gray-300"></span>
        </div>

        <form className="w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />
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
            Create Account
          </button>
        </form>

        <p className="mt-6 text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
