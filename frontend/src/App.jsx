import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<BlogsExplorePage />} />
        <Route path="/blogs/:blogId" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
