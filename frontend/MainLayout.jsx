import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/components/ui/Header";
import Footer from "./src/components/ui/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
