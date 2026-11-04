
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import Header from "../User/pages/components/Header";
import Footer from "../User/pages/components/Footer";
import { FaSearch } from "react-icons/fa";

import { latestBookApi } from "../services/allApis";
import { useNavigate } from "react-router-dom";
import { searchContext } from "../contextapi/Sharedcontext";
import { useContext } from "react";
import { ToastContainer,toast } from "react-toastify";

function Home() {
  const [loadStatus, setLoadStatus] = useState(true);
  const [latest,setLatest]=useState([])
  const [search,setSearch]=useContext(searchContext)
  const nav=useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoadStatus(false);
    }, 2000);
    handleLatestBook()
  }, []);

  const handleSearchNavigate=()=>{
    if(sessionStorage.getItem('token'))
    {
      if(search!=""){
        nav('/books')
      }else{
        toast.warning("Enter valid Input!!")
      }
    }
  else{
    toast.error("Please Login Here!!")
  }
  }

  const handleLatestBook = async () => {
  try {
    const response = await latestBookApi();
    console.log(response);

    if (response.status === 200) {
      setLatest(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      {loadStatus ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className="bg-[#faf9f6] text-[#292723]">

{/* Hero Section */}
<section className="w-full">
  <div className="relative h-[85vh] min-h-[550px] overflow-hidden">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop')]
      bg-cover bg-center transition-transform duration-700 hover:scale-105"
    ></div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/55"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">

      <p className="text-xs md:text-sm tracking-[5px] uppercase text-gray-300 mb-5">
        Welcome to Bookshelf
      </p>

      <h1 className="text-5xl md:text-8xl font-extralight text-center tracking-wide leading-tight">
        Wonderful Gifts
      </h1>

      <p className="mt-6 text-gray-300 text-center max-w-md leading-7">
        Give your family and friends a book.
      </p>

      <div className="relative mt-10 w-full max-w-[450px]">
        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search books..."
          className="w-full bg-white/95 text-black rounded-full px-6 py-4 pr-14 outline-none border border-transparent focus:border-[#b49a7a] transition shadow-lg"
        />

        <button
          onClick={handleSearchNavigate}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#9a8265] transition"
        >
          <FaSearch />
        </button>
      </div>

    </div>

  </div>
</section>

            {/* new arrivals */}

            <section className="w-full bg-[#faf9f6] text-[#292723] py-20 px-6 md:px-12">

              <div className="max-w-7xl mx-auto">

                <p className="text-center text-xs tracking-[4px] text-[#9a8265] mb-3">
                  DISCOVER SOMETHING NEW
                </p>

                <h1 className="text-4xl md:text-5xl font-light text-center mb-4">
                  New Arrivals
                </h1>

                <p className="text-center text-gray-500 mb-14">
                  Discover our latest collection
                </p>

            {/* card */}{
              latest.length>0?
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {
                latest.map(item => (
              <div className="group" key={item._id}>
                <div className="overflow-hidden bg-[#f0ede6]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-5 text-center text-lg font-medium text-[#292723]">
                  {item?.title}
                </h2>

                <p className="text-center text-[#9a8265] mt-2">
                  ₹{item?.price}
                </p>
              </div>
            ))
              }
             
              </div>
              :
              <div className="text-center p-10 text-gray-500">
                No Books Available!!!!
              </div>
}

        </div>
      </section>
      
      {/* authors */}
            <section className="w-full py-20 px-6 md:px-12 bg-[#f0ede6]">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

                <div>
                  <p className="text-xs tracking-[4px] text-[#9a8265]">
                    FEATURED AUTHORS
                  </p>

                  <h1 className="text-4xl md:text-5xl font-light my-6 leading-tight">
                    CAPTIVATE WITH EVERY WORDS
                  </h1>

                  <p className="text-justify text-gray-600 leading-8">
                    Discover stories that inspire, educate, and entertain.
                    Explore works from talented authors and immerse yourself in
                    unforgettable journeys.Every great book begins with a single
                    page. Discover captivating stories, insightful perspectives,
                    and unforgettable journeys crafted by talented authors from
                    around the world. Find your next favorite read and let every
                    chapter inspire you.
                  </p>
                </div>

                <div className="px-3">
                  <img
                    src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM="
                    className="w-full h-[400px] object-cover transition-all duration-500 hover:scale-[1.02] rounded-3xl"
                  />
                </div>

              </div>
            </section>

            {/* testimony */}
            <section className="bg-black text-white max-w-5xl mx-auto rounded-4xl py-16 px-8 md:px-16 my-20">

              <p className="text-center text-xs tracking-[4px] text-[#b49a7a]">
                TESTIMONIALS
              </p>

              <h1 className="text-center text-3xl md:text-4xl font-light my-5">
                What Our Readers Say
              </h1>

              <div className="flex justify-center my-10">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DKe2Zhg37Z7ngA7dphW51BLQZylYgLje4eVrMMTWZqHS3nx83nGkKdWf&s=10"
                  alt="reader"
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#b49a7a] p-1"
                />
              </div>

              <h2 className="text-center text-xl font-medium mb-5">
                John Doe
              </h2>

              <p className="text-center text-gray-300 leading-8 max-w-3xl mx-auto">
                "I absolutely love this bookstore. The collection is diverse,
                the recommendations are excellent, and every purchase feels
                special. I've discovered some of my favorite books here, and the
                service has always been outstanding. It's my go-to place
                whenever I'm looking for a great read. Reading has always been
                my passion, and this bookstore makes it even more enjoyable. The
                selection is outstanding, the prices are reasonable, and the
                atmosphere inspires me to explore new genres and authors."
              </p>
            </section>

            <ToastContainer position="top-center"/>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
