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

  const handleLatestBook=async()=>{
    const response =  await  latestBookApi()
    console.log(response)
    if(response.status===200){
      setLatest(response.data)
    }
  }

  return (
    <>
      {loadStatus ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div>
{/* Hero Section */}
<section className="w-full">
  <div className="relative h-screen">

    {/* Background Image */}
    <div
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?fm=jpg&q=60&w=3000&auto=format&fit=crop')]
      bg-cover bg-center"
    ></div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">

<h1 className="text-6xl md:text-8xl font-extralight text-center tracking-wide">
        Wonderful Gifts
      </h1>

      <p className="mt-6 text-gray-300 text-center max-w-md">
        Give your family and friends a book.
      </p>

      <div className="relative mt-10">
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="Search books..."
          className="w-[300px] md:w-[450px] bg-white/95 text-black rounded-full px-6 py-3 outline-none"
        />
        
<button
  onClick={handleSearchNavigate}
  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
>
  <FaSearch />
</button>
F
      </div>

    </div>

  </div>
</section>

            {/* new arrivals */}

            <section className="w-full bg-black text-white py-16">
              <h1 className="text-4xl font-light text-center mb-3">
                New Arrivals
              </h1>

              <p className="text-center text-gray-400 mb-12">
                Discover our latest collection
              </p>

            {/* card */}{
              latest.length>0?
              <div className="flex justify-center">
              {
                latest.map(item => (
              <div className="w-64" key={item._id}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-80 object-cover rounded-md transition duration-300 hover:scale-105"
                />

                <h2 className="mt-4 text-center text-lg">{item?.title}</h2>

                <p className="text-center text-gray-400 mt-1">₹{item?.price}</p>
              </div>
            ))
              }
             
              </div>
              :
              <div className="text-center p-10">
                No Books Available!!!!
              </div>
}

        <div className="text-center mt-12">
          <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
            Explore More
          </button>
        </div>
      </section>
      
      {/* authors */}
            <section className="w-full py-16 px-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div>
                  <h1 className="text-sm text-gray-500">FEATURED AUTHORS</h1>
                  <h1 className="text-4xl font-light my-4">
                    CAPTIVATE WITH EVERY WORDS
                  </h1>
                  <p className="text-justify text-gray-600 leading-5">
                    Discover stories that inspire, educate, and entertain.
                    Explore works from talented authors and immerse yourself in
                    unforgettable journeys.Every great book begins with a single
                    page. Discover captivating stories, insightful perspectives,
                    and unforgettable journeys crafted by talented authors from
                    around the world. Find your next favorite read and let every
                    chapter inspire you.
                  </p>
                </div>
                <div className="px-3 items-center">
                  <img
                    src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM="
                    className="w-full rounded-lg transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </section>
            {/* testimony */}
            <section className="bg-black text-white max-w-5xl mx-auto rounded-3xl py-12 px-8 my-16">
              <h1 className="text-center text-sm tracking-widest text-gray-400">
                TESTIMONIALS
              </h1>

              <h1 className="text-center text-3xl font-light my-3">
                What Our Readers Say
              </h1>

              <div className="flex justify-center my-8">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DKe2Zhg37Z7ngA7dphW51BLQZylYgLje4eVrMMTWZqHS3nx83nGkKdWf&s=10"
                  alt="reader"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>

              <h2 className="text-center text-xl font-semibold mb-4">
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
