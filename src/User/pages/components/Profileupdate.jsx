
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import { profileEditApi } from "../../../services/allApis";

function Profileupdate({ setSidebar }) {
  const [userData, setUserData] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    bio: "",
    picture: "",
    role: "",
  });

  const [fileType, setFileType] = useState(true);
  const [preview, setPreview] = useState("");
  const [existingPicture, setExistingpicture] = useState("");

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");

    if (token && storedUser) {
      const user = JSON.parse(storedUser);

      setUserData({
        id: user._id || user.id || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        bio: user.bio || "",
        picture: "",
        role: user.role || "",
      });

      setExistingpicture(user.picture || "");
    }
  }, []);

  const handleProfileUpdate = async () => {
    const { username, email, password, bio } = userData;

    if (!username.trim() || !email.trim() || !password || !bio.trim()) {
      toast.warning("Please enter all required fields!");
      return;
    }

    try {
      let response;

      if (userData.picture) {
        const formData = new FormData();

        formData.append("id", userData.id);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("bio", bio);
        formData.append("role", userData.role);
        formData.append("picture", userData.picture);

        response = await profileEditApi(formData);
      } else {
        response = await profileEditApi(userData);
      }

      if (response.status === 200) {
        // Support either a user object or { user: ... }
        const updatedUser = response.data.user || response.data;

        // Preserve existing fields if the API returns only part of the user
        const oldUser = JSON.parse(
          sessionStorage.getItem("user") || "{}"
        );

        const finalUser = {
          ...oldUser,
          ...updatedUser,
          _id: updatedUser._id || updatedUser.id || userData.id,
        };

        sessionStorage.setItem("user", JSON.stringify(finalUser));

        // Update the displayed profile picture
        setExistingpicture(finalUser.picture || "");
        setPreview("");

        toast.success("Profile Updated Successfully!");

        setTimeout(() => {
          setSidebar(false);
        }, 1500);
      } else {
        toast.error("Profile Update Failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Profile Update Failed!"
      );
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type.startsWith("image/")) {
      setFileType(true);
      setUserData((prev) => ({ ...prev, picture: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setFileType(false);
      setUserData((prev) => ({ ...prev, picture: "" }));
      setPreview("");
      e.target.value = "";
    }
  };

  const handleCancel = () => {
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);

      setUserData({
        id: user._id || user.id || "",
        username: user.username || "",
        email: user.email || "",
        password: "",
        bio: user.bio || "",
        picture: "",
        role: user.role || "",
      });

      setExistingpicture(user.picture || "");
    }

    setFileType(true);
    setPreview("");
    setSidebar(false);
  };

  const pictureUrl = preview
    ? preview
    : !existingPicture
      ? "https://www.svgrepo.com/show/487313/edit-profile.svg"
      : existingPicture.includes("lh3.googleusercontent.com")
        ? existingPicture
        : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`;

  return (
    <>
      <div className="fixed h-screen w-screen top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]">
        <div className="w-[50vw] h-screen bg-white border-2 rounded-lg p-4 overflow-y-auto">
          <div className="bg-black text-white py-7 px-5 rounded-t-lg font-bold justify-between flex">
            <h1>Edit Profile</h1>
            <button onClick={handleCancel}>X</button>
          </div>

          <div className="w-full px-5">
            <label
              htmlFor="fileinp"
              className="flex flex-col items-center justify-center my-4 cursor-pointer"
            >
              <input
                type="file"
                id="fileinp"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />

              <img
                src={pictureUrl}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover"
              />

              <span className="text-sm text-gray-500 mt-2">
                Change profile picture
              </span>
            </label>

            {!fileType && (
              <p className="text-red-500 text-sm">
                Please upload a valid image file.
              </p>
            )}

            <input
              type="text"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              placeholder="Enter Name"
              className="bg-white border w-full p-2 my-4 mb-2 rounded-lg"
            />

            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              placeholder="Enter Email"
              className="bg-white border w-full p-2 my-4 mb-2 rounded-lg"
            />

            <input
              type="password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              placeholder="Enter Password"
              className="bg-white border w-full p-2 my-4 mb-2 rounded-lg"
            />

            <input
              type="text"
              value={userData.bio}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
              placeholder="Enter Bio"
              className="bg-white border w-full p-2 my-4 mb-2 rounded-lg"
            />

            <div className="flex justify-between mt-4">
              <button
                className="px-3 py-2 bg-green-800 text-white rounded-lg"
                onClick={handleProfileUpdate}
              >
                Update
              </button>

              <button
                className="px-3 py-2 bg-red-800 text-white rounded-lg"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}

export default Profileupdate;
