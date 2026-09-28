import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { userRegisterAPI } from "../services/allApis";

import { ToastContainer,toast } from "react-toastify";

function Auth() {
  const [authStatus, setAuthStatus] = useState(true);

  const handleRegister = async (data) => {
      const response = await userRegisterAPI(data);
      console.log(response);
    if(response.status===201){
      toast.success("User Registration Successfull")
    }
    else{
      toast.error("Something went wrong")
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be atleast 3 characters")
        .required("Required"),

      email: Yup.string()
        .email("Invalid Email")
        .required("Required"),

      password: Yup.string().required("Required"),
    }),

    onSubmit: async (values,{resetForm}) => {
      console.log(values);

      // Register
      if (!authStatus) {
        console.log("Registration API");
        await handleRegister(values);
      }

      // Login
      else {
        console.log("Login API");
      }
      resetForm()
    },
  });

  return (
    <>
      <div className="w-full min-h-screen bg-linear-to-b from-black via-gray-800 to-black">
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center px-6">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 w-full max-w-md shadow-lg">
            <div className="flex justify-center mb-4">
              <FaRegUserCircle className="text-6xl text-gray-700" />
            </div>

            <h2 className="text-center text-3xl font-light mb-8 text-black">
              {authStatus ? "Login" : "Register"}
            </h2>

            <form onSubmit={formik.handleSubmit}>
              {!authStatus && (
                <>
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    className="w-full border text-black border-gray-700 p-3 rounded-lg mb-2"
                  />

                  {formik.touched.username &&
                    formik.errors.username && (
                      <div className="text-red-500 mb-2">
                        {formik.errors.username}
                      </div>
                    )}
                </>
              )}

              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full border text-black border-gray-700 p-3 rounded-lg mb-2"
              />

              {formik.touched.email &&
                formik.errors.email && (
                  <div className="text-red-500 mb-2">
                    {formik.errors.email}
                  </div>
                )}

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full border text-black border-gray-700 p-3 rounded-lg mb-2"
              />

              {formik.touched.password &&
                formik.errors.password && (
                  <div className="text-red-500 mb-2">
                    {formik.errors.password}
                  </div>
                )}

              <div className="flex justify-between items-center mb-6">
                <p className="text-xs text-gray-500">
                  Never share your password
                </p>

                {authStatus && (
                  <a href="#" className="text-sm text-blue-500">
                    Forgot Password?
                  </a>
                )}
              </div>

              <button
                type="submit"
                className="w-full border border-black py-3 rounded-lg text-white bg-black hover:bg-white hover:text-black transition duration-300"
              >
                {authStatus ? "Login" : "Register"}
              </button>
            </form>

            <div className="flex justify-center gap-2 mt-6 text-sm text-black">
              {authStatus ? (
                <>
                  <p>New user?</p>
                  <span
                    className="text-blue-500 cursor-pointer underline"
                    onClick={() => setAuthStatus(false)}
                  >
                    Register Here
                  </span>
                </>
              ) : (
                <>
                  <p>Already have an account?</p>
                  <span
                    className="text-blue-500 cursor-pointer underline"
                    onClick={() => setAuthStatus(true)}
                  >
                    Login Here
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000}/>
      </div>
    </>
  );
}

export default Auth;