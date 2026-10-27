
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Footer from "../../User/pages/components/Footer";
import { adminAllBooksApi, adminApproveBookApi, adminAllUsersApi } from "../../services/allApis";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../api/axiosInstance";

function Resources() {

  const [toggle, setToggle] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const trueStyle = "border-t-1 border-s-1 border-e-1 p-3";
  const falseStyle = "border-b-1 p-3";

  const handleAllBooks = async () => {
    const response = await adminAllBooksApi();
    console.log(response);
    if (response.status === 200) {
      setAllBooks(response.data);
    }
  };

  const handleApprovedBook = async (id) => {
    const response = await adminApproveBookApi(id);
    console.log(response);
    if (response.status === 200) {
      handleAllBooks();
    } else {
      toast.warning("Something went wrong");
    }
  };

  const handleAllUsers = async () => {
    const response = await adminAllUsersApi();
    // console.log(response)
    if (response.status === 200) {
      setAllUsers(response.data);
    }
  };

  useEffect(() => {
    handleAllBooks();
    handleAllUsers();
  }, []);

  return (
    <>
      <AdminHeader />

      {/* Dashboard */}
      <div className="w-full">
        <div className="w-full h-full grid sm:grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          <div className="md:col-span-9 p-3">
            <h1 className="text-3xl text-center">Resources</h1>

            <div className="flex justify-center my-5">
              <button
                className={toggle ? trueStyle : falseStyle}
                onClick={() => setToggle(!toggle)}
              >
                Books
              </button>

              <button
                className={toggle ? falseStyle : trueStyle}
                onClick={() => setToggle(!toggle)}
              >
                Users
              </button>
            </div>

            {toggle ? (
              <div className="w-full">
                {/* books */}
                {allBooks.length > 0 ? (
                  <div className="w-full flex flex-wrap justify-around gap-2">
                    {allBooks.map((item) => (
                      <div
                        key={item._id}
                        className="w-[16rem] shadow-2xl text-center"
                      >
                        <img
                          src={item?.imageUrl}
                          alt={item?.title}
                          className="h-80 w-full object-cover rounded-lg"
                        />

                        <h1 className="text-center my-2 bg-black text-white">
                          {item?.title}
                        </h1>

                        <h1 className="bg-black text-white text-center">
                          {item?.price}
                        </h1>

                        <button
                          className="text-green-500"
                          onClick={() => handleApprovedBook(item?._id)}
                        >
                          Approved
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h1>No Books Available</h1>
                )}
              </div>
            ) : (
              <div className="w-full">
                {/* users */}
                {allUsers.length > 0 ? (
                  <div className="w-full flex flex-wrap justify-around">
                    {/* card */}
                    {allUsers.map((item) => (
                      <div
                        key={item._id}
                        className="w-[20rem] border p-3 bg-gray-200"
                      >
                        <h1 className="text-center my-2">
                          User ID: {item?._id}
                        </h1>

                        <div className="flex gap-2">
                          {item?.picture === "" || !item?.picture ? (
                            <img
                              src="https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png"
                              alt=""
                              width={"30%"}
                              className="rounded-full"
                            />
                          ) : item.picture.startsWith(
                              "https://lh3.googleusercontent.com"
                            ) ? (
                            <img
                              src={item?.picture}
                              alt=""
                              width={"30%"}
                              className="rounded-full"
                            />
                          ) : (
                            <img
                              src={`${axiosInstance.defaults.baseURL}/uploads/${item?.picture}`}
                              alt=""
                              width={"30%"}
                              className="rounded-full"
                            />
                          )}

                          <div className="flex flex-col justify-center">
                            <h1>Username: {item?.username || item?.name}</h1>
                            <h1>
                              User Email ID: {item?.email || item?.userMail}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <h1>No Users Available</h1>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}

export default Resources;
