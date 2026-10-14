import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaRegEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import Profileupdate from "./components/Profileupdate";
import SellBook from "./components/SellBook";
import axiosInstance from "../../api/axiosInstance";
import { userAddedBooksApi, deleteBookApi,purchasedBookApi, bookListApi } from "../../services/allApis";
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
  const [purchaselist,setPurchasedList]=useState([])


  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"));

      setDp(user?.picture || "");
      setUsername(user?.username || "");
      setBio(user?.bio || "");
    }
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleUserAddedBooks();
    }
  }, [bookStatus]);

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      handlePurchasedBooks
    }
},[purchaseStatus])

  const handlePurchasedBooks= async () =>{
    const response = await purchasedBookApi()
    if(response.status===200){
      setPurchaseStatus(response.data)
    }
  }

  const handleUserAddedBooks = async () => {
    try {
      const response = await userAddedBooksApi();

      if (response.status === 200) {
        setUserBookList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      const response = await deleteBookApi(id);

      if (response.status === 200) {
        toast.success("Book Removed");
        handleUserAddedBooks();
      } else {
        toast.error("Book Remove Failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  

  const activeTab =
    "px-4 py-3 bg-black text-white rounded-lg text-center font-medium transition";

  const inactiveTab =
    "px-4 py-3 bg-gray-100 text-gray-700 rounded-lg text-center hover:bg-gray-200 transition";

  return (
    <>
      <Header />

      {/* /* Profile Update */ }
      {sidebar && <Profileupdate setSidebar={setSidebar} />}

      {/* Profile Section */}
      <div className="w-full">
        <div className="h-[30vh] bg-gray-300 relative">
          <div className="absolute -bottom-20 left-10">
            {!dp ? (
              <img
                src="https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white"
              />
            ) : dp.includes("lh3.googleusercontent.com") ? (
              <img
                src={dp}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white"
              />
            ) : (
              <img
                src={`${axiosInstance.defaults.baseURL}/uploads/${dp}`}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white"
              />
            )}
          </div>
        </div>

        <div className="px-10">
          <h1 className="mt-24 font-bold text-xl">{username}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <p className="text-justify">{bio}</p>
            </div>

            <div className="flex md:justify-end">
              <button
                className="self-start px-4 py-3 bg-gray-900 text-white rounded-lg flex gap-2 items-center"
                onClick={() => setSidebar(!sidebar)}
              >
                Edit <FaRegEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center px-4 mt-12">
        <div className="flex flex-row justify-center items-end w-full max-w-3xl border-b border-black">
          <button
            className={`px-3 py-3 border border-b-0 text-black whitespace-nowrap ${
              sellStatus
                ? "bg-white border-black relative after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-white"
                : "bg-transparent border-transparent"
            }`}
            onClick={() => {
              setSellStatus(true);
              setBookStatus(false);
              setPurchaseStatus(false);
            }}
          >
            Sell Books
          </button>

          <button
            className={`px-3 py-3 border border-b-0 text-black whitespace-nowrap ${
              bookStatus
                ? "bg-white border-black relative after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-white"
                : "bg-transparent border-transparent"
            }`}
            onClick={() => {
              setSellStatus(false);
              setBookStatus(true);
              setPurchaseStatus(false);
            }}
          >
            Book Status
          </button>

          <button
            className={`px-3 py-3 border border-b-0 text-black whitespace-nowrap ${
              purchaseStatus
                ? "bg-white border-black relative after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[1px] after:bg-white"
                : "bg-transparent border-transparent"
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
      <div className="w-full max-w-6xl mx-auto p-4 min-h-40">
        {/* Sell Books */}
        {sellStatus && <SellBook />}

        {/* Book Status */}
        {bookStatus && (
          <div className="space-y-5 mt-6">
            {userBooklist.length > 0 ? (
              userBooklist.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-1 md:grid-cols-6 gap-6 p-5 border rounded-xl shadow-sm"
                >
                  <div className="md:col-span-5">
                    <h1 className="font-bold text-xl">{item?.title}</h1>

                    <h4 className="font-bold text-green-600 mt-2">
                      ₹{item?.price}
                    </h4>

                    <p className="text-justify mt-3">{item?.abstract}</p>

                    <div className="mt-4">
                      {item?.status === "approved" ? (
                        <span className="text-green-600 font-medium">
                          Approved
                        </span>
                      ) : item?.status === "rejected" ? (
                        <span className="text-red-600 font-medium">
                          Rejected
                        </span>
                      ) : (
                        <span className="text-yellow-600 font-medium">
                          Pending
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-1 flex flex-col gap-3">
                    <img
                      src={item?.imageUrl}
                      alt={item?.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />

                    {item?.status === "pending" && (
                      <button
                        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        onClick={() => handleDeleteBook(item._id)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center h-100px">
                <h3 className="text-lg font-semibold text-gray-900">
                  No Books Available!
                </h3>

                <img
                  src="https://png.pngtree.com/recommend-works/png-clipart/20250110/ourmid/pngtree-little-girl-sitting-on-the-sofa-reading-a-book-png-image_15119807.png"
                  alt="Girl reading a book"
                  className="w-48 h-auto object-contain"
                />
              </div>
            )}
          </div>
        )}

        {/* Purchase History */}
      
{purchaseStatus &&
  <div className="mt-6">
    {
      purchaselist.length > 0 ? (
        purchaselist.map(book => (
          <div className="p-5 border rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-5">
              <h1 className="font-bold text-xl">{book?.title}</h1>

              <h4 className="font-bold text-green-600 mt-2">₹{book?.price}</h4>

              <p className="text-justify mt-3">
                {book?.abstract}
              </p>
            </div>

            <div className="md:col-span-1">
              <img
                src={book?.imageUrl}
                alt="Book"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center h-100px">
          <h3 className="text-lg font-semibold text-gray-900">
            No Books Available!
          </h3>

          <img
            src="https://png.pngtree.com/recommend-works/png-clipart/20250110/ourmid/pngtree-little-girl-sitting-on-the-sofa-reading-a-book-png-image_15119807.png"
            alt="Girl reading a book"
            className="w-48 h-auto object-contain"
          />
        </div>
      )
    }
  </div>
}
      </div>

      <ToastContainer position="top-center" />
      <Footer />
    </>
  );
}

export default Profile;
