import React from "react";
import Header from "../ui/Header";
import BlogPageHero from "../ui/BlogPageHero";
import BlogsExplore from "../ui/BlogsExplore";
import BlogCategories from "../ui/BlogCategories";
import Footer from "../ui/Footer";

const BlogsExplorePage = () => {
  return (
    <div>
      <BlogPageHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogCategories />
        <BlogsExplore />
      </div>
    </div>
  );
};

export default BlogsExplorePage;
