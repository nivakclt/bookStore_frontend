import { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { FaPlus } from 'react-icons/fa'
import UseDebounce from '../../../hooks/UseDebounce'
import { addBookApi, generateBookDetailsApi } from '../../../services/allApis'

function SellBook() {

    const initialBook = {
        title: "",
        author: "",
        noOfPages: "",
        imageUrl: "",
        price: "",
        discountPrice: "",
        abstract: "",
        publisher: "",
        language: "",
        isbn: "",
        category: "",
        uploadedImages: []
    }

    const [book, setBook] = useState(initialBook)
    const [preview, setPreview] = useState("")
    const [previewList, setPreviewList] = useState([])

    const debouncedTitleSearch = UseDebounce(book.title, 1000)

    const handleFileUpload = (e) => {
        const fileBlob = e.target.files[0]

        if (!fileBlob) return

        const imageUrl = URL.createObjectURL(fileBlob)

        setBook(prev => ({
            ...prev,
            uploadedImages: [...prev.uploadedImages, fileBlob]
        }))

        setPreview(imageUrl)

        setPreviewList(prev => [...prev, imageUrl])
    }

    const handleReset = () => {
        setBook(initialBook)
        setPreview("")
        setPreviewList([])
    }

    const handleSubmit = async () => {

        const {
            title, author, noOfPages, imageUrl, price, discountPrice,
            abstract, publisher, language, isbn, category, uploadedImages
        } = book

        if (
            !title || !author || !noOfPages || !imageUrl || !price ||
            !discountPrice || !abstract || !publisher || !language ||
            !isbn || !category || uploadedImages.length === 0
        ) {
            toast.warning("Enter Valid Inputs")
        } else {

            const formData = new FormData()

            for (let key in book) {
                if (key !== "uploadedImages") {
                    formData.append(key, book[key])
                } else {
                    book.uploadedImages.forEach(img => {
                        formData.append("uploadedImages", img)
                    })
                }
            }

            const response = await addBookApi(formData)

            if (response.status === 200) {
                toast.success("Book Added Successfully")
                handleReset()
            }
        }
    }

    const generateAbstractusingAi = async () => {
        const response = await generateBookDetailsApi({
            title: debouncedTitleSearch
        })

        if (response.status === 200) {
            setBook(prev => ({
                ...prev,
                abstract: response.data.reply
            }))
        }
    }

    useEffect(() => {
        if (debouncedTitleSearch) {
            generateAbstractusingAi()
        }
    }, [debouncedTitleSearch])

    return (
        <div className='bg-gray-900 rounded-lg text-white m-20'>

            <h1 className='text-2xl text-center my-2 py-3 flex justify-center'>
                Book Details
            </h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2'>

                <div className='px-2'>

                    <input
                        type='text'
                        placeholder='Title'
                        name='title'
                        value={book.title}
                        onChange={(e) => setBook({ ...book, title: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='Author'
                        name='author'
                        value={book.author}
                        onChange={(e) => setBook({ ...book, author: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='No. of Pages'
                        name='noOfPages'
                        value={book.noOfPages}
                        onChange={(e) => setBook({ ...book, noOfPages: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='Image Url'
                        name='imageUrl'
                        value={book.imageUrl}
                        onChange={(e) => setBook({ ...book, imageUrl: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='Price'
                        name='price'
                        value={book.price}
                        onChange={(e) => setBook({ ...book, price: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='Discount Price'
                        name='discountPrice'
                        value={book.discountPrice}
                        onChange={(e) => setBook({ ...book, discountPrice: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <textarea
                        name='abstract'
                        placeholder='Abstract'
                        rows={'8'}
                        value={book.abstract}
                        onChange={(e) => setBook({ ...book, abstract: e.target.value })}
                        className='w-full p-2 bg-white rounded-sm mb-2 text-black'
                    ></textarea>

                </div>

                <div className='px-2'>

                    <input
                        type='text'
                        placeholder='Publisher'
                        name='publisher'
                        value={book.publisher}
                        onChange={(e) => setBook({ ...book, publisher: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='Language'
                        name='language'
                        value={book.language}
                        onChange={(e) => setBook({ ...book, language: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='ISBN'
                        name='isbn'
                        value={book.isbn}
                        onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <input
                        type='text'
                        placeholder='Category'
                        name='category'
                        value={book.category}
                        onChange={(e) => setBook({ ...book, category: e.target.value })}
                        className='w-full bg-white rounded-sm mb-2 text-black'
                    />

                    <label htmlFor='bookimgfile' className='flex justify-center'>

                        {!preview &&
                            <input
                                type='file'
                                name='bookimgfile'
                                className='hidden'
                                id='bookimgfile'
                                onChange={handleFileUpload}
                            />
                        }

                        <img
                            src={preview ? preview : 'https://png.pngtree.com/png-vector/20260923/ourmid/pngtree-3d-white-cloud-upload-data-and-storage-icon-png-image_20208282.webp'}
                            alt='bookimg'
                            className='w-[50%] h-[300px]'
                        />

                    </label>

                    <div className='p-2'>

                        {preview &&
                            <div className='flex justify-around items-center'>

                                {previewList.map(item => (
                                    <img
                                        key={item}
                                        src={item}
                                        className='h-[100px]'
                                        alt='preview'
                                    />
                                ))}

                                {previewList.length < 3 &&
                                    <label htmlFor='previewimg'>

                                        <input
                                            type='file'
                                            className='hidden'
                                            id='previewimg'
                                            onChange={handleFileUpload}
                                        />

                                        <FaPlus className='text-xl' />

                                    </label>
                                }

                            </div>
                        }

                    </div>

                    <div className='flex justify-between'>

                        <button
                            className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'
                            onClick={handleReset}
                        >
                            RESET
                        </button>

                        <button
                            className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'
                            onClick={handleSubmit}
                        >
                            SUBMIT
                        </button>

                    </div>

                </div>

            </div>

            <ToastContainer position='top-center' />

        </div>
    )
}

export default SellBook