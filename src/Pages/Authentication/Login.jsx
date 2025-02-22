import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { IoLogoGoogle } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  useEffect(() => {
    document.title = "Login | Task Manage ";
  }, []);
  const { SignInEmailAndPassword, SignInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    SignInEmailAndPassword(email, password)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        {
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  const handleGoogleLogin = () => {
    SignInGoogle()
      .then((res) => {
        const userInfo = {
          name: res.user.displayName,
          email: res.user.email,
          userId: res.user.uid,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  return (
    <div className=" flex justify-center items-center pt-20 md:pt-32  lg:pt-40 min-h-screen">
      <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0  border">
        <h1 className="text-2xl font-semibold text-center">Login now!</h1>
        <form
          onSubmit={handleLogin}
          className="card-body pb-4 px-2 md:px-5 lg:px-14 text-black"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type={!showPassword ? "password" : "text"}
                name="password"
                className="grow"
              />
              <p
                className="flex justify-end"
                onClick={() => setShowPassword(!showPassword)}
              >
                {" "}
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </p>
            </label>

            <label className="label">
              <Link className="underline mt-5 text-xl font-medium">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control  mt-2">
            <button className="btn bg-purple-600 text-white text-xl font-medium">
              Login
            </button>
          </div>
        </form>
        <div className="divider text-2xl font-medium text-black">OR</div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="btn text-xl font-medium mt-2 mb-4"
          >
            <IoLogoGoogle />
            Continue with Google
          </button>
        </div>
        <p className="text-center mb-4 text-black">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-800 text-xl font-medium " to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
