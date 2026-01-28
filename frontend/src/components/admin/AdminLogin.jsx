import React, { useState } from "react";
import BgImage from "../../assets/background.png";
import Logo from "../../assets/logo-pathpolish.png";
import { Link, useNavigate } from "react-router-dom";
import Show from "../../assets/icons/eye.svg";
import Hide from "../../assets/icons/eyeSlashed.svg";
import axios from "axios";
import api from "../../api/api";
import useAuth from "../../context/useAuth";

axios.defaults.withCredentials = true;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const [email, setEmail] = useState(""); // store input
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // success/error messages

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("http://localhost:5000/admin/login", {
        email: email, // backend expects username field
        password: password,
      });

      if (res.data.success) {
        setMessage("✅ Login Successful!");
        setIsAuthenticated(true);
        setTimeout(() => navigate("/admin"), 1000); // redirect after success
      }
    } catch (error) {
      setMessage("❌ Invalid Credentials or Server Error", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div
        className="w-1/2 bg-blue-200 flex flex-col justify-center gap-10 items-start  px-20 "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <h2 className="text-4xl font-semibold text-white leading-snug  title-font">
          Need web design for your business? <br />
          <span className="font-extrabold text-[#3E3651] text-5xl">
            PathPolish
          </span>{" "}
          will help you.
        </h2>
        <div className="text-center ">
          {/* <div className="bg-blue-600 text-white rounded-3xl h-48 w-48 flex justify-center items-center text-8xl font-bold shadow-lg">
            P
          </div> */}
          <Link to="/">
            <img src={Logo} alt="" className="w-48" />

            <p className=" mt-2 font-bold text-sm opacity-90 body-text text-[#3E3651]">
              pathpolish.com
            </p>
          </Link>
        </div>
      </div>
      {/* Right Section */}
      {/* Right Section */}

      <div className="w-1/2 flex flex-col justify-center items-center px-20 ">
        <h1 className="text-2xl font-semibold mb-8 body-font">Sign In</h1>

        <form className="w-full max-w-md space-y-4 " onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b border-gray-300 focus:outline-none py-2"
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1"
            >
              <img
                src={showPassword ? Hide : Show}
                alt=""
                className="w-5 h-5"
              />
            </button>
          </div>

          <button
            className="w-full bg-[#3E3651] text-white py-3 rounded-md mt-6 hover:bg-violet-800"
            type="submit"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="text-center mt-3 font-semibold text-gray-700">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
