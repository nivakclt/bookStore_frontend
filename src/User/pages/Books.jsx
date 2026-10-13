import Header from "./components/Header";
import Footer from "./components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

import { bookListApi } from "../../services/allApis";

function Books() {
  const [booklist, setBookList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [dummylist, setDummyList] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      handleBookList();
    }
  }, []);

  const handleBookList = async () => {
    const response = await bookListApi();
    console.log(response);
    if (response.status === 200) {
      setBookList(response.data);
      setDummyList(response.data);
      const category_set = new Set(response.data.map((item) => item.category));
      setFilters([...category_set]);
    }
  };

  const filterBooks = (filter) => {
    console.log(filter);
    if (filter) {
      const filteredBooks = dummylist.filter(
        (item) => item?.category == filter,
      );
      console.log(filteredBooks);
      setBookList(filteredBooks);
    } else {
      setBookList(dummylist);
    }
  };

  return (
    <>
      <Header />
      {/* booklist */}
      <div className="w-full py-10 px-6">
        <h1 className="text-4xl text-center font-light mb-6">Collections</h1>
        <div className="flex justify-center mb-9 ">
          <input
            type="text"
            placeholder="Enter Title to Search"
            className="px-5 py-2 outline-1 w-[50%] rounded-full border border-gray-300"
          />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-12">
          <div className="col-span-2">
            <div className="flex justify-between">
              <h1 className="text-xl">Filters</h1>
              <GiHamburgerMenu className="text-xl" />
            </div>
            <div className="my-3 flex flex-col gap-2">
              <label>
                <input
                  type="radio"
                  onClick={() => {
                    filterBooks("");
                  }}
                  name="filter"
                  id=""
                />{" "}
                No-Filter
              </label>

              {filters.map((item) => (
                <label key={item}>
                  <input
                    type="radio"
                    onClick={() => {
                      filterBooks(item);
                    }}
                    name="filter"
                    id=""
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div className="col-span-10 py-5">
            {booklist.length > 0 ? (
              <div className="w-full flex flex-wrap justify-around">
                {booklist.map((item) => (
                  <div clasName="w-64">
                    <img
                      src={item?.imageUrl}
                      alt="Harry Potter"
                      className="h-80 w-full object-cover rounded-lg"
                    />
                    <h1 className="text-center my-2">{item?.title}</h1>
                    <h1 className="bg-black text-white rounded-lg text-center">
                      &#8377;{item?.price}
                    </h1>
                  </div>
                ))}
                {/* card */}
              </div>
            ) : (
              <div className="w-full flex justify-center items-center">
                <img
                  src="https://i.pinimg.com/originals/82/eb/0e/82eb0e1d6bea3ea0627a897f9bb8eb15.gif"
                  alt="No Books"
                  className="h-100"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
