import Header from './components/Header'
import Footer from './components/Footer'
import { FaRegEdit } from 'react-icons/fa'

import Profileupdate from './components/Profileupdate'
import { useState } from 'react'

function Profile() {

  const[sidebar,setSidebar]=useState(false)

  const [sellStatus,setSellStatus]=useState(true)
  const [bookStatus,setBookStatus]=useState(false)
  const [purchaseStatus,setPurchaseStatus]=useState(false)

  const trueClass='p-3 border-t-1 border-s-1 border-e-1'
  const falseClass='p-3 border-b-1'

  return (
    <>
    <div className='relative'>
    <Header/>

    {/* profile */}
    {
      sidebar &&
      <Profileupdate setSidebar={setSidebar}/>

    }

    <div className='w-full'>
      <div className='h-[30vh] bg-gray-300 relative'>
        <div className='absolute -bottom-20 left-10'>
  <img
    src='https://png.pngtree.com/png-vector/20241115/ourmid/pngtree-user-icon-web-admin-profile-avatar-silver-color-style-vector-png-image_14430725.png'
    alt='Profile Image'
    className='w-40 h-40 rounded-full object-cover border-4 border-white'
  />
</div>
      </div>

      <div className='px-10'>
        <h1 className='mt-35 font-bold'>Username</h1>
        <div className='grid grid-cols-2'>
          <div>
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
          </div>
          <div className='flex justify-end'>
                <button className='self-start p-3 bg-gray-900 text-white rounded-lg flex gap-2 items-center' onClick={()=>setSidebar(!sidebar)}>
                  Edit
                  {' '}<FaRegEdit/>

                </button>
              </div>
        </div>
      </div>
    </div>
    <div>
    </div>

    <div className='w-full flex justify-center'>
      <div className='gap-2'>
      <button className={sellStatus?trueClass:falseClass} onClick={() => 
        {
          setSellStatus(true)
          setBookStatus(false)
          setPurchaseStatus(false)

        }}>
        Sell Books
      </button>
       <button className={bookStatus?trueClass:falseClass} onClick={() => 
        {
          setSellStatus(false)
          setBookStatus(true)
          setPurchaseStatus(false)

        }}>
       Book Status
      </button>
      <button className={purchaseStatus?trueClass:falseClass} onClick={() => 
        {
          setSellStatus(false)
          setBookStatus(false)
          setPurchaseStatus(true)

        }}>
        Purchase History
      </button>
      {/* Main Content */}
      
      {
        sellStatus &&
        <div className='bg-gray-900 rounded-lg text-white m-20'>
          <h1 className='text-2xl text-center my-2 py-3 flex justify-center'>Book Details</h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <div className='px-2'>
            <input type='text' placeholder='Title' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
             <input type='text' placeholder='Author' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
            <input type='text' placeholder='No. of Pages' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <input type='text' placeholder='Image Url' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <input type='text' placeholder='Price' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <input type='text' placeholder='Discount Price' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
           <textarea name='' placeholder='Abstract' rows={'8'} id='' className='w-full p-2 bg-white rounded-sm mb-2'></textarea>
            </div>
            <div className='px-2'>
              <input type='text' placeholder='Publisher' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <input type='text' placeholder='Language' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <input type='text' placeholder='ISBN' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <input type='text' placeholder='Category' name='' id='' className='w-full bg-white rounded-sm mb-2'/>
              <label htmlFor='bookimgfile' className='flex justify-center'>
                <input type='file' name='' className='hidden' id='bookimgfile'/>
                <img src='https://png.pngtree.com/png-clipart/20190921/original/pngtree-file-upload-icon-png-image_4717174.jpg' alt='bookimg' className='w-[50%]'/>

                </label>
                <div className='flex justify-between'>
                  <button className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'>RESET</button>
                  <button className='bg-green-500 p-2 rounded-sm hover:bg-amber-800 text-white'>SUBMIT </button>
                  </div>

            </div>
          </div>
        </div>
      }
      {
        bookStatus &&
        <div className='p-2'>
    <div className='p-3 border grid sm:grid-cols-1 md:grid-cols-6'>

      <div className='md:col-span-5'>
        <h1 className='font-bold text-xl'>Book Title</h1>

        <h4 className='font-bold text-green-600'>$600</h4>

        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          In eveniet sint quidem nemo obcaecati debitis quod.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia reprehenderit aut molestiae laboriosam qui.
        </p>

        <div className='flex'>
          <img
            src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYDBQcBAv/EAD4QAAEDAgUBBAcGBAUFAAAAAAEAAgMEEQUGEiExQRMiUXEHFCNhgZGxMmKhwdHwFkJSchWCkuHxJCUzU1T/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAoEQACAQIGAgICAwEAAAAAAAAAAQIDEQQSEyExQVFhFEIiMjNxoSP/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiLxAeovEQHqIiAIiIAi8uvUAREQBF4vLoD6RfN9l8mRrftOAHvKAyIo7q2mb9qeIebwsL8WoIywPrIG6xdvfG/kpdGcyJyLVy4/hkd9VbEbchpvZQps5YLCQDUvcTxpicfyUzJdmXWprllhRVaTPWEttpbUvvxaMD6kKLL6QKRt+zoal9vEsH0JU1I+Tm8VRX2Lmioj/AEguudGGXsdw6ex+WlYn5+ncD2VHE02H2iT+iakTPzKPk6AvFSP4rxGaURwxwsLg5zLi5cANha/mvZ8axmZzvVJG6AGjWGCxcQD1Gwt+wmoi/Kg+Ll2K+dXkucS4pmWSRwD6mzCQQ2OxdbwIH5Lx0eZ6mNjSyuY4Dd293X4622U1PRj5fiLOkahZfJnibuZGD/MFzg4DmCrD3ujniLhctfU7eQ3Xw/JuMzOIk7PS7kmW/wCCmpLwR4qp1BnRHYhRsF31MLfG7xso8mPYVGLvr6cbXHtBuqhRZHrrFtXPTsb07O5LR5WF+iljJM7msbJXRAt2LxESXD37pml4Lq12toG+dmbCQHOFUHhvOhjnfQe5RJc6YRGRpkmfx9mF3XzUJuRogSfX5N7XtGAfqvtuRKC1jVVVvAFo/JW8yZsU+kjK7O9AIu1ZTVbmcX0tAv8A6lGlz7CLmGhkcBe5dIBY9OL3vt81OGTsL0hrzUvaG6bGYgW+CzR5RwSOxFHf+57ipaoxlxT7RpI8+vfLE1+HiNr36L9rqtx7grwDdcvzfDHh2PNhpImsj7Nrw22y6ZTu108TvFoP4Kwbu0zWGnNylGbu0ZURF0PWa/G5pafDKmaBxbJGwvBAva2/C54MVxzEpHMo5q6VzD3jHtt0JbbbyXRsYF8Mq+61/sX914uDsdiPBUvIEmrF6osLXMki1XDbb336+9cpp5keHEpyqRjeyZDdhuZ6guuKo6r2Ln6bb+a+jlzMUoDXMNurnThdLXxLIyKN0kjg1jRck9Ammi/Ch22c6iyVihA1yU7G3JJc8km4tbYeamQZHqBShr6qCOa+7mtLhp9w2turVT41h1TKyOnq4pHP4Dd7qe42FzwEVOJYYSg1dFSbkphja2Ss3tpeWQadQ+ex439y9ZkWkaXH12pF2hoa1rNgCDtcHwUo5xw/U4Bk50i57oHW3VS8JzFQYnL2MJfHKRqax4ALh7kUYMKnhpO2xrmZEwkHvSVTz96QfkFKGTcEA3p3u/ulcfzWPMuZX4JVxQilbKJI9QPaWN724sVqG57qWSs9Yw5oiPJa91x42uN/wT/mmZbw1N5WtyxxZZweJ2ptDEXeLhf6qTFg2GxC0dFTtB8GBRMUxRwy3LieHOaT2XaMLm3HyVSp8bzZXh0lKNTGO0vMcLSAdjY/BVygjc6lKnJRUefCOgtpadv2YYxbizQsmlo4aAqvlLMNRiNRJSVzB2rG3Egba/uI8VDznilY3EYMOopjE0huvSbFznGwF/3yrnVro1rwVPOkXQW8F5JIyMXke1g8XGy5vimH4nl00lQytcS86QTI4ta7mxHUKxY9/wB3ye2qaGgujZLbnSeoTPe+xI4htP8AHdFmY9r2hzHNc08EG4UU4lReuCk9Zi9a/wDVfvePC02Q5g7B/Vtep8DyHfE3/Va3DWmTPdVI8PFnPcNXGwDdkz7L2a1rxi12WWsxvD6Go9XqZ9M2nXp0k2HwUB2cMKAOl0rrDVtGRdV3P0ZZjkUpY50b4wCAbDYm4v8AFWmDLGDwt0somEH+ol31Kl5N2MKpVnOUY9E3EsQZQ0zZ3sc9pNu7YW2vc36AAqt1GeomTGNlDIQBfU6QA28bAHZbPOeqPAXOitqZJHYHjdwFvLdRspw0uIYB7SmjddzmO1gOJ/BG3eyFSVR1MkXbY2uCY1TYxAZafU1zTZ8buWlbLlUDIrXwZgq4XXADHtAJ3Olw3t8Vf+gWoNtHTD1HUhd8nOvSKy+MQb6S6n5O45KveFP7TDaV3jE36BVD0ixWqaOZpeJNDrEeAIvt/mVmyy8yYFQuPJhF1iP7s40dsRNG1ReIup7TFUs7SGRn9TSPwXP8hPLMXkDnkdoxw7Mi4Ltjz++V0Ry5nleSOLN8cWkNOp8QaHEm4ab/AEPTquU/2R48RtVg/Z05a3McnZYFXvHIgfYfBbFafN1zl6saASXBrbDrdwXSXDPTU/RnPaenlpfUq5sukPfZr7caTv8AG34XXVGObLAHsN2ubceRVBkpB/B1FO3V7Kq1ar76XEjnkXNlasq1AqMDgcDq0XYD5Ej6LnDbY8WFWV5fKuVDLVNRz5mnpaqBkzQ2QhsjQQHawevuuvrF6MYbm2CSii7OBskZDWizRfkfFYoq1mD5qrJ3d+OOR7ez2BN/9yvt1TLmjH2dlHoYC3gkhoab3Nhz0+KwrHD8cmX7XNpn6N3rNHIGM0Bp1SOF7AEbW+KnZqi7TLLXQxMdJ7PTtxcgGyh+kNpa2gm32MjCPcQP0UaCuxPFKalpmUhFMHNPcY5l2N43vt04Wna7R2k0qk4vlk7CHCXJdTFZto2ysGoXbssPo5cGUVZHfutkad/e3/ZWI0kdNhU8dPH2epjyRybkcnxKoWC4XUYmKiGGdjSQHOLHuAI8PmP3dHdNFkpU5w7aRMy2138azmJwdHqlcS09Cdvhwsucqd8GYqOsDAWu0Xd4EO8FlyoXYXi0lHLFC10ji1x2DgQPmR5qbnGpho5Y53zSRyCMmNrXWDiHC9+qn0MxinQd/J958YJMGieWh4bM11j19yk5diZW5UjgIYGSMkZ3DcAXcNrrzNmiXAS5zQW6mO3F7X6pkid1RgbS+TtHB7gXWA9/A81v7ndJa/8AaNZkg+rV9TSOux1u8y97OabHfqseV3CbM1c67iGPlIvxu/p8lMlkpsMzCGt1apZ9TyZCN38C3B348FGyKyN9dXVEezXAbC/iT135WVykcoq0ow8NnnpAY3taV73gOaxzm3cQLgjp4r5pc04vUOgbHQbOLNTvV32sSLkG/Ft1k9IbCHUM3eADnMOkA8+fuurLhDtWGUZIsTCz3dFUryZpRcq8knYi5qDDl+sdIxzw2MO0tIBJBBHPkoORpWPoasR30+sEgF17XAPK2uYW68DxBrOfV32sbb6Sq/kB3YU1dHK77EjXaidrafFV/ubltiIv0YcFDI82yAPY12qVrgCe8ORt4q7jcBUCieyXPDHQanMdNIQ4G7SNBV/CsHsXCtWlbyU70iMbbD5HBmzns7x23A/RbbJspmy9SuIAIBbZvAsVrfSPG5+E00kbXO0VIvYXsC1w+tlKyG/VgMTedL3g/NZW1QxHbFNeiyIiLqe24I3XNaT2eeGvcCP+re0uLb83H0IXSiua17Y2Z1JuXyCsjIbb7O7fj71yqdM8eL+j9nSlos6FxwN7WEBznjkHfrbbyW95CreeKaorMNjgpaeScmW5DLXFgfFblwd638bNE/HohgH+GyxPdI5gHaXaQN9jb5fJbD0f1MfY1VIxpAa4PaT/ADX2Pu2st9hFG2HDKaOSFjZGxAO7oBG24Wmy3g1XhmLVTxTxx0sjnAWkJs3ltv31WEpJpnmjCpGcJM1D6YHPBa+NkkTp7vDmj+lX2GmihbpijYxvNmtsq3X4BWVOZ4sRY6JsEbmuH9Rta/RWocKwVrnTD08rlddlWz9GH4dTuI+zPsbeLXLZ5Zc2TA6NzdI9mB3eiy43hbMWpWwPkMYbIH3AB4WTCMPbhlBHSMkc9rL2c7nc3VS/K5tU3rORLlbqjc2wNwQqVk+Vn+OVMcRGgREaWtIYw6twLq7rWUGBUFBVvqqaItmeCC7UTz/wrJXaLODlOLXRUcc7KHPELg13al8ZJvyCAAQPgVsc/wCHz1VNBU04LhAXB4BOzTvf8FYqrCaGrqW1FRTxvlaAA8jcWNwphaCLHcLOTlM5/HbjOLfJzavzc2uwOKhfSkzODQ5wdzY8geOytmTKKoosGYKvUJZHmQtdy0HYA/ABbZlFSMfrZTQtff7QjF1IG3irGNndstKhKMs0ndlLz1h9RLPTVNHHPJK4hpbG0kC29ypeSKKWlp6iSeCWGR5aC2QeA3IVoJAvdfD5ooxeSRrf7jZMqzXGhFVdS5os3YXUYlDSCmj1mKXW656WWlhwPMzGtY2rLY2M0tDqhw6eDbBW6TFcOiHtK2maAeXStH5rGcbwz/7YTvpGl17n4KOMW73JOnTnLM5f6YcLw6qjwJ1DiE/bTOa5rpHEuvfz5WkjyfWFpFRXxPc9tnOEVr/DgreHMmF6JHtnL2xAF5awkNvxfZQpM64SwkXmO9tmbHdGodknGhZZnwZsAyxS4PIZxI6eoLdIe4W0j3Bb0dFVX54ohqDaWpLgL2IA/FR3Z8hMZc2heCLd10guR1O3h++CmeCKq9CCsmTc/C2X3SH+SaMjbjvWv+Kx+jyTXgjmjT3Zncc9OVXcZzZJi9HJRSUccUbyPaF5NiCD4e5bn0cSF1LWtJZYStNmgC2yypJzujjCrCeJvF9FzREXY+gCuZZzb2GY3ytLrl0bjtxa3X4LpqoecsHrqzFxLTU0kjJGBpc0AgWvz4LnUTtseTGJumsq7L3dfJcwcuAsuZswPMU8Tmyx17XGwBdUC3x7y8GTccmHtIogfvzX/VTO/Bn5VTqmzo8ldRxmz6qBp98gH5qM/HcJb3XYlS3te3bNO3zVIjyDiW+qama6/IJ48rKZSZDnhce1rYXAttbsybb9N0zT8EVbEPiBZZMx4Qx4YaturmwB/RR5s34RCSDO59gD3GEhQf4Lj7cSmrdsQbaL8dPopc+UcPmO4c25BdpAGo/v6q3mbzYl9Ijvz3hgGpsVS4XtfSLfVYJs/wBMw+zoZ3tH8xIFlMbknCg8yEzuJ+/wPBS48rYS2MMdTuewXsHSONr/APAUtUM2xT7SNBLn5wtooRvY3MmwusT88VrmjRT0rSd7lxNhe2/hurUzLmDstbD4TbjUL/VSGYPhsZuygpQfERN/RMs/I0cQ+ZlPpc24jUSxAupmAu0lrW3cQOTzt8fBe1WYcSlqIm0c7nx3FzHTm7j1b14/P3K8MghjAEcTGgcaWgL7DQOiuWXbNqjU7mc7ra/MUtRogZiIY7nRFsPjZRX0maqmO2nErkHmYs/MLp1rL1NP2YeDvzJnLn5czJVPBnjkIsABJUbeXJWRmR8VL2uEdMyzr/8AkP6LptksmlELA0+2zn7Mk4iXNL6ikZp2toLvqp1Pk2Ztu3rg8htrhnHkrkiacTosJSXRVzlFj6RtNJWy6Q7VdrQD8+UjyRh4a4PmnNyPskN4FuitFkstZImvjUvBXo8mYO12p0csh+/Jf98LOMqYKBY0QcPB8jj+a3aJlj4NKjTXEUatmX8IYLDDqYj70YP1U2npIKYaaeGOIfcYB9FnRVJI2oRjwgiIqaC8sF6iA8sPBLDwXqIBZLBEQBLBEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//2Q=='
            className='w-[50%]'
          />

          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACUCAMAAABSgr46AAAApVBMVEX///+WEBGSAACPAACMAAD8+/uJAAD59vb38/Py6+uWDQ718PCVAACGAADw6Ojn2dnr4ODhzs7Wvb3dyMiYNTaraWrLqanAlJWSFhecREWfS0zCmZm8i4uXHB3HoqK0e3zRs7OXLzCoYmO4g4SjVVadPT6UKCmwc3OZIySkPj5/AACiNjarU1OsX1+eLS2OHh6qSUnFfXu4bGzFiorft7aFDQ67ZWQ2HrXgAAAgAElEQVR4nO1955rbuBIlCYBBoJgTmHNQS6S0np15/0fbAoO6bUsej6/tbn/f1o97WxYloViFU6cCOILw/+Uji2KZh/dew68Uo0zjyjfeexm/SiQ79JsRHeXmvVfya0QL/I4kqYdEpCvvvZhfIFbRY4yzeGZUpMR+7+X8ZJGMIJaJNw2R2LHjURSZL733mn6maG5aEUTFK6t61PlFXF+6zn3vVf00UcyyqAiYTRQxIXHqaFIwFDFL33thP0scUAb1HhXFjOChtCRLE5zb7YZa672X9jPESooco+MRZYiQKjEVySm6QrAmgsaxfO/V/c+ilO3VC5phJKzD8uAqgpScbzfimUKRTRUZtPde4f8kip343YXVguG0EBicgyApeYm9XCiYIzh9xOifjDWK5dRRlOZBVwuCG4Mmmh34aZWWwEdt4htSe+rrIflTo/5ivrpt22ZgMYRCTTWDepyLwFb521IMKifZmIbtn0lOrTyt86YJas8rrRzMdyibSO9S555O5FGiGv05y4jzngv9MZHcZtLLphjMRLw6HEmsMBZfutJ445DWtTOFvy5tRf48XpPKde2XVtq0thZAuJNMwc3rwfxcEXWQc9iNVU/Jn+SmkgEWK2vf7xvBcB0TtqMRkttDP3RpbAj9URzPwe9e5g/LAYhnbhiu6+RDLKmKpFll3cZx+jCDMPzZFgIszqL/uxf6Y6KYuX8FRjb4TR5YdqoKByf19Kopn/AyKUCDYFyzuKJ/QkgEbdo487x+zOKh4ehiJjXT29x8TlnseD5IYd8z/PGNaARR39dh1rcV1qtAExTH92R9cA8PYLIM1fUPZcCBYHasQ9XHxhrJra+49a/pcESYtI4kWE0ly6Do4yjgyTuyBKMnHHwyUhT+vuX+V1HN9Nq10e0WD63Yx4kB5ut07BUPwEVSNU1TpQzVe9j/S3eFYGb0OH3QuqJklT6GrN2LLnE3xoWtqHZa6d4QfO11kiQlfhzFvo9QtSNLggfBjDHNqvJ3rvt75eAGPsYYkvZL10dFbipm4DPShvYDKq0FjhQThBB8gOJ0u8IknqEUiM5V8/HoN8SGqOsY6EcRHQLzoDlNRPrCsR7tPqUhrVbqGCHI8kUU7QFkIoFQjpSOk/k7F/8dYhYepdOl7SnCcltqnHhmL1VgqY+vDzEitjQ0NcGgIiXl9u+O7itGjMQx+lD020h7efZodjpnCMmpAWgay0T27acM2nyhor4g6KGRj6KI6y1KSvjkCg0S50vwUdxUOjgcXLIxQ/0wDEUJvDrF+rXNv1WMqBF45oY+bo9EKu9OmZJQMq/j/zmdPoabanbSzWdv7Ht0RJMlHRSjrGUSNw9pl7Tb9JAhJlb73rM7JJK9iGj2sSm0x7g9he+fQ0FsGOIKd/9cIoRIlFqcaUd6X5QPb79i58lmNmekbK7uV7keQmxzSqUWS8GRO//67rwGoLId0TjS7DYyWgOdthK/0qPcfuieh3LosByueoQZFav+FUvKK94Te6nEhSbot8upft8WxiGPR0B6LhDgE0uR3DBGY+MaD31LzSO4HJENUOozZtGY3i9VUoza7W+zw7ZQZJdL/p5oahQiwlw7xjCJYSWHsNLRrXxKtVzG496cBatSLacFovx6udUivDmtkpIEIr8Ye+/VaVME05/ossTzeOK7T7UnXfaGh04lrWzbrriGdAvsUjsyoAb4Db0uGd6xxu1FTfKjKJPfg34rZpm4AyFiRoGOREOpSmYey13+OKuFy/2cq6gEKcQE5K9W02J6qjIxu75eKRXyrqHm64A1UZth9tvp98F1EiZ3cxzPLcnq3FStMrzQKXlEPMGXnbTD+FouL5RyxOLWpldaxObx7L28iSlGcveBHHeCUZ8qEf/meo2VT1GplkFQhXY4pPZBdZsI0qLHxJOn9D0+UhHtmFmyeVg1lFpEj+x8o49TeTN6MaQw6zr0W1N9d+hEJCbwl4Mn96AKWt5e5T55Qjxt3wMw4jScIrbtvlSutxA3ITFjrKftY94y1K7gVmJ27H4br9Fyj6AjYCf2U6vgcduuZSzXTwtGpg6Xi5ugjb1Ynpyv5vaRH8beiMhjLHFET9IKBHv9t4xmcOKpkyXJAQTt2kCSzJC9APF8iAOSwcd+TIzuCoKK8aKilMvR+pmUtw0Hj6L4M96i7CXw9uxCDsXg/V9vxIMbRjLEalDviK9TaMMyCibHjfMQXA524r1wXxyub3SkaIUYs9NXOCmrqGubSKRv26Gc8m02s/VUMWogFOKvxhorGEZYKWouFBOvcQ6aGyRlA/ntI3CRzGC4kiNiDud0SYSz8a5iw7er2sjFqkxZgo9yry/U+2d9+Cl927L6zRbCahTR8CsDhmQ3rYi59UQzmmvQygj8nrSm8tg93SbO+OVHz15fd+I888i+4M2SKZTZxmOaIcsgV/b6brlWdZpYPMJn9W1nD1EuuJ8yAOJfR06VxL+I2+6LhgKMZheVLNfOY8avOENPEGYM7LLDh3MVz/NmRkS4vxmTnC9v1TiK4jj0Pcxfl8Bxj3wfILKZVC1DTYBUX8TJr8mhJHsAIpmJDPwL07hUeGyI5z556jOBjKoTmpyGUXbfOzYYEG3bkeo8LKbYW5XXXYipMaa4NQR1qWSItI97cdNHaXEp5AQ07H6BmypmHskihKMxE0kWN6agmemVdcm3mgm8ekRxXAM4oOIOQgnz4ohtKhL4vNnKy7docswLbfCv8FqK1mINm3x5+w3JGRxJk+l2Y36mSJabyDLLxH5mlykeSm0lnkP+bdxWkg6MdWQdE1H3uneCJC82DUXkuZyRrTylRts/Y7gf9jBUoG0/jveGhVXnquADZbhnVT9HNDeNT+dsBhgQM8L5mBUUHolC+0nJ7FVUs8Dc0fhGzPd/NIWAoDdh0RQcspZnSrLpTRm8lpQEFI7iU7WXNtSicwRb5t79E1N9rWzAX/rsdLplKGuAmoHC8jKw9OhyxTA+67No2VHkI04U7+RMyN1DE2X3uIjrg9CuIc6ojts/kvU1uEDWdtUdptw4kJQIIor808bA7PBT1sRtbgZjfRkgmQVwYfo1NR/noVISed6pLt8Yt0FiL/YeonjfsUZn8cB9j/y4kCx9aVJIKdktu2LPALYG18HRVgMxmkkDrKkydBV+gkiH3APi0rX16EMmN4CrmLVMWP1km2tBI4TkeCRg8vJ+B0z52vUZIA65l+TbyLBi+ZXAQcR313TKvu7uu8ZAG9wWYEpk5fZRaxgEq+8zEf/P7VLp4BayjJg4NoaD+7oEuMk9IJ7h417twW6YrBsWg30H0UQf9sukmlQ+7MYs2+u7gqv7qlm/bkVRD6Vg4TdawY0YnQF7V3Tp1qvQsN0d+5IJCrgFFYf/TT/VAqgER6Jz75eumdqS4QyyHhXOQ3BRzKCVMRZJKOV+HXHryHd6XBLUXanYM3/XUJ30QDCurypSEqhrPcAF+IQ8OGM0W7ZtgFcNdyRWfDCuPV36Y/c/8Ro7Tde8AYlt4JiC6obtiwjE8+HVitN04DZw+bFTBaOMYc+Ba0Xb1RZHBs5N7mU0KeHbrmRvAHUstcVKSoHEapzBDVGy3Ay2Ys/6it8vsQMsgDgS/TD9BjCUwmjweOAlcutKkMb7ve6F9jMe4WZ4Ps0LAaElXyRph0wc8TYTqmzwAdF0v+12D4Feehszjt62uW2PTj0bEUbtYvJmM+K0B4wOKHwZnwnkpD+mn9MMdRFzbEAED7YimGkv6235uBetOKUEZAuWP4+cTRO+ew7e3DKOkYO63YGFm1QZLraPaYXcSIIS4h1tKBCxzeTNqYNUv/O3Ooe9XkPZDm8NGgTbj8e++wFeo9hDWAy+05xPM2JxrgiHPOJ/PA6vksWVbwSjpt01O/Owh5YMolkaouLOtg/DaivGqt0NHJEcuHX3mNFzFTeTR3SsS6fApOE3VfXX70Ll9lFL70ypmVjYFf9KOD4X1XDrCp8ukxg244WP7yhmKuvdk6wWSCKPHOzYwUfdBrwyq4CBIB6JrS0S4K3clK+KsNtp303GpHOKow0YSLxIM9iqImnXFduA4DMkXDhanHrlOSi6Y0AE7Kg840+f/lOqLxluc+lul3GOBhyEQ2koVtm8ZH7y9FvsK8BJdV5LtlbXFWkDllgGsqU9EmzDBmbE0yCRQc6w3/ZkTSesmtZ8qvvI+r11yFMN2NBA9FC+fZi7Q3M3WAkwpV1Q74359+dQVlDf8Hw7XTLkta2tKRAbomoI3YftlPV77Z7/8pitvpVWxdAtG6qEVw7ZM4d10UUUra/nfe/Y3lq6sAan48VFBnqiaH1PBVpOO34/+HcfBsxzqNdNpzQxnxtuGzZ952T0IW+amIx0PI/iWOf2QdKSiMm+Yzx0T9UZlmVLCcQE8Riv+lqQ9VQcUZabbUQbvzz2ixGd2B+XiEGb/bb7ZIUdqyE06yFngY/KG9YaoBQ9Znip/WoFzyX8N8o4JFWEPA3b75uMtiGWeVON8EgqL4KArpa+ffCeEU8jiZnnLK4LQANqbRpC6s3ijvubZ3Ltd3659jgV8DnGMGXZfTsFtF/xy4XIz6JUpGfW7SHObCFYDNVxNHmh6iges7fh3SYASo5XxWH5b24qqSVkCf1wqasTPUUcUqyyH4tngUZ1Sxkj3AYv2w+WGPXbzeWAAOwTHJPvDnvcdiLGix4OyqomHsXXHEo9o+1P93qk/UghgMZ3rzFq3ckreiSJ5FIAo8+iu/oXOL/D/Db59gC/dLATH5gLxJ3TjUVTokDaV7+kwxPiKRh5p/MUkTcHvdUUAPfZZhStwmiOM441h821VrBZSoFq128a33OodG8bSkGGVxdGzd1UKpBiHn308lAT9kWJuMSTJpVt5RXfQFPFDmrxXAALpJiMQ2JDAC6qsW7KZ+25g88Iv50Ld9nPsNh+UG43LCQ4zCG/W+oSr7nsVtr+S15yBIjc+96x5B09pGShfOIsXutX3hS0DB8p8pW8/ZKfQWJiCubpWwHRCobuNJ8vYtxjci0cTTVVoaxS93FWqzkWx5LzyHCbcvDmfOWwLi7fx69thvyWa4E56zfjnZGtNXpXRnh7ec+h7unUxuvOTHxLp61y8DCOLO0rn1JCuYFAE0C2+ngjWkFZfCJzdpuz2I9zUzoEkDxIgfn4lhhGcAXwUgodQ7Ka9CuLwmtlyZ52OgXRG9F+eYs7Yrq7KV6OESixFy9pPfJ2Ny3lO+woA1niJTt9VibUTNt+iHjOiIFOOo5iJw/eddN/0rwJPGBZ6O8UGL3WdJQ3uB7fDrOZo5qDl3AoC4jMGduY5BrqpeFONsEx2byYiUOIM28q0qzk7wbVrRcX6lru6/fI3f3UmPArb6fvOfJ7CGL8YkEoncpPpy+uV+3Co6d/hiiaEDtNuQpXT6jrnqCuJNidjETPQ9usp9ujbN6LRWu72b2+QvzOZDz4OmXa3XStI1oems/8BqB2/7FEnu7rOyxNfHxE/5YTKbZP5NF3IFi1qc3O5Zv31DVNLdpwggy5BuIJCrPjxS8fMxfI2g07Q9FMxCndtkxJIAna8wHMv12pxQ31pd0xKeaOm28aAipxZ5QCNo68FirucV0wr+Q1ZK8bl2L/W7VeyLSbl3YIIWN10sSPzLi5V/AEIJ4e5Vl7O54xt55kBpNO6tB9nBbZec0HXQZZRqeoCKNtWQnBdw2PI9ckwe22KKff4vxSgTCqtfo/i4vCgjtW0eSLvDa8/QbEgfb15rpLRork56m75aZxN6T826zB0+P+nOjFayndFzHlKdwRj35icTT1XqrQfez2Bq+HArtvVbcYonPU4+u2LAgKe043YsyhzyLjjjV3wr3kegWuFg17ssCHMcRBWlBeIN4HuEPydrDCiQBu6+TJRuQGuXaJaUmSawPVq7IoG33/zk6UdLnrQBJI4WqKnUbzXJTW49hnphCKljmQsRRUzSojTO6xVW02FVHbeIQnMDXZqxO5uBFuyiHOlKvlxXXzvHyMVxy+A0yA8SvYQH7TNg9n2pdbnqfnKAH1TLtsW1hf9ikar8nr4xYOw5hxatuHBj/LyF4S5/AstFv13sak43qLrQFX4ebwysFfVQT63yPuoY6+J2pWtbnwmjVx+s0vPa65rR1hOvGq/XHHmhLCj1g7d6WeRDfBHHyxGoBUWrlf+TEvccZR2oVvLSSF8EtVwbsgsLPGtnyi3fJ98V5coH26DYI0tIqWn5dK+7A4I53j7jr6Xq0o8X2qfiuqABPhjujIVbdERHHdW7zIxFWm2ebWAeY8Vv4mfEpWHr94Xq4BzLQ6ZAcoi8R+7v0vaxh2h7JL7QIbJG34L+2UsNpVHMlmuYOPr+tXmpNlcdijLK7O/SXChWT3O9my97zwxMnfIRo5iQVyuX605MycQ/HKVTfySkn6dI5LMuziqt8GQ1HtMBpaBI5D6yT286+5s+ojEcGGKXD8BI61w05pVDdfV8ou8w7eEM5WrNEGXzV5TwhVUcYQgrColNUOgNFbrJHKeqR95rXyqqEGAbMuKsCalZzZDEPugdtnWZ4KeE4Ae0wgcP6I/DiexOMo18FjfAx4+6ezTBI9eBuAKh38IbxviWEt//S38/7zzku9vlnKhWBf+YwyW7k0zpV8n2sN5M2/CZ/GMyPgcWxy2q3ckOAxTEeenbSpu2hIxOJJh4ejfUWq1NYUJ43rUzWnceQT0S8fTgsIvMSHxOjkLHWcL/UT3A5uJsJ43sGXT1yvEWEN9YYmlJudrBY2jkM2FIH/OWallGyfO2wFXMAajfs2T11GP9rYpiWSalw3KqkOAmQNyRMuDIl5hHnzXLLCuh9Je+v8ouBHGL6REVpjm14GJdD9z7/USDzT9HaKVa0OpcTHFS/Xs0YHP3rdKyHpwFiLH/OeScawZ0r7d255IV0f1sGhhI3xdefTNabZyonokkQrj82hQeb0ghu4a47jd4AucKtZ3OXOt+sykl7EaDYF+U1RRzrw+WvgzileNBpHcQvf9/xuwZpD/fIKeK4Hq5cSjoMZOOpZFLPXup69gxQg0ErFTuyI918M8UK+RYRY+2S1kmIPsn6tgSqbaYeiNEja84jGf8NHLhFvSjVCI+/YpZlhx9sTx8gw05j1lF5O9LiihlXdMQNWKjUkun+PMvAMUE0xZV0l8kpw19+nmDR/+9xx6eI2BOw89tvijIWYAXeMiidFWMUKpk+szm3h4PiEeF07NkUctc+u/1xKdDtRptjyNm3lFlfC53PEZU7CahkdvZFF7ZJoKHcavbhbQsnrLSzZaHBQJbxSz10VFr3HCym4G59b3elYNp73IwQlr0sQ5udPjlwYTjqRLgFnBD8ldSVGl3jq/PIpuHwhmjefZhIo7ToebsVLY6Ti5SFe0bEwyno2NsmwIKqzt6GXlD147TnwOLeg1WGSwefYOPP6hLwXhcxuNz63ujWB5x/jDYcg0Sde+mT2RjDDmuhTYHKK9pco9lPFWMsehb6nkpL5Nl7gTi71Davlo0piz3hhiceEQeYG9TyyJOVGfXc3bQnWnfHmi1ruNEbENx0gycz6DH2RQ9GlXqN8yubxXq+WQv8ZF1bLIdb11ATOnEzZaeqyDB8JR9P/MtYNKEBnBsCJ14ZAtNTLKe828HhmgcvRhW6W/O18a/pQjjVBldHXKGORFa3MCi9OzryK4WlbijNuvGbmVq+zES155Kbj45WZwRV3iatAjhd4bBrhjlGMx+ZJ0fapaEt4GqR03oBR01GWkZiKmPuRWozjFfbVKEb8nvN+AR+iYMcY0um2Q/Xrz03biKfdXRknZuPltHdhhIW2jhntT5W1HG6tmm8OMEE2lLZ6Fx6AS9XTlKHuhGENs/9d4PKFBPyswOXg/PN/NrcJcd9HvJ6OObyUcuZVPBwvUwBA8EQwx1yJvQuoj9CbGnq5pROSmXsA5J145txgM1ACdu0r8XQiiRDOnfPNlR7cMGnbolRVM4lkNlwYmxGrpscn1/9VrDYT53/KQ7EXLS3QCYhiNjLOq6z4WN3EjLZracAZRY9DPRVDKb00afw6wqJVexX6ECNviKuesvtcK9AHUDGjM57U/DT7z0vvcINqWYdIx08S9QShsZtH8NfU+dEnCikhEv+ZC6m81dtP+DjrYB9m/aJyjnlNWyzCmL9S4/V5Rrz869bN0E2vvxvq+4hnAgvrwwt908McltlMsZo71+r04FnZ1nDCy4ucugfFTWO8wB64T+s4/3X3vRX7ks1tapltuB+mWqACZGmKuBPPixDLsLUuHgwK9kUoENxaXxtnq5hk75UoiRd1MS/AkZ1+JwuaMnq9ppLzjImAU/bdAMYykrbHa1kfyV7yo9bbRP1rHAPwwfCvbbDYWtMdJp4rntA5A9z8aejXGazD2so9RTyHkvJYfm2EaIN+PyYHqSc/1kq3uW1Bnfh0+xEhOXrmoGrg+5+6hneWarZOt1O4Pn48y/KfJDh9QufBcD1v/W0p5+1H0G89JRZQoMZ5irYUdViDQT/z7rzUIPa6/R3Z2+/2UoDqvUhcK048dmbZ3J0enUTnP6naBZFZqGoQ2jt5V49FPzhb8YWYHqz57EjdXh+zl1k5yuaIVwD56EtWjXQbSLJlnpJTJC4lY2PCYDdt3X9WrN+5uNHUddhG6LgW7EsGmzsxHzMX1SwnnbWpzdvMVQb68R2Mu6H8WcOGgAJjVUiJPqxG1IrVTc/1Qo/Ttm15SXNFIiXyB/FYdaxfiu122ypSuEY3KZTjuwse0jbmxSu5XL4ynUL3sbupTtNVQ+MYqp1cKsz6ZVxYfHaA6IfEQbcobi3tZe/ylNk2ObZ4plXEFafH29BYXgQVagdG1maDUwpKvVnf8f03PtsvX4LXuVb18WlDwJQyeGlLVTJyvyKI8f2P5Kx5RlR/UPrzVA6hUJOta2P50Uok1wJOtxQS8famWUUMj2PbZEsBUJL4abK1dGP4ffz6rUvOLyL9eZxWSr8rQtVWBXeI1jlvfoQ9Anv+VP14O4RFl0+C+1JvGzsc6nXuLOMba53P2Z+mqTZXOhLWDj3aUT/fR/J4R/SNijp/nkf9DCysgulL+VjLOxnz4j86YnwtvjMt+k+i6scxkx2ljXesuR5pNWesQr6yRmsR9feFk6l0CcP0/hjYss1XGuZ4t/FNNMiv7ZOCvGKUrY4iiHSq68sEwAVuBo7iz+Zsf6YAjQGWIuT6ntP481j7XS9y4qmt4znlfrFRRH6LQcMx2q4uZXJdhw9OV3xN7xAhPZ69AeLZVHLll5pi5jFZxsHQ4LPYVn/ZsXP3es6ofDD7/Vy4K1frFAXsPt4Sw+T14IBQVrj3h3Zo/C04AHtfyy45A+fe68RPhJ/q6dsBoNIoi2ptFlDYrcazRyb9FDm0y2FbpZC3A8YCW/Yhn3A0ShlIW/om27G7I3PyyW/7NThIIabLUQBpDTOkeG4KxUw6WU4OChDPFsjfWuGWv/1chZ8gUkKWUaaS7BXCZmv7YdFRKuI5b9esFPGp6Pjx3r8Xci7x4Sbe43M9QM8jeSmf/Y7lTEXb5gaffa8QroohAuIpF/aT9tJPFJOPhGSO1e4dWONlq+2SQSm/LLGXVy9FtLv24YI1FsmYyHspzgzY2YfPun12UUVjokiCXdPzCHnRHAMz7H4VuHwuKh8EJ4OU4D2HqgkvY1KWXb/OBJQWWJvIs7+avznwRzNTyIiUtPOdx9ZQLDsine8qkpV0DIn9SE+xG3Tpbzvd6l5G3jqxPX27o44MOTmPiOKD4Y1wbWEc2ygAol54/AU/a6Y8M5+b9sMAWa3hFCMpQm7AsSmcJ+3mXyJqMwPDziV/OxQnGB1lSxcCe197kcmtxjrmkUGzvRQSZoS6r3ofm2im6TQepEWAMhPGx6j4BOklrh8/9ePXST5XFNeHAG+8Swkx9nq6nST7UnhyxDxGq1yx4P8ImfIn/RQzCe0gMCzpEAwRJ2a0z0Q5e3Zy/ReK7WGRjq563es1do/ossEenQlz5SW/8i5dKfgvcmM+aUbbaaefYfMJZtExjFnGW0z680cm/VLxj3zyU0rJlkNoRe1TQBrgc1/vFo0s1c/eo51hPHuKkRFW8jkO+fh3hI8Lr8ZHfB3e65FADs8BK8vQ98myEkJW5omhQ74+657InPAglEXp48KnYtiFjtrchCDhMzZma94wT8H7Pb9Z5VOXJBDivU/PW/OgRB2w7ksjqSRq2Tey8IObAuWpS0OygrSWj5wfIXye0vd9UmWDeZFQcl72Pn3KORhjMb2fEttFqaq2b59k4ZJZpm0fWoZiOGnUFeWVYizjrvjJWe1/F0sXR1G21eue6rs9pnNbjez21eyHEz8DQ7UsotELbQCXYKhOx8J2kjgvnW89q/O3SYQz3jcLq+0x2UqLRHbNkGd/dbRX0p61izr2EvMpJqeOxrLIq0BSwmWQ/Rcv/ruEl4KpLJnyZctjAkDMrJ9ucv99Z93tgsl/12C+QxJjVsxpUlxTSXj83IH3EI3Xjkiu+mTLoRR+HDDj+f2Q/FvXRzXDpugukAVB2ue17ZDG1TVMpn89HPA7RQrBZpBDBaTeAnK6PjdG7IMkekbKlk9aziCLTeAqBzeMI98PcjeMokIT3iOyf0PsDPLezLaivUFv6ZyZZhmtevn5aXfNCtqu5we5lWBqozp3isG3guHJ6b33lIN/HinE93Qf8VR1iijyvCMiT0/2qVI7xFFuKoeDoNR94deBFjiJoX6Y3fdWAl5vjg133uh3g6OiyxifRHqyXsOpzZZ3nq2Gz6I5zhCyXPgNOfsPCp/m4XMmqV7yl5rcop5R9iRrlw7pVW8LUB6ChExw4yahmZtN8wEi3zORUl4ra6SSrbvOJ2I3PHZPICy1TrrChm1Y/E2AokM2VRefPvp/hcmtjmI32Za3Yo1ZPHmMB4fMa+8HlqSV7Xyc/NGrMYuK/F3Sov8iao3jInCkRlwb9E9OlAR+pvulrbm0BqwAAAIISURBVB6cdKiiaQ4bzDyOpr9zrT8oeRw2aS651dPHZCtOExPiO5pk8tB3O3ftUHe4S741BPmBxOriT/7VEbwn/6kh4GNMZ6klKGVdYTx28/lTdhpr9+PFvmfyf6/Z33Eh5frwNU1T3PqFsNqVBKO5kiXr687ieHn+yKSPKKbo1zUzNTn6IlvVzKR/ufKHwxtlTU5nnjxidu7+yxTdx5DOGxFOhfSz0wmQ1Q6yHqeOAgy7kufuNvEnxVZD8MfpB1hDxmz2FPvN6JnmhL5IACr5w+Hb5WkAtyjD8fPHYnxoMUjGTshRmm28W7CWw0WBrUjOEPGZioze4mv7dKD+w4tUjFn1qRG0Ypn/sYuK6C1kh4ekPp2z48gyhHvHfHqA6A8QVx7HTLes2DO0sNdxlR54EPybHi/TLRsx7v2P8RD0HxZjEpsiS5WCRLoMtFRSzPQ2V/UZeZ8+zf2zRyb9SVKyMa0vmpNlfs6fw+bLeBwxQpiMfvMTxszeX8wbynzmKKWraU5ywXx4H4lHMg4/POP5wUQrjjSNGmAuZuov4/nZ6GXeN0/f/GFSjsQOqsA5BK3Hj8EcMaudP4d4focY00xGJHetTOl4xWL3rDX/50rYU7Gn9BY1zVAMTx+L8QeLVfGJ5dM/OFD+TGL27+Lzp1GNbfDRqy4/LmZEKv+PKEr8sCjWhy15fqf8P2FU5nsoQei6AAAAAElFTkSuQmCC'
            className='w-[50%]'
          />
        </div>
      </div>

      <div className='md:col-span-1'>
        <img
          src='https://ew.com/thmb/wVbnTFDHmKhH-GWRPlcQI-6ASAY=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/hpsorcstone-e2b869c8764c4f6699f9877f99380f32.jpg'
          alt='bookimg'
          className='w-full h-[80%]'
        />

        <button className='p-2 my-2 bg-red-500 rounded-sm'>
          Remove
        </button>
      </div>

    </div>
  </div>
      }
      {
        purchaseStatus &&
        <div className='p-2'>
    <div className='p-3 border grid sm:grid-cols-1 md:grid-cols-6'>

      <div className='md:col-span-5'>
        <h1 className='font-bold text-xl'>Book Title</h1>

        <h4 className='font-bold text-green-600'>$600</h4>

        <p className='text-justify'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          In eveniet sint quidem nemo obcaecati debitis quod.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia reprehenderit aut molestiae laboriosam qui.
        </p>
        

        <div className='flex'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLT6tz_ugAOL_m-wPbFmZuqcZMr7BvXuNbHc_2iXOve0nE--K4vn6Gq44f&s=10'
            className='w-[20%]'
          />

        </div>
         
      </div>
       <div className='md:col-span-1'>
        <img
          src='https://ew.com/thmb/wVbnTFDHmKhH-GWRPlcQI-6ASAY=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/hpsorcstone-e2b869c8764c4f6699f9877f99380f32.jpg'
          alt='bookimg'
          className='w-full h-[80%]'
        />
      </div>

    </div>
  </div>
      }
      </div>
    </div>
    </div>
    <Footer/>
    
    </>
    
  )
}

export default Profile