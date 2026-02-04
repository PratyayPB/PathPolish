import React, { useState } from "react";

import BgImage from "../../assets/background.png";
import Logo from "../../assets/logo-pathpolish.png";
import { Link, useNavigate } from "react-router-dom";
import Show from "../../assets/icons/eye.svg";
import Hide from "../../assets/icons/eyeSlashed.svg";
import api from "../../api/api";


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/signup", {
        email,
        password,
      });

      // Backend returns 200 with success: true for successful registration
      if (res.data.success) {
        setMessage("✅ Account Created Successfully!");
        setTimeout(() => navigate("/login"), 1000);
      }
    } catch (err) {
      console.error("Signup error:", err);
      
      // Handle different error responses from backend
      if (err.response) {
        const errorMessage = err.response.data?.message || "Signup failed";
        
        // Handle specific status codes
        if (err.response.status === 409) {
          setMessage("❌ " + errorMessage); // User already exists
        } else if (err.response.status === 400) {
          setMessage("❌ " + errorMessage); // Validation error
        } else if (err.response.status === 503) {
          setMessage("❌ Database error. Please try again later.");
        } else {
          setMessage("❌ " + errorMessage);
        }
      } else if (err.request) {
        // Network error - no response received
        setMessage("❌ Network error. Please check your connection.");
      } else {
        // Something else went wrong
        setMessage("❌ An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 bg-blue-200 flex flex-col justify-center gap-10 items-start px-6 md:px-20 py-10 md:py-0"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug title-font">
          Sign Up to <br />
          <span className="font-extrabold text-[#3E3651] text-4xl md:text-5xl">
            PathPolish
          </span>{" "}
          to unlock your full potential.  
        </h2>
        <div className="text-center ">
          {/* <div className="bg-blue-600 text-white rounded-3xl h-48 w-48 flex justify-center items-center text-8xl font-bold shadow-lg">
            P
          </div> */}
          <Link to="/">
            <img src={Logo} alt="" className="w-32 md:w-48" />

            <p className=" mt-2 font-bold text-sm opacity-90 body-text text-[#3E3651]">
              pathpolish.com
            </p>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-20 py-10 md:py-0">
        <h1 className="text-2xl font-semibold mb-8">Create Account</h1>

        <form className="w-full max-w-md space-y-4" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none py-3 md:py-2"
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 focus:outline-none py-3 md:py-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 cursor-pointer"
            >
              <img
                src={showPassword ? Hide : Show}
                alt=""
                className="w-5 h-5"
              />
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-6 cursor-pointer">
            Create Account
          </button>
        </form>

        {message && (
          <p className="text-center mt-3 font-semibold text-gray-700">
            {message}
          </p>
        )}

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
