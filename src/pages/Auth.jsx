
import { FaRegUserCircle } from "react-icons/fa";
import { useState, useContext } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { googleAuthApi, userRegisterAPI } from "../services/allApis";
import { userLoginApi } from "../services/allApis";

import { ToastContainer, toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { authContext } from "../contextapi/AuthContext";

function Auth() {
  const [authStatus, setAuthStatus] = useState(false);

  const nav = useNavigate();
  const { setRole, setAuthUser } = useContext(authContext);

  const handleRegister = async (data) => {
    const response = await userRegisterAPI(data);
    console.log(response);

    if (response.status === 201) {
      toast.success("User Registration Successfull");
      setAuthStatus(true);
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleLogin = async (data) => {
    try {
      const response = await userLoginApi(data);
      console.log(response);

      if (response.status === 200) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
        toast.success("Login Successfully Completed");
        setAuthUser(true);

        setTimeout(() => {
          if (response.data.user.role === "admin") {
            setRole("admin");
            nav("/admin");
          } else {
            setRole("user");
            nav("/");
          }
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    console.log(credentialResponse);

    const res = jwtDecode(credentialResponse.credential);
    const { email, name, picture } = res;

    const response = await googleAuthApi({ email, name, picture });

    if (response.status === 200) {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      toast.success("Login Successfull !!");
      setAuthUser(true);

      setTimeout(() => {
        if (response.data.user.role === "admin") {
          setRole("admin");
          nav("/admin");
        } else {
          setRole("user");
          nav("/");
        }
      }, 2000);
    } else {
      toast.error("Something went wrong!!");
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "Demo",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .required("Username Required"),

      email: Yup.string().email("Invalid Email").required("Required"),

      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      if (!authStatus) {
        console.log("Registration API");
        await handleRegister(values);
      } else {
        console.log("Login API");
        await handleLogin(values);
      }

      resetForm();
    },
  });

  return (
    <>
      <div className="min-h-screen bg-[#f0ede6] flex items-center justify-center px-4 py-6 relative overflow-hidden">

        {/* Background Decoration */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#d8c8b2]/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-[#b49a7a]/20 rounded-full blur-3xl"></div>

        {/* Main Card */}
        <div className="relative z-10 w-full max-w-3xl bg-white shadow-lg grid md:grid-cols-2 overflow-hidden rounded-sm">

          {/* LEFT SIDE */}
          <div className="hidden md:flex flex-col justify-between bg-[#292723] text-white p-8 lg:p-10 relative overflow-hidden">

            <div className="absolute -right-16 -bottom-16 w-56 h-56 border border-white/10 rounded-full"></div>
            <div className="absolute -right-8 -bottom-8 w-40 h-40 border border-white/10 rounded-full"></div>

            <div className="relative z-10">
              <p className="text-xs tracking-[3px] text-[#b49a7a]">
                BOOKSHELF
              </p>

              <div className="w-10 h-[1px] bg-[#b49a7a] mt-3"></div>
            </div>

            <div className="relative z-10">
              <FaRegUserCircle className="text-4xl text-[#b49a7a] mb-5" />

              <h1 className="text-3xl lg:text-4xl font-light leading-tight">
                Every book
                <span className="block font-serif italic text-[#b49a7a]">
                  begins a story.
                </span>
              </h1>

              <p className="text-gray-400 mt-4 leading-6 text-xs max-w-xs">
                Discover wonderful stories, explore new perspectives and
                continue your reading journey with Bookshelf.
              </p>
            </div>

            <p className="relative z-10 text-[10px] tracking-[2px] text-gray-500">
              A WORLD BETWEEN PAGES
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="px-6 py-7 md:px-8 lg:px-10 flex flex-col justify-center">

            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f0ede6]">
                <FaRegUserCircle className="text-2xl text-[#8e7659]" />
              </div>
            </div>

            <p className="text-center text-[10px] tracking-[2.5px] text-[#9a8265] mb-2">
              WELCOME TO BOOKSHELF
            </p>

            <h2 className="text-center text-2xl md:text-3xl font-light mb-2 text-[#292723]">
              {authStatus ? "Welcome Back" : "Create Account"}
            </h2>

            <p className="text-center text-xs text-gray-500 mb-5">
              {authStatus
                ? "Login to continue your reading journey."
                : "Join us and discover your next favourite book."}
            </p>

            <form onSubmit={formik.handleSubmit}>

              {!authStatus && (
                <>
                  <label className="block text-xs text-gray-600 mb-1">
                    Username
                  </label>

                  <input
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className="w-full border border-[#e5e0d8] bg-[#faf9f6] text-black text-sm px-3 py-2.5 mb-1 rounded-sm outline-none focus:border-[#9a8265] focus:bg-white transition"
                  />

                  {formik.touched.username && formik.errors.username && (
                    <div className="text-red-500 text-[10px] mb-2">
                      {formik.errors.username}
                    </div>
                  )}
                </>
              )}

              <label className="block text-xs text-gray-600 mb-1 mt-2">
                Email Address
              </label>

              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full border border-[#e5e0d8] bg-[#faf9f6] text-black text-sm px-3 py-2.5 mb-1 rounded-sm outline-none focus:border-[#9a8265] focus:bg-white transition"
              />

              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-[10px] mb-2">
                  {formik.errors.email}
                </div>
              )}

              <label className="block text-xs text-gray-600 mb-1 mt-2">
                Password
              </label>

              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full border border-[#e5e0d8] bg-[#faf9f6] text-black text-sm px-3 py-2.5 mb-1 rounded-sm outline-none focus:border-[#9a8265] focus:bg-white transition"
              />

              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-[10px] mb-2">
                  {formik.errors.password}
                </div>
              )}

              <div className="flex justify-between items-center mb-4 mt-3">
                <p className="text-[10px] text-gray-500">
                  Never share your password
                </p>

                {authStatus && (
                  <a
                    href="#"
                    className="text-[10px] text-[#99764b] hover:underline"
                  >
                    Forgot Password?
                  </a>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#292723] text-white text-xs tracking-wider rounded-sm hover:bg-[#99764b] transition duration-300 mb-4"
              >
                {authStatus ? "LOGIN TO ACCOUNT" : "CREATE ACCOUNT"}
              </button>

            </form>

            {/* GOOGLE AUTH */}
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-[1px] bg-[#e5e0d8]"></div>
              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-[1px] bg-[#e5e0d8]"></div>
            </div>

            <div className="flex justify-center scale-90">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  handleGoogleLogin(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>

            {/* SWITCH LOGIN / REGISTER */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-5 text-xs text-gray-600">

              {authStatus ? (
                <>
                  <p>New to Bookshelf?</p>

                  <span
                    className="text-[#99764b] cursor-pointer font-semibold hover:underline"
                    onClick={() => setAuthStatus(false)}
                  >
                    Create an account
                  </span>
                </>
              ) : (
                <>
                  <p>Already have an account?</p>

                  <span
                    className="text-[#99764b] cursor-pointer font-semibold hover:underline"
                    onClick={() => setAuthStatus(true)}
                  >
                    Login here
                  </span>
                </>
              )}

            </div>

          </div>
        </div>

        <ToastContainer position="top-center" autoClose={3000} />

      </div>
    </>
  );
}

export default Auth;
