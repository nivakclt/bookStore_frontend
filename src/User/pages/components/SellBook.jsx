import {useState} from 'react'
import { toast } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'

function SellBook() {

    const [book,setBook]=useState({title:"",author:"",noOfPages:"",imageUrl:"",price:"",discountPrice:"",
        abstract:"",publisher:"",language:"",isbn:"",category:"",uploadedImages:[]
    })
    const [preview,setPreview]=useState("")
    const[previewList,setPreviewList]=useState([])

    const handleFileUpload=(e)=>{
        const fileBlob = e.target.files[0]
        const uploadedFiles=book.uploadedImages
            uploadedFiles.push(fileBlob)
            setBook({...book,uploadedImages:uploadedFiles})
            setPreview(URL.createObjectURL(fileBlob))
            const  demopreviewList=previewList
            demopreviewList.push(URL.createObjectURL(fileBlob))
            setPreviewList(demopreviewList)
            console.log(previewList)
    }

    const handleSubmit=()=>{
        console.log(book)
    }
    
  return (
    <div className='bg-gray-900 rounded-lg text-white m-20'>
          <h1 className='text-2xl text-center my-2 py-3 flex justify-center'>Book Details</h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <div className='px-2'>
            <input type='text' placeholder='Title' name='title' id='' value={book.title} onChange={(e)=>{setBook({...book,title:e.target.value})}} className='w-full bg-white rounded-sm mb-2 text-black'/>
             <input type='text' placeholder='Author' name='author' id='' value={book.author} onChange={(e)=>{setBook({...book,author:e.target.value})}} className='w-full bg-white rounded-sm mb-2 text-black'/>
            <input type='text' placeholder='No. of Pages' name='noOfPages' value={book.noOfPages} onChange={(e)=>{setBook({...book,noOfPages:e.target.value})}} id='' className='w-full bg-white rounded-sm mb-2 text-black'/>
           <input type='text' placeholder='Image Url' name='imageUrl' value={book.imageUrl} onChange={(e)=>{setBook({...book,imageUrl:e.target.value})}} id='' className='w-full bg-white rounded-sm mb-2 text-black'/>
           <input type='text' placeholder='Price' name='price' id='' value={book.price} onChange={(e)=>{setBook({...book,price:e.target.value})}} className='w-full bg-white rounded-sm mb-2 text-black'/>
           <input type='text' placeholder='Discount Price' name='discountPrice' value={book.discountPrice} onChange={(e)=>{setBook({...book,discountPrice:e.target.value})}}id='' className='w-full bg-white rounded-sm mb-2 text-black'/>
           <textarea name='abstract' placeholder='Abstract' rows={'8'} id='' value={book.abstract} onChange={(e)=>{setBook({...book,abstract:e.target.value})}} className='w-full p-2 bg-white rounded-sm mb-2 text-black'></textarea>
            </div>
            <div className='px-2'>
              <input type='text' placeholder='Publisher' name='publisher' id='' value={book.publisher} onChange={(e)=>{setBook({...book,publisher:e.target.value})}} className='w-full bg-white rounded-sm mb-2 text-black'/>
              <input type='text' placeholder='Language' name='language' id='' value={book.language} onChange={(e)=>{setBook({...book,language:e.target.value})}} className='w-full bg-white rounded-sm mb-2 text-black'/>
              <input type='text' placeholder='ISBN' name='isbn' id='' value={book.isbn} onChange={(e)=>{setBook({...book,isbn:e.target.value})}} className='w-full bg-white rounded-sm mb-2 text-black'/>
              <input type='text' placeholder='Category' name='category' value={book.category} onChange={(e)=>{setBook({...book,category:e.target.value})}}  id='' className='w-full bg-white rounded-sm mb-2 text-black'/>
              <label htmlFor='bookimgfile' className='flex justify-center'>
                {
                    !preview &&
                    <input type='file' name='' className='hidden' id='bookimgfile' onChange={handleFileUpload}/>
                }
                
                <img src={preview?preview:'https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg'} alt='bookimg' 
                className='w-[50%] h-[100px]'/>
                </label>
                <div className='p-2'>
                    {
                        preview &&
                        <div className='flex justify-around items-center'>
                            {
                                previewList.map(item=>{
                                    <img src={item} className='h-[100px]' alt='preview'/>
                                })
                            }
                            {
                                previewList.length < 3 &&
                                <label htmlFor='previewimg'>
                                <input type='file' className='hidden' id='previewimg' onChange={(e)=>{handleFileUpload(e)}}/>
                                <FaPlus className='text-xl'/>
                            </label>
                            }
                        </div>
                    }

                </div>
                <div className='flex justify-between'>
                  <button className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'>RESET</button>
                  <button className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white' onClick={handleSubmit}>SUBMIT </button>
                  </div>

            </div>
          </div>
        </div>
  )
}

export default SellBook