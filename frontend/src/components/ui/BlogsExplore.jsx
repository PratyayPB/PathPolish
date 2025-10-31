import React from "react";
import BlogCard from "./BlogCard";
import ChevronDown from "../../assets/icons/chevron-down.svg";
const BlogsExplore = () => {
  const blogs = [
    {
      title: "Typography in web design: Enhancing UI/UX web apps",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      category: "Design",
      date: "Jan 24, 2024",
    },
    {
      title: "Responsive design: Cross-device experience",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      category: "Frontend",
      date: "Jan 22, 2024",
    },
    {
      title: "Web design best practices: Optimizing speed",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      category: "Performance",
      date: "Jan 20, 2024",
    },
    {
      title: "User-Centric web design: Strategies for better UI/UX",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      category: "UX",
      date: "Jan 18, 2024",
    },
    {
      title: "Web design trends 2023: Stay ahead of the curve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      category: "Trends",
      date: "Jan 16, 2024",
    },
    {
      title: "Inclusive design: Accessible websites for all users",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
      category: "Accessibility",
      date: "Jan 14, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 px-6 flex flex-col items-center gap-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Explore Our Latest Blogs
        </h2>
        <p className="text-gray-500">
          Stay updated with insights, tutorials, and trends from the world of
          web design and AI.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <span className="flex gap-1 items-center py-6">
        Show More <img src={ChevronDown} alt="" width={20} />
      </span>
    </div>
  );
};

export default BlogsExplore;
