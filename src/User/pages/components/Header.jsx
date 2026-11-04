import { FaInstagram, FaFacebook, FaTwitter, FaUser, FaCaretUp, FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { authContext } from "../../../contextapi/AuthContext";
import axiosInstance from "../../../api/AxiosInstance";
export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [token, setToken] = useState("");
  const [dp, setDp] = useState("");
  const [userName, setUserName] = useState("");

  const nav = useNavigate();
  const { role, setRole, authUser, setAuthUser } = useContext(authContext);

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token");
      const userobj = JSON.parse(sessionStorage.getItem("user"));
      setToken(userToken);
      setDp(userobj.picture || "");
      setUserName(userobj.username || "");
    }
  }, [token]);

  const logout = () => {
    sessionStorage.clear();
    setToken("");
    setDp("");
    setUserName("");
    setAuthUser(false);
    setRole("");
    nav('/auth');
  };

  return (
    <>
      <div className="w-full">
        <div className="px-2 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-22.5 h-22.5 rounded-full"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold" id="metallic-text">
              BOOKSTORE
            </h1>
            <p className="text-xs text-gray-500">Discover • Read • Grow</p>
          </div>

          <div className="flex items-center gap-2">
            <FaInstagram className="cursor-pointer hover:scale-125 transition-all duration-300" />
            <FaFacebook className="cursor-pointer hover:scale-125 transition-all duration-300" />
            <FaTwitter className="cursor-pointer hover:scale-125 transition-all duration-300" />
            {
              token === "" ?
              <Link
                to={"/auth"}
                className="flex items-center px-1 py-2 rounded-lg border-2 hover:bg-black hover:text-white"
              >
                <FaUser /> Login
              </Link>
              :
              <div className="relative">
                <button
                  className="flex items-center border-2 px-1 py-2 rounded-lg"
                  onClick={() => setDropdown(!dropdown)}
                >
                  {
                    dp === "" ?
                    <FaUser />
                    :
                    dp.includes("lh3.googleusercontent.com") ?
                    <img src={dp} alt="" width={'50px'} className="rounded-full" />
                    :
                    <img src={`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" width={'40px'} className="h-10 rounded-full" />
                  }
                  {
                    userName === "" ?
                    <>User{' '}</>
                    :
                    <>{userName}</>
                  }
                  {dropdown ? <FaCaretDown /> : <FaCaretUp />}
                </button>
                {dropdown && (
                  <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-lg w-40 p-2 transition-all duration-300">
                    <Link to={"/profile"} className="py-1 block">
                      Profile
                    </Link>
                    <p className="text-red-800 py-1 cursor-pointer" onClick={logout}>Logout</p>
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-3.5 flex flex-col md:flex-row justify-center items-center text-white gap-4">
        <Link to={"/"} className="hover:text-red-100 transition-all duration-300">Home</Link>
        <Link to={"/about"} className="hover:text-red-100 transition-all duration-300">About</Link>
        <Link to={"/books"} className="hover:text-red-100 transition-all duration-300">Books</Link>
        <Link to={"/contact"} className="hover:text-red-100 transition-all duration-300">Contact</Link>
      </div>
    </>
  );
}