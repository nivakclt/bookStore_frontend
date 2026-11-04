
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Footer from "../../User/pages/components/Footer";
import { adminAllBooksApi, adminApproveBookApi, adminAllUsersApi } from "../../services/allApis";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from '../../api/axiosInstance'

export default function Resources() {
  const [toggle, setToggle] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const trueStyle = "border-b-2 border-[#b49a7a] text-[#d6b995] px-6 py-3 font-semibold";
  const falseStyle = "border-b-2 border-transparent text-[#aaa197] px-6 py-3 hover:text-[#f0ede6] transition duration-300";

  const handleAllBooks = async () => {
    try {
      const response = await adminAllBooksApi();
      console.log(response);
      if (response.status === 200) {
        setAllBooks(response.data);
      }
    } catch (error) {
      console.error("Error fetching all books:", error);
    }
  };

  const handleApprovedBook = async (id) => {
    try {
      const response = await adminApproveBookApi(id);
      if (response.status === 200) {
        handleAllBooks();
      } else {
        toast.warning("Something went wrong");
      }
    } catch (error) {
      console.error("Error approving book:", error);
      toast.error("Error approving book");
    }
  };

  const handleAllUsers = async () => {
    try {
      const response = await adminAllUsersApi();
      if (response.status === 200) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching all users:", error);
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
      <div className="w-full bg-white text-black">
        <div className="w-full min-h-screen grid sm:grid-cols-1 md:grid-cols-12">

          <div className="md:col-span-3">
            <AdminSidebar />
          </div>

          <div className="md:col-span-9 p-4 md:p-6">

            <h1 className="text-2xl md:text-3xl text-center font-semibold tracking-wide text-[#f0ede6]">
              Resources
            </h1>

            <div className="flex justify-center my-6 border-b border-[#45413b]">
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
                  <div className="w-full flex flex-wrap justify-center gap-6">

                    {allBooks.map((item) => (
                      <div
                        key={item._id}
                        className="w-[16rem] bg-black border rounded-xl overflow-hidden shadow-lg hover:border-[#b49a7a] hover:-translate-y-1 transition duration-300"
                      >
                        <img
                          src={item?.imageUrl}
                          alt={item?.title}
                          className="h-80 w-full object-cover"
                        />

                        <div className="p-4 text-center">

                          <h1 className="my-2 text-[#f0ede6] font-semibold text-base">
                            {item?.title}
                          </h1>

                          <h1 className="text-[#c4a77d] text-center font-semibold mb-4">
                            Rs. {item?.price}
                          </h1>

                          <button
                            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 font-medium"
                            onClick={() => handleApprovedBook(item?._id)}
                          >
                            Approved
                          </button>

                        </div>
                      </div>
                    ))}

                  </div>
                ) : (
                  <h1 className="text-center text-[#aaa197] py-16">
                    No Books Available
                  </h1>
                )}

              </div>
            ) : (
              <div className="w-full">

                {/* users */}
                {allUsers.length > 0 ? (
                  <div className="w-full flex flex-wrap justify-center gap-5">

                    {/* card */}
                    {allUsers.map((item) => (
                      <div
                        key={item._id}
                        className="w-full sm:w-[20rem] border border-[#45413b] p-4 bg-[#292723] rounded-xl hover:border-[#668f7a] transition duration-300 shadow-md"
                      >

                        <h1 className="text-center my-2 text-[#8bb5a8] font-semibold text-sm break-all">
                          User ID: {item?._id}
                        </h1>

                        <div className="flex gap-3 items-center mt-4">

                          {item?.picture === "" || !item?.picture ? (
                            <img
                              src="https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png"
                              alt=""
                              width={"30%"}
                              className="rounded-full border-2 border-[#5b554b]"
                            />
                          ) : item.picture.startsWith(
                              "https://lh3.googleusercontent.com"
                            ) ? (
                            <img
                              src={item?.picture}
                              alt=""
                              width={"30%"}
                              className="rounded-full border-2 border-[#5b554b]"
                            />
                          ) : (
                            <img
                              src={`${axiosInstance.defaults.baseURL}/uploads/${item?.picture}`}
                              alt=""
                              width={"30%"}
                              className="rounded-full border-2 border-[#5b554b]"
                            />
                          )}

                          <div className="flex flex-col justify-center gap-2 min-w-0">

                            <h1 className="text-[#c4bdb2] text-sm break-words">
                              Username:
                              <span className="text-[#f0ede6] font-medium ml-1">
                                {item?.username || item?.name}
                              </span>
                            </h1>

                            <h1 className="text-[#c4bdb2] text-sm break-all">
                              User Email ID:
                              <span className="text-[#f0ede6] font-medium ml-1">
                                {item?.email || item?.userMail}
                              </span>
                            </h1>

                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                ) : (
                  <h1 className="text-center text-[#aaa197] py-16">
                    No Users Available
                  </h1>
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
