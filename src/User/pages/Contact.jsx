import { IoIosSend } from "react-icons/io";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";

function Contact() {
    const form = useRef();
   const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID


    const handleSubmit=(e)=>{
      e.preventDefault()
      const{user_name,user_email,message}=form.current.elements
      if(user_email && user_name && message){
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY}).then(()=>{
          console.log('success')
          toast.success('Thank you for your message!');
          form.current.reset()
        })
        .catch((error) => {
    console.log("EmailJS Error:", error);
    console.log("Error message:", error?.message);
    console.log("Error status:", error?.status);
    console.log("Error text:", error?.text);

    toast.error("Failed to send message!");
});
      }
      else{
        toast.warning("Enter Valid Inputs")
      }
       
    }
  return (
    <>
      <Header />

      {/* Hero */}
      
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-light text-center mb-6">
          Contact Us
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto leading-7">
          We'd love to hear from you. Whether you have a question about our
          collection, an order, or a recommendation, feel free to get in touch.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 flex items-center gap-4 bg-black text-white">
            <FaLocationDot className="text-2xl" />
            <div>
              <h3 className="font-medium">Address</h3>
              <p className=" text-sm">
                BookStore Info, ABC 123, London
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6 flex items-center gap-4  bg-black text-white">
            <FaPhone className="text-2xl" />
            <div>
              <h3 className="font-medium">Phone</h3>
              <p className=" text-sm">
                +91 34567 89097
              </p>
            </div>
          </div>

          <div className="border rounded-xl p-6 flex items-center gap-4  bg-black text-white">
            <FaEnvelope className="text-2xl" />
            <div>
              <h3 className="font-medium">Email</h3>
              <p className=" text-sm">
                info@bookstore.com
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Form */}
         
<form ref={form} onSubmit={handleSubmit}>
  <div className="border rounded-xl p-8">
    <h2 className="text-2xl font-light mb-6 text-center">
      Send Us a Message
    </h2>

    <input
      name="user_name"
      type="text"
      placeholder="Name"
      required
      className="w-full border rounded-md p-3 mb-4 outline-none"
    />

    <input
      name="user_email"
      type="email"
      placeholder="Email"
      required
      className="w-full border rounded-md p-3 mb-4 outline-none"
    />

    <textarea
      name="message"
      rows="5"
      placeholder="Message"
      required
      className="w-full border rounded-md p-3 mb-4 outline-none"
    ></textarea>

    <button
      type="submit"
      className="w-full border border-black py-3 rounded-md flex justify-center items-center gap-2 hover:bg-black hover:text-white transition"
    >
      Send Message
      <IoIosSend />
    </button>
  </div>
</form>
          {/* Map */}
          <div className="border rounded-xl overflow-hidden min-h-112">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0329717590985!2d75.78116170894388!3d11.258984788874423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65900d568d853%3A0x86dc9f15ee869de3!2sLuminar%20Technolab%20-%20Software%20training%20institute%20in%20Calicut!5e0!3m2!1sen!2sin!4v1788259374635!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Location"
            ></iframe>
          </div>

        </div>
      </section>
      <ToastContainer position="top-center"/>
      <Footer />
    </>
  );
}

export default Contact;