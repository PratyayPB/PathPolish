import React from "react";
import Header from "../ui/Header";
import BlogPageHero from "../ui/BlogPageHero";
import BlogsExplore from "../ui/BlogsExplore";
import bg from "../../assets/background.png";
import Footer from "../ui/Footer";

const BlogsExplorePage = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <BlogPageHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogsExplore />
      </div>
    </div>
  );
};

export default BlogsExplorePage;
