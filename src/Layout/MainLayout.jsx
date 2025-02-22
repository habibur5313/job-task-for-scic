import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const MainLayout = () => {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {   
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      <div
        className={
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
        }
      >
        <div className="container mx-auto">
          {pathname === "/register" || pathname === "/login" || (
            <Navbar toggleDarkMode={toggleDarkMode}></Navbar>
          )}
          <Outlet></Outlet>
        </div>
        {pathname === "/register" || pathname === "/login" || <Footer></Footer>}
      </div>
    </div>
  );
};

export default MainLayout;
