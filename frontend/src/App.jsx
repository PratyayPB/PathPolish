//dependencies
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout"; //Encapsulating layout with Header and Footer for specific pages
import axios from "axios";

//components
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import LandingPage from "./components/landing-page/Landingpage";
import Career from "./components/career-module/Career";
import Roadmap from "./components/roadmaps-module/Roadmap";
import Interview from "./components/interview-module/Interview";
import Resume from "./components/resume-module/Resume";
import BlogPage from "./components/blogs-module/BlogPage";
import BlogsExplorePage from "./components/blogs-module/BlogsExplorePage";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Contact from "./components/contact/Contact";

const App = () => {
  //Testing connection to backend
  // const [name, setName] = useState("");
  // const [reply, setReply] = useState("");

  // const sendToBackend = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/api/message", {
  //       name,
  //     });
  //     setReply(res.data.reply);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    //Interface for testing backend connection
    // <div>
    //   <input
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     placeholder="Enter name"
    //   />
    //   <button onClick={sendToBackend}>Send</button>
    //   <p>{reply}</p>
    // </div>

    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<BlogsExplorePage />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
        </Route>
        {/* Routes without MainLayout.Header and footer are not included */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
