import React from "react";
import { Link, Outlet } from "react-router-dom";
import FeatureCard from "../ui/FeatureCard";
import CareerImage from "../../assets/careerGuideHero.jpg";
import RoadmapImage from "../../assets/roadmapHero.jpg";
import BlogImage from "../../assets/blogPageHero.jpg";
import InterviewHero from "../../assets/interviewHero.jpg";
import ResumeHero from "../../assets/resumeHero.jpg";
import Header from "../ui/Header";
import bgImage from "../../assets/background.png";

const AdminDashboard = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const menuItems = [
  //   { title: "Interview Management", path: "interviews", icon: "📝" },
  //   { title: "Roadmap Management", path: "roadmaps", icon: "🗺️" },
  //   { title: "Career Guidance", path: "career", icon: "🎯" },
  //   { title: "Blog Management", path: "blogs", icon: "📚" },
  //   { title: "FAQ Management", path: "faqs", icon: "❓" },
  // ];

  return (
    <div
      className="flex flex-col bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      {/* Sidebar
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2
            className={`${
              isSidebarOpen ? "text-xl" : "text-sm"
            } font-bold mb-4`}
          >
            Admin Panel
          </h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="mb-4 p-2 hover:bg-gray-700 rounded"
          >
            {isSidebarOpen ? "◀" : "▶"}
          </button>
        </div>
        <nav className="mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors"
            >
              <span className="text-xl mr-3">{item.icon}</span>
              {isSidebarOpen && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </aside> */}

      {/* Main Content */}
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
          {/* <Link to="/admin/career">
            <FeatureCard
              image={CareerImage}
              cta="Try Now"
              description="lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tenetur perferendis dolores, dicta fugit molestias quisquam sed facilis pariatur sint odit, delectus iste."
              feature="Career Guidance"
            />
          </Link> */}

          {/* {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors"
            >
             <div className="flex flex-col justify-center gap-4 p-6 rounded-lg border border-[#3E3651] hover:shadow-lg transition-shadow ">
      <img
        src={image}
        alt={feature}
        width={140}
        height={120}
        className="mx-auto rounded-md"
      />
      <h3 className="text-xl font-bold text-center title-font text-[#3E3651]">
        {feature}
      </h3>
      <p className="text-[#3E3651] text-center body-font">{description}</p>
      <button className="bg-[#3E3651] p-3 rounded-md hover:bg-violet-800 text-white title-font transition-colors cursor-pointer">
        {cta}
      </button>
    </div>
            </Link>
          ))} */}
        </nav>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
