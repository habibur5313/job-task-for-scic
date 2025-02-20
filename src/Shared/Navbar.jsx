import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCircleArrowUp } from "react-icons/fa6";
import {
  MdApartment,
  MdContactMail,
  MdDashboard,
  MdOutlineMenu,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = ({ toggleDarkMode }) => {
  const { user, handleSignOut } = useContext(AuthContext);
  console.log(user);
  
  const styles = {
    fixedIcon: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className=" px-2 md:px-6 xl:px-10 py-6  flex items-center justify-between border fixed container mx-auto text-white bg-black bg-opacity-20 z-50 rounded-xl  ">
      <div className="">
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            className="w-6 sm:w-10 xl:w-14 rounded-xl"
            src="https://i.ibb.co.com/ZBCgXsd/One-Build-Care-logo.jpg"
            alt=""
          />
          <h1 className="text-xl font-medium sm:text-3xl md:text-4xl sm:font-semibold text-purple-500">
            Grand<span className="ml-1">Sultan</span>
          </h1>
        </div>
      </div>
      <div className=" hidden lg:flex">
        <ul className="flex items-center gap-2">
          <li>
            <NavLink className="flex gap-1 items-center" to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="flex gap-1 items-center" to={"/apartment"}>
              <MdApartment />
              Apartment
            </NavLink>
          </li>
          <li>
            <NavLink className="flex gap-1 items-center" to={"/contact"}>
              <MdContactMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="text-2xl font-medium sm:text-3xl sm:font-semibold text-purple-600"
          >
            <MdOutlineMenu />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink className="flex gap-1 items-center" to={"/"}>
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="flex gap-1 items-center" to={"/apartment"}>
                <MdApartment />
                Apartment
              </NavLink>
              </li>
              <li>
            <NavLink className="flex gap-1 items-center" to={"/contact"}>
              <MdContactMail />
              Contact
            </NavLink>
          </li>
          </ul>
        </div>
        <div className="hidden sm:block">
          <button onClick={toggleDarkMode} className="">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
          </button>
        </div>
        <div>
          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="">
                <img
                  className="w-10 sm:w-14 rounded-full my-anchor-element cursor-pointer"
                  src={user?.photoURL}
                  alt="userImg"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-black text-white rounded-xl z-50"
              >
                <li>
                  <p className=" text-xl font-medium">{user?.displayName}</p>
                </li>
                <li>
                  <button className="border" onClick={handleSignOut}>
                    Sign Out
                  </button>
                  <button onClick={toggleDarkMode} className="md:hidden">
                    <input
                      type="checkbox"
                      value="synthwave"
                      className="toggle theme-controller"
                    />
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link className="btn bg-purple-700 text-white" to={"/login"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <div style={styles.fixedIcon} onClick={scrollToTop}>
        <FaCircleArrowUp className="text-4xl font-semibold text-purple-600" />
      </div>
    </div>
  );
};

export default Navbar;
