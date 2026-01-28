import React from "react";
import { Link, Outlet } from "react-router-dom";
import FeatureCard from "../ui/FeatureCard";
import BlogImage from "../../assets/blogPageHero.jpg";
import InterviewHero from "../../assets/interviewHero.jpg";
import Header from "../ui/Header";
import bgImage from "../../assets/background.png";

const AdminDashboard = () => {
  return (
    <div
      className="flex flex-col bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />

      <main className="flex p-8 overflow-auto  items-center justify-center">
        <nav className="mt-25 grid grid-cols-2 gap-20 mx-30">
          <Link to="/admin/interviews">
            <FeatureCard
              image={InterviewHero}
              cta="Try Now"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
              feature="Interview Managemant"
            />
          </Link>

          <Link to="/admin/blogs">
            <FeatureCard
              image={BlogImage}
              cta="Try Now"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
              feature="Blogs Management"
            />
          </Link>
        </nav>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
