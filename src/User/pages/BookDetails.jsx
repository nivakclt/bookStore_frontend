import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect } from "react"
import { BookByIdApi } from "../../services/allApis"
import { useParams } from "react-router-dom"

function BookDetails() {

  useEffect(()=>{
    handleBook()
  },[])
  
  const {bid}=useParams()

  const handleBook=async()=>{
    const response =await BookByIdApi(bid)
    console.lof(response)

  }
  return (

    <>
    <Header/>
    <div className="max-w-full min-h-[80vh">
      <div className="grid grid-cols-1">

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default BookDetails