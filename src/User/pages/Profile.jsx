
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import Profileupdate from "./components/Profileupdate";
import SellBook from "./components/SellBook";
import axiosInstance from "../../api/axiosInstance";
import {
  userAddedBooksApi,
  deleteBookApi,
  purchasedBookApi,
} from "../../services/allApis";
import { toast, ToastContainer } from "react-toastify";

function Profile() {
  const [username, setUsername] = useState("");
  const [dp, setDp] = useState("");
  const [bio, setBio] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const [sellStatus, setSellStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const [userBooklist, setUserBookList] = useState([]);
  const [purchaselist, setPurchasedList] = useState([]);

  // Load user profile details
  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      try {
        const user = JSON.parse(sessionStorage.getItem("user"));

        setDp(user?.picture || "");
        setUsername(user?.username || "");
        setBio(user?.bio || "");
      } catch (error) {
        console.log("Error loading user details:", error);
      }
    }
  }, []);

  // Load books added by the user
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleUserAddedBooks();
    }
  }, [bookStatus]);

  // Load purchased books when Purchase History is selected
  useEffect(() => {
    if (purchaseStatus && sessionStorage.getItem("token")) {
      handlePurchasedBooks();
    }
  }, [purchaseStatus]);

  // Fetch user's added books
  const handleUserAddedBooks = async () => {
    try {
      const response = await userAddedBooksApi();

      if (response.status === 200) {
        setUserBookList(
          Array.isArray(response.data) ? response.data : []
        );
      }
    } catch (error) {
      console.log("Error fetching user books:", error);
      toast.error("Failed to load books!");
    }
  };

  // Delete a pending book
  const handleDeleteBook = async (id) => {
    try {
      const response = await deleteBookApi(id);

      if (response.status === 200) {
        toast.success("Book Removed!");

        handleUserAddedBooks();
      } else {
        toast.error("Book Remove Failed!");
      }
    } catch (error) {
      console.log("Error deleting book:", error);
      toast.error("Something Went Wrong!");
    }
  };

  // Fetch purchased books
  const handlePurchasedBooks = async () => {
    try {
      const response = await purchasedBookApi();

      if (response.status === 200) {
        setPurchasedList(
          Array.isArray(response.data) ? response.data : []
        );
      }
    } catch (error) {
      console.log("Error fetching purchased books:", error);
      toast.error("Failed to load purchase history!");
    }
  };

  // Profile picture handling
  const getProfilePicture = () => {
    if (!dp) {
      return "https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png";
    }

    if (dp.includes("lh3.googleusercontent.com")) {
      return dp;
    }

    return `${axiosInstance.defaults.baseURL}/uploads/${dp}`;
  };

  return (
    <>
      <Header />

      {/* Profile Update */}
      {sidebar && <Profileupdate setSidebar={setSidebar} />}

      {/* Profile Section */}
      <div className="w-full">
        <div className="relative h-[30vh] bg-gray-900">
          <div className="absolute -bottom-20 left-10">
            <img
              src={getProfilePicture()}
              alt="Profile"
              className="h-40 w-40 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="px-10">
          <h1 className="mt-24 text-xl font-bold">{username}</h1>

          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-justify">{bio}</p>
            </div>

            <div className="flex md:justify-end">
              <button
                className="flex items-center gap-2 self-start rounded-lg bg-gray-900 px-4 py-3 text-white"
                onClick={() => setSidebar(!sidebar)}
              >
                Edit <FaRegEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex w-full justify-center px-4">
        <div className="flex w-full max-w-3xl items-end justify-center border-b border-black">

          {/* Sell Books */}
          <button
            className={`relative whitespace-nowrap border border-b-0 px-3 py-3 ${
              sellStatus
                ? "border-black bg-white after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:w-full after:bg-white"
                : "border-transparent bg-transparent"
            }`}
            onClick={() => {
              setSellStatus(true);
              setBookStatus(false);
              setPurchaseStatus(false);
            }}
          >
            Sell Books
          </button>

          {/* Book Status */}
          <button
            className={`relative whitespace-nowrap border border-b-0 px-3 py-3 ${
              bookStatus
                ? "border-black bg-white after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:w-full after:bg-white"
                : "border-transparent bg-transparent"
            }`}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(true);
              setPurchaseStatus(false);
            }}
          >
            Book Status
          </button>

          {/* Purchase History */}
          <button
            className={`relative whitespace-nowrap border border-b-0 px-3 py-3 ${
              purchaseStatus
                ? "border-black bg-white after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:w-full after:bg-white"
                : "border-transparent bg-transparent"
            }`}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(false);
              setPurchaseStatus(true);
            }}
          >
            Purchase History
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto min-h-40 w-full max-w-6xl p-4">

        {/* Sell Books */}
        {sellStatus && <SellBook />}

        {/* Book Status */}
        {bookStatus && (
          <div className="mt-6 space-y-5">
            {userBooklist.length > 0 ? (
              userBooklist.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-1 gap-6 rounded-xl border p-5 shadow-sm md:grid-cols-6"
                >
                  {/* Book Details */}
                  <div className="md:col-span-5">
                    <h1 className="text-xl font-bold">
                      {item?.title}
                    </h1>

                    <h4 className="mt-2 font-bold text-green-600">
                      ₹{item?.price}
                    </h4>

                    <p className="mt-3 text-justify">
                      {item?.abstract}
                    </p>

                    {/* Book Approval Status */}
                    <div className="mt-4">
                      {item?.status === "approved" ? (
                        <span className="font-medium text-green-600">
                          Approved
                        </span>
                      ) : item?.status === "rejected" ? (
                        <span className="font-medium text-red-600">
                          Rejected
                        </span>
                      ) : (
                        <span className="font-medium text-yellow-600">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Book Image and Remove Button */}
                  <div className="flex flex-col gap-3 md:col-span-1">
                    <img
                      src={item?.imageUrl}
                      alt={item?.title || "Book"}
                      className="h-48 w-full rounded-lg object-cover"
                    />

                    {item?.status === "pending" && (
                      <button
                        className="rounded-md bg-red-500 p-2 text-white transition hover:bg-red-600"
                        onClick={() => handleDeleteBook(item._id)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  No Books Available!
                </h3>

                <img
                  src="https://png.pngtree.com/recommend-works/png-clipart/20250110/ourmid/pngtree-little-girl-sitting-on-the-sofa-reading-a-book-png-image_15119807.png"
                  alt="Girl reading a book"
                  className="h-auto w-48 object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* Purchase History */}
        {purchaseStatus && (
          <div className="mt-6">
            {purchaselist.length > 0 ? (
              <div className="space-y-5">
                {purchaselist.map((book) => (
                  <div
                    key={book._id}
                    className="grid grid-cols-1 gap-6 rounded-xl border p-5 shadow-sm md:grid-cols-6"
                  >
                    {/* Purchased Book Details */}
                    <div className="md:col-span-5">
                      <h1 className="text-xl font-bold">
                        {book?.title}
                      </h1>

                      <h4 className="mt-2 font-bold text-green-600">
                        ₹{book?.price}
                      </h4>

                      <p className="mt-3 text-justify">
                        {book?.abstract}
                      </p>

                      <div className="mt-4">
                        <span className="font-medium text-green-600">
                          Purchased
                        </span>
                      </div>
                    </div>

                    {/* Purchased Book Image */}
                    <div className="md:col-span-1">
                      <img
                        src={book?.imageUrl}
                        alt={book?.title || "Purchased book"}
                        className="h-48 w-full rounded-lg object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  No Books Available!
                </h3>

                <img
                  src="https://png.pngtree.com/recommend-works/png-clipart/20250110/ourmid/pngtree-little-girl-sitting-on-the-sofa-reading-a-book-png-image_15119807.png"
                  alt="Girl reading a book"
                  className="h-auto w-48 object-contain"
                />
              </div>
            )}
          </div>
        )}
      </div>

      <ToastContainer position="top-center" />

      <Footer />
    </>
  );
}

export default Profile;
