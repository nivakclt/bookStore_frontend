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
            src="https://cdn3d.iconscout.com/3d/premium/thumb/payment-success-3d-icon-png-download-10020025.png"
            alt="Payment successful"
            className="w-[300px]"
          />

          <Link
            to="/"
            className="bg-green-500 text-white px-4 py-2 rounded mt-4 mb-3"
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