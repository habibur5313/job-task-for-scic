import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = ({ toggleDarkMode }) => {
  const { user, handleSignOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  
  return (
    <div className="flex justify-between items-center px-2 py-4 lg:px-10">
      <div>
        <h1 className="text-2xl font-medium sm:text-4xl sm:font-semibold">
          Task Manage
        </h1>
      </div>
      <div className="flex gap-4 items-center ">
        <button onClick={toggleDarkMode} className="">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
        </button>
        {user ? (
          <>
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
                className="dropdown-content menu shadow bg-black text-white rounded-xl w-52 z-50"
              >
                <div className="flex flex-col gap-4 m-5">
                  <p className=" text-xl font-medium">{user?.displayName}</p>
                  <button
                    className="btn bg-purple-700 text-white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </ul>
            </div>
          </>
        ) : (
          <Link className="btn bg-purple-700 text-white" to={"/login"}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
