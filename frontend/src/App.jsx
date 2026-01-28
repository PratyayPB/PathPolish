//dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../MainLayout"; //Encapsulating layout with Header and Footer for specific pages

//components
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import LandingPage from "./components/landing-page/Landingpage";
import Career from "./components/career-module/Career";
import Roadmap from "./components/roadmaps-module/Roadmap";
import InterviewLanding from "./components/interview-module/InterviewLanding";
import InterviewWorking from "./components/interview-module/InterviewWorking";
import Resume from "./components/resume-module/Resume";

import BlogsExplorePage from "./components/blogs-module/BlogsExplorePage";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import Contact from "./components/contact/Contact";
import InterviewSimulator from "./components/ui/InterviewSimulator";

// Admin Components
import AdminDashboard from "./components/admin/AdminDashboard";
import InterviewManagement from "./components/admin/InterviewManagement";

import BlogManagement from "./components/admin/BlogManagement";
import AdminLogin from "./components/admin/AdminLogin";
import AdminRegister from "./components/admin/AdminRegister";
import AdminRoute from "./components/admin/AdminRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/interview" element={<InterviewLanding />} />
          <Route path="/interview/:typeName" element={<InterviewWorking />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blogs" element={<BlogsExplorePage />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/interviews" element={<InterviewManagement />} />
          <Route path="/admin/blogs" element={<BlogManagement />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminRegister />} />

        {/* Routes without MainLayout.Header and footer are not included */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
