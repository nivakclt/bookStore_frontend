
import Header from "../User/pages/components/Header";
import Footer from "../User/pages/components/Footer";

import {
  FaBookOpen,
  FaHeart,
  FaUsers,
  FaShippingFast,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";


const About = () => {
  const features = [
    {
      icon: <FaBookOpen />,
      title: "Curated Collection",
      description:
        "Discover a carefully selected collection of books across different genres, interests, and reading levels.",
    },
    {
      icon: <FaHeart />,
      title: "Reader First",
      description:
        "Every decision we make is focused on creating a better and more enjoyable experience for readers.",
    },
    {
      icon: <FaShippingFast />,
      title: "Easy Shopping",
      description:
        "Browse, discover, and order your favourite books through a simple and convenient online experience.",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Inspiration",
      description:
        "We believe every book has the power to introduce a new idea and inspire a different perspective.",
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description:
        "We aim to bring readers together through their shared love of books and knowledge.",
    },
    {
      icon: <FaGlobe />,
      title: "Knowledge",
      description:
        "We believe learning should never stop, and books make knowledge accessible to everyone.",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-black text-white overflow-hidden">

        {/* HERO SECTION */}
        <section className="px-6 md:px-16 lg:px-24 pt-24 pb-20 border-b border-white/10">
          <div className="max-w-6xl mx-auto">

            <p className="text-gray-400 uppercase tracking-[5px] text-xs mb-8">
              About Our Bookstore
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight max-w-5xl">
              More Than Just
              <span className="block font-semibold text-gray-500">
                Books.
              </span>
            </h1>

            <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
              <p className="text-gray-400 text-base md:text-lg leading-8 max-w-xl">
                We believe books are more than printed pages. They are
                windows to new ideas, journeys into different worlds,
                and opportunities to discover something new.
              </p>

              <div className="md:max-w-xs">
                <p className="text-sm text-gray-500 leading-7">
                  A place created for curious minds, passionate readers,
                  and everyone who believes in the power of reading.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <div className="h-px bg-white/20 w-full"></div>
              <div className="flex justify-between mt-4 text-xs uppercase tracking-widest text-gray-500">
                <span>Our Story</span>
                <span>01 / 04</span>
              </div>
            </div>

          </div>
        </section>

        {/* OUR STORY */}
        <section className="px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85"
                alt="Bookshelves in a library"
                className="w-full h-[400px] md:h-[520px] object-cover grayscale"
              />

              <div className="absolute bottom-5 left-5 bg-black px-6 py-4">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  The love of reading
                </p>
                <p className="text-xl font-medium mt-1">
                  Begins with one book.
                </p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 uppercase tracking-[4px] text-xs mb-5">
                01 — Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
                A Story Built Around
                <span className="font-semibold"> Reading.</span>
              </h2>

              <p className="text-gray-400 leading-8 mb-5">
                Our bookstore was created with a simple idea: make
                discovering and accessing books easier for everyone.
                We want to create a space where readers can explore
                different subjects, discover new authors, and find
                books that match their interests.
              </p>

              <p className="text-gray-400 leading-8 mb-8">
                From timeless classics to modern favourites, our
                platform brings different reading experiences together
                in one convenient place.
              </p>

            
            </div>

          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="bg-[#111] px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-6xl mx-auto">

            <div className="max-w-2xl mb-16">
              <p className="text-gray-500 uppercase tracking-[4px] text-xs mb-5">
                02 — Our Purpose
              </p>

              <h2 className="text-4xl md:text-6xl font-light leading-tight">
                Why We
                <span className="text-gray-500 font-semibold"> Exist.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="border border-white/10 p-8 md:p-12 hover:border-white/40 transition">
                <p className="text-gray-500 text-sm tracking-widest mb-8">
                  OUR MISSION
                </p>

                <h3 className="text-3xl font-medium mb-6">
                  Making Reading Accessible.
                </h3>

                <p className="text-gray-400 leading-8">
                  Our mission is to provide readers with a convenient
                  platform to discover and explore books. We aim to
                  make the reading journey simple, accessible, and
                  enjoyable for everyone.
                </p>
              </div>

              <div className="bg-white text-black p-8 md:p-12">
                <p className="text-gray-500 text-sm tracking-widest mb-8">
                  OUR VISION
                </p>

                <h3 className="text-3xl font-medium mb-6">
                  A World That Reads More.
                </h3>

                <p className="text-gray-600 leading-8">
                  Our vision is to encourage a culture of reading
                  where people continuously learn, explore new ideas,
                  and grow through the knowledge and experiences
                  found in books.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <section className="px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-6xl mx-auto">

            <div className="flex flex-col md:flex-row justify-between gap-6 mb-16">
              <div>
                <p className="text-gray-500 uppercase tracking-[4px] text-xs mb-5">
                  03 — The Experience
                </p>

                <h2 className="text-4xl md:text-6xl font-light">
                  What Makes Us
                  <span className="text-gray-500 font-semibold"> Different.</span>
                </h2>
              </div>

              <p className="text-gray-400 leading-7 max-w-sm self-end">
                We focus on making every step of your book discovery
                and shopping experience simple and meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-8 hover:bg-white hover:text-black transition duration-300 group"
                >
                  <div className="text-3xl mb-10 text-gray-300 group-hover:text-black">
                    {feature.icon}
                  </div>

                  <p className="text-xs tracking-widest text-gray-500 mb-4">
                    0{index + 1}
                  </p>

                  <h3 className="text-2xl font-medium mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-600 leading-7">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* OUR VALUES */}
        <section className="bg-[#111] px-6 md:px-16 lg:px-24 py-24">
          <div className="max-w-6xl mx-auto">

            <div className="mb-14">
              <p className="text-gray-500 uppercase tracking-[4px] text-xs mb-5">
                04 — What We Believe
              </p>

              <h2 className="text-4xl md:text-6xl font-light">
                Our Core
                <span className="text-gray-500 font-semibold"> Values.</span>
              </h2>
            </div>

            <div className="divide-y divide-white/10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-[100px_1fr_1.5fr] gap-6 py-9 items-center"
                >
                  <div className="text-3xl text-gray-400">
                    {value.icon}
                  </div>

                  <h3 className="text-2xl font-medium">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QUOTE SECTION */}
        <section className="px-6 md:px-16 lg:px-24 py-28">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-light leading-relaxed">
              "A book is not just something you read.
              It is something that
              <span className="text-gray-500 font-semibold">
                {" "}stays with you.
              </span>"
            </h2>

            <div className="w-16 h-px bg-white/40 mx-auto mt-10"></div>

            <p className="text-gray-500 uppercase tracking-[4px] text-xs mt-6">
              Our Reading Philosophy
            </p>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white text-black px-6 md:px-16 lg:px-24 py-20">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

            <div>
              <p className="text-gray-500 uppercase tracking-[4px] text-xs mb-5">
                Your Next Chapter Starts Here
              </p>

              <h2 className="text-4xl md:text-5xl font-semibold">
                Find Your Next Read.
              </h2>

              <p className="text-gray-600 mt-4 max-w-lg leading-7">
                Explore our collection and discover the books
                waiting to become part of your story.
              </p>
            </div>

      

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;
