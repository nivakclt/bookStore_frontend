
import { useState, useEffect } from "react";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import { FaRegEdit } from "react-icons/fa";
import { adminProfileEditApi } from "../../services/allApis";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";
import Footer from '../../User/pages/components/Footer'

function Settings() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    picture: "",
    cpassword: "",
  });

  const [preview, setPreview] = useState("");
  const nav = useNavigate();

  // Load admin details from sessionStorage
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");

    if (token && storedUser) {
      const user = JSON.parse(storedUser);

      setProfile((prev) => ({
        ...prev,
        username: user?.username || "",
        picture: user?.picture || "",
      }));
    }
  }, []);

  // Handle profile image selection
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.warning("Please select a valid image!");
      e.target.value = "";
      return;
    }

    setProfile((prev) => ({
      ...prev,
      picture: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  // Update admin profile
  const handleProfileEdit = async () => {
    const { username, password, cpassword, picture } = profile;

    if (!username.trim() || !password || !cpassword) {
      toast.warning("Enter valid inputs!");
      return;
    }

    if (password !== cpassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("password", password);

      // Append the picture only when a new file is selected
      if (picture instanceof File) {
        formData.append("picture", picture);
      }

      const response = await adminProfileEditApi(formData);

      if (response.status === 200) {
        toast.success("Profile updated successfully!");

        setTimeout(() => {
          sessionStorage.clear();
          nav("/auth");
        }, 1000);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Profile update error:", error);

      toast.error(
        error.response?.data?.message || "Failed to update profile!"
      );
    }
  };

  // Reset form
  const handleReset = () => {
    const storedUser = sessionStorage.getItem("user");

    if (!storedUser) {
      toast.warning("User details not found!");
      return;
    }

    const user = JSON.parse(storedUser);

    setProfile({
      username: user?.username || "",
      password: "",
      cpassword: "",
      picture: user?.picture || "",
    });

    setPreview("");
  };

  return (
    <>
      <AdminHeader />

      <div className="bg-white text-black">
        <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-12">

          {/* Sidebar */}
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          {/* Settings Content */}
          <div className="md:col-span-9 p-4 md:p-7">

            <h1 className="text-2xl md:text-3xl text-center my-3 font-semibold text-black">
              Admin Settings
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              {/* Description */}
              <div className="p-4 md:p-6">
                <p className="text-justify text-black leading-8 text-base">
                  Manage your admin profile details, update your username,
                  change your password, and upload a profile picture.
                  Keep your account information up to date.
                </p>
              </div>

              {/* Settings Form */}
              <div className="bg-black border p-5 md:p-6 rounded-xl shadow-lg">

                {/* Profile Image */}
                <div className="flex justify-center mb-5">
                  <label
                    htmlFor="profpic"
                    className="relative cursor-pointer group"
                  >
                    <input
                      type="file"
                      id="profpic"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />

                    <img
                      src={
                        preview ||
                        (typeof profile.picture === "string" &&
                        profile.picture
                          ? `${axiosInstance.defaults.baseURL}/uploads/${profile.picture}`
                          : "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png")
                      }
                      alt="Admin Profile"
                      className="h-[180px] w-[180px] object-cover rounded-full border-4 border-[#b49a7a] group-hover:opacity-80 transition duration-300"
                    />

                    <span className="absolute bottom-3 right-3 p-3 bg-[#b49a7a] text-[#292723] rounded-full shadow-md">
                      <FaRegEdit />
                    </span>
                  </label>
                </div>

                {/* Username */}
                <input
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      username: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Username"
                  className="w-full bg-[#1c1b1a] border border-[#514b42] text-[#f0ede6] placeholder:text-[#91897e] my-3 p-3 rounded-lg outline-none focus:border-[#b49a7a] transition duration-300"
                  value={profile.username}
                />

                {/* Password */}
                <input
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  value={profile.password}
                  type="password"
                  placeholder="New Password"
                  className="w-full bg-[#1c1b1a] border border-[#514b42] text-[#f0ede6] placeholder:text-[#91897e] mb-3 p-3 rounded-lg outline-none focus:border-[#b49a7a] transition duration-300"
                />

                {/* Confirm Password */}
                <input
                  onChange={(e) =>
                    setProfile((prev) => ({
                      ...prev,
                      cpassword: e.target.value,
                    }))
                  }
                  value={profile.cpassword}
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-[#1c1b1a] border border-[#514b42] text-[#f0ede6] placeholder:text-[#91897e] mb-4 p-3 rounded-lg outline-none focus:border-[#b49a7a] transition duration-300"
                />

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleReset}
                    type="button"
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-[#8d5c57] transition duration-300 font-medium"
                  >
                    RESET
                  </button>

                  <button
                    onClick={handleProfileEdit}
                    type="button"
                    className="bg-green-500 text-white p-3 rounded-lg hover:bg-[#668f7a] transition duration-300 font-medium"
                  >
                    UPDATE
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}

export default Settings;
