
import {
  FaArrowRight,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-black text-[#f5f1e9] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-8 md:px-14 py-10">

      {/* ABOUT US */}
      <div>
        <h4 className="text-sm font-semibold tracking-[2px] mb-4 text-[#b49a7a]">
          ABOUT US
        </h4>

        <p className="text-sm text-gray-400 leading-7 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* NEWSLETTER */}
      <div>
        <h4 className="text-sm font-semibold tracking-[2px] mb-4 text-[#b49a7a]">
          NewsLetter
        </h4>

        <p className="text-sm text-gray-400 mb-4 leading-6">
          Stay updated with our latest news and offers!
        </p>

        <div className="flex w-full max-w-sm border border-[#655b4e] rounded-sm overflow-hidden focus-within:border-[#b49a7a] transition">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#f5f1e9] text-[#292723] text-sm px-4 py-3 w-full outline-none placeholder:text-gray-500"
          />

          <button className="bg-[#b49a7a] text-[#292723] px-4 py-3 hover:bg-[#d0b99b] transition duration-300">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* FOLLOW US */}
      <div>
        <h4 className="text-sm font-semibold tracking-[2px] mb-4 text-[#b49a7a]">
          Follow Us
        </h4>

        <p className="text-sm text-gray-400 mb-4 leading-6">
          Follow us on social media for the latest updates!
        </p>

        <div className="flex items-center gap-4">
          <FaInstagram className="text-lg text-gray-400 hover:text-[#b49a7a] cursor-pointer transition duration-300" />
          <FaFacebook className="text-lg text-gray-400 hover:text-[#b49a7a] cursor-pointer transition duration-300" />
          <FaTwitter className="text-lg text-gray-400 hover:text-[#b49a7a] cursor-pointer transition duration-300" />
        </div>
      </div>

    </div>
  );
}

export default Footer;
