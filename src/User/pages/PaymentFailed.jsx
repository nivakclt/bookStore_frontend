import Footer from "./components/Footer"
import { Link } from "react-router-dom"
import Header from "./components/Header"

function PaymentFailed() {
  return (
    <>
      <Header />

      <div className="min-h-[60vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/047/390/957/small_2x/transaction-failed-of-3d-illustration-blue-mobile-phone-credit-card-failed-button-danger-sign-payment-transaction-3d-concept-3d-illustration-png.png"
            alt="Payment failed"
            width="350px"
          />

          <h1 className="text-2xl font-bold mt-4">
            Something Went Wrong!
          </h1>

          <Link
            to="/"
            className="bg-red-500 text-white px-4 py-2 rounded mt-3 mb-3"
          >
            {"<<"} Home
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default PaymentFailed