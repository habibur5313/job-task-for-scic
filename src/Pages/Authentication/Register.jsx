import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { IoLogoGoogle } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
  useEffect(() => {
    document.title = "Register | Task Manage";
  }, []);
  const { SignUpEmailAndPassword, SignInGoogle, Update_information } =
    useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photoUrl.value;
    const terms = e.target.terms.checked;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      return setError(
        "Password atleast 1 lowercase letter 1 uppercase letter 1 number 1 special characters and atleast 6 characters"
      );
    } else if (!terms) {
      return Swal.fire({
        position: "top-center",
        icon: "error",
        title: "please check terms and condition",
        showConfirmButton: false,
        timer: 1000,
      });
    }

    SignUpEmailAndPassword(email, password)
      .then((res) => {
        setError();

        Update_information(name, photo).then(() => {
          // create user entry in the database
          const userInfo = {
            name: res.user.displayName,
            email: res.user.email,
            userId: res.user.uid,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
                            navigate("/");
            }
          });
        });
      })

      .catch((err) => {
        setError();
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
          navigate("/");
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
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
    <div className=" flex justify-center items-center pt-10 md:pt-20 lg:pt-32 min-h-screen">
      <div className="card bg-base-100 p-5 w-full max-w-lg shrink-0 border">
        <h1 className="text-2xl font-semibold text-center">Register now!</h1>
        <form
          onSubmit={handleSignUp}
          className="card-body pb-4 px-2 md:px-5 lg:px-14 text-black"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
            />
          </div>
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
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="photoUrl"
              className="input input-bordered"
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
          </div>

          <label className="label justify-start gap-4 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-primary"
            />
            <span className="label-text">Terms and condition</span>
          </label>
          <p className="text-red-500 font-medium">{error}</p>
          <div className="form-control mt-2">
            <button className="btn bg-purple-600 text-white text-xl font-medium">
              Register
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
          {" "}
          Have An Account ?{" "}
          <Link className="text-red-700 text-xl font-medium" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
