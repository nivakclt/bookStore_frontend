import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect,useState } from "react"
import { BookByIdApi,bookPaymentApi } from "../../services/allApis"
import { useParams } from "react-router-dom"
import { FaEye } from "react-icons/fa"
import Modal from "./components/Modal"
// import { loadStripe } from "@stripe/stripe-js"
import { toast } from "react-toastify/unstyled"
import { ToastContainer } from "react-toastify"


function BookDetails() {

  const[bookDetail,setBookDetail]=useState({})
  const [isOpen, setIsOpen] = useState(false);


  const {bid}=useParams()

  const handleBook = async () => {
  try {
    const response = await BookByIdApi(bid)
    console.log(response.data)

    if (response.status === 200) {
      setBookDetail(response.data)
    }
  } catch (error) {
    console.log(error)
  }
}

  useEffect(()=>{
    handleBook()
  },[])
  
  const handlePurchase = async(book)=>{
    console.log(book)
    // const strip = await loadStripe(import.meta.env.VITE_STRIPE_PK)
    // console.log(strip)

    const response = await bookPaymentApi(book._id)
    console.log(response)
    if(response.status===200){
      const checkoutURL=response.data?.url
      window.location.href=checkoutURL
    }
    else{
      toast.warning("Something went Wrong")
    }

  }
  return (
    <>
    <Header/>
    <div className="bg-gray-50 py-10 md:px-10 min-h-[70vh]">
      <div className="grid grid-cols-5">
        <div className="p-3 justify-center items-center">
        <img src={bookDetail?.imageUrl} alt="bookimg" className="p-3 w-full h-[350px] object-contain" />        </div>
        <div className="col-span-4 p-3">
          <div className="flex justify-between">
          <h1 className="text-xl font-bold">{bookDetail?.title}</h1>
          <button onClick={()=>setIsOpen(true)}><FaEye/></button>
          </div>
          <div className="flex justify-between">
            <h3 className="font-semibold">-{bookDetail?.author}</h3>
            <h3>Language : <span className="font-semibold">{bookDetail?.language}</span></h3>
            <h3>Category : <span className="font-semibold">{bookDetail?.category}</span></h3>
          </div>
          <div className="flex gap-3">
            <span className="line-through">Rs.{bookDetail?.price}</span>
            <span className="text-green-600 text-shadow-mauve-400">Rs.{bookDetail?.discountPrice}</span>
          </div>
          <div className="my-2 flex justify-between">
            <h1>Publisher :<span className="font-semibold">{bookDetail?.publisher}</span></h1>
            <h1>No.of Pages :<span className="font-semibold">{bookDetail?.noOfPages}</span></h1>
            <h1>ISBN : <span className="font-semibold">{bookDetail?.isbn}</span></h1>
          </div>
          <div className="my-2 p-2 text-justify col-span-4">
            {bookDetail?.abstract}
          </div>
          <div className="flex justify-center">
          <button className="bg-green-500 p-3 rounded" onClick={()=>handlePurchase(bookDetail)}>Buy Now !<span className="text-yellow-400">{bookDetail?.discountPrice}</span></button>
          </div>
        </div>

      </div>
      </div>
      <Modal  isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={bookDetail?.uploadedImages}/>
        <ToastContainer position="top-center"/>
    <Footer/>
    </>
  )
}

export default BookDetails