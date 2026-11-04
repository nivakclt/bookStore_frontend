
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaUser,
  FaCaretDown,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { authContext } from "../../../contextapi/AuthContext";
import axiosInstance from "../../../api/axiosInstance";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [token, setToken] = useState("");
  const [dp, setDp] = useState("");
  const [userName, setUserName] = useState("");

  const nav = useNavigate();

  const { setRole, setAuthUser } = useContext(authContext);

  useEffect(() => {
    const userToken = sessionStorage.getItem("token");
    const storedUser = sessionStorage.getItem("user");

    if (userToken && storedUser) {
      try {
        const userobj = JSON.parse(storedUser);

        setToken(userToken);
        setDp(userobj.picture || "");
        setUserName(userobj.username || "");
      } catch (error) {
        console.log(error);
      }
    } else {
      setToken("");
      setDp("");
      setUserName("");
    }
  }, []);

  const logout = () => {
    sessionStorage.clear();

    setToken("");
    setDp("");
    setUserName("");

    setDropdown(false);
    setAuthUser(false);
    setRole("");

    nav("/auth");
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <>
      {/* MAIN HEADER */}
      <header className="w-full bg-white text-black">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">

          <div className="flex items-center justify-between">

            {/* LOGO AND BRAND */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src="/logo.png"
                alt="Bookshelf Logo"
                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-full"
              />

              <div>
                <h1 className="text-xl md:text-2xl font-bold tracking-[2px]">
                  BOOKSHELF
                </h1>

                <p className="text-[10px] md:text-xs text-gray-500 tracking-[2px]">
                  DISCOVER · READ · GROW
                </p>
              </div>
            </Link>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-5">

              {/* SOCIAL ICONS */}
              <div className="hidden sm:flex items-center gap-5 text-gray-500">

                <FaInstagram className="cursor-pointer hover:text-black hover:scale-110 transition duration-300" />

                <FaFacebook className="cursor-pointer hover:text-black hover:scale-110 transition duration-300" />

                <FaTwitter className="cursor-pointer hover:text-black hover:scale-110 transition duration-300" />

              </div>

              {/* LOGIN */}
              {token === "" ? (

                <Link
                  to="/auth"
                  className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm hover:bg-gray-700 transition duration-300"
                >
                  <FaUser size={13} />
                  Login
                </Link>

              ) : (

                /* USER PROFILE */
                <div className="relative">

                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-full hover:bg-gray-100 transition duration-300"
                  >

                    {dp === "" ? (

                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <FaUser />
                      </div>

                    ) : dp.includes("lh3.googleusercontent.com") ? (

                      <img
                        src={dp}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />

                    ) : (

                      <img
                        src={`${axiosInstance.defaults.baseURL}/uploads/${dp}`}
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />

                    )}

                    <span className="text-sm font-medium max-w-24 truncate">
                      {userName || "User"}
                    </span>

                    <FaCaretDown className="text-gray-500" />

                  </button>

                  {/* DROPDOWN */}
                  {dropdown && (

                    <div className="absolute right-0 top-full mt-3 bg-white shadow-xl border border-gray-100 rounded-xl w-44 p-2 z-50">

                      <Link
                        to="/profile"
                        onClick={() => setDropdown(false)}
                        className="block px-4 py-3 text-sm rounded-lg hover:bg-gray-100 transition"
                      >
                        My Profile
                      </Link>

                      <div className="border-t border-gray-100 my-1"></div>

                      <p
                        onClick={logout}
                        className="px-4 py-3 text-sm text-red-600 rounded-lg hover:bg-red-50 cursor-pointer transition"
                      >
                        Logout
                      </p>

                    </div>

                  )}

                </div>

              )}

              {/* MOBILE MENU ICON */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden text-2xl"
                aria-label="Toggle navigation"
              >
                {mobileMenu ? "✕" : "☰"}
              </button>

            </div>

          </div>

        </div>

      </header>


      {/* NAVIGATION BAR */}
      <nav className="w-full bg-black text-white">

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex justify-center items-center gap-12 py-5">

          <Link
            to="/"
            className="text-sm tracking-wide text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm tracking-wide text-gray-300 hover:text-white transition duration-300"
          >
            About
          </Link>

          <Link
            to="/books"
            className="text-sm tracking-wide text-gray-300 hover:text-white transition duration-300"
          >
            Books
          </Link>

          <Link
            to="/contact"
            className="text-sm tracking-wide text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </Link>

        </div>


        {/* MOBILE NAVIGATION */}
        {mobileMenu && (

          <div className="md:hidden flex flex-col items-center gap-5 py-6 border-t border-white/10">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-sm hover:text-gray-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="text-sm hover:text-gray-400 transition"
            >
              About
            </Link>

            <Link
              to="/books"
              onClick={closeMobileMenu}
              className="text-sm hover:text-gray-400 transition"
            >
              Books
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="text-sm hover:text-gray-400 transition"
            >
              Contact
            </Link>

          </div>

        )}

      </nav>

    </>
  );
}
