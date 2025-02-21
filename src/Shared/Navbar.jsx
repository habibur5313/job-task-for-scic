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
  return (
    <div className="flex justify-between items-center px-2 py-4 lg:px-10">
      <div>
        <h1 className="text-2xl font-medium sm:text-4xl sm:font-semibold">
          Task Manage
        </h1>
      </div>
      <div>
        {user ? (
          <button className="btn bg-purple-700 text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <>
          <Link className="btn bg-purple-700 text-white" to={"/login"}>
            Sign In
          </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
