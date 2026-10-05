import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../../api/axiosInstance";

function Profileupdate({setSidebar}) {
      const [userData,setUserData]=useState({
      id:"",username:"",email:"",password:"",bio:"",picture:"",role:''
    })

    const [fileType,setFileType]=useState(true)
    const [preview,setPreview]=useState("")


    const [existingPicture,setExistingpicture]=useState("")

    useEffect(()=>{
      if(sessionStorage.getItem('token') && sessionStorage.getItem('user')){
        const user=JSON.parse(sessionStorage.getItem('user'))
        setUserData({...userData,email:user.email,username:user.username,role:user.role,bio:user.bio,id:user._id})
        setExistingpicture(user.picture)
      }
    },[])

    const handleFileUpload=(e)=>{
      console.log(e.target.files[0])
      if (e.target.files[0].type.includes("image/")){
        setFileType(true)
        setUserData({...userData,picture:e.target.files[0]})
        setPreview(URL.createObjectURL(e.target.files[0]))
      }
      else{
        setFileType(false)
      }
    }

    const handleCancel=()=>{
      const user=JSON.parse(sessionStorage.getItem('user'))
      setUserData({...userData,email:user.email,username:user.username,role:user.role,bio:user.bio,id:user._id})
      setFileType(false)
      setPreview(false)
      setSidebar(false)

    }
    
  return (       
    <>
    <div className="fixed h-screen w-screen top-0 z-1 bg-[rgba(0,0,0,0.5)]">
      <div className="w-[50vw] h-screen bg-white border-2 rounded-lg p-4">
        <div className="bg-black text-white py-7 px-5 rounded-t-lg font-bold justify-between flex">
          <h1>Edit Profile</h1>
          <button onClick={()=>{setSidebar(false)}}>X</button>
        </div>
        <div className="w-full px-5">
        <label htmlFor="fileinp"  className="flex justify-center my-4 cursor-pointer">
          <input type="file" id="fileinp" className="hidden" onChange={handleFileUpload}/>
           {
  existingPicture === '' ?
    <img
      src={preview?preview:"https://www.svgrepo.com/show/487313/edit-profile.svg"}
      alt="Edit profile"
      className="w-28 h-28"
      
    />
  :
  existingPicture.includes('lh3.googleusercontent.com') ?
    <img
      src={preview?preview:existingPicture}
      alt="profile"
      className="w-28 h-28"
    />
  :
    <img
      src={preview?preview:`${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`}
      alt="profile"
      className="w-28 h-28"
    />
}
          {
            !fileType && <span className="text-red-500">Please upload an image file</span>
          }
        </label>
    
        <input type='text' value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} placeholder='Enter Name' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
        <input type='email' value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} placeholder='Enter Email' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
        <input type='password' placeholder='Enter Password' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
        <input type='text' value={userData.bio} onChange={(e)=>setUserData({...userData,bio:e.target.value})} placeholder='Enter Bio' className=' bg-white border w-full p-2 my-4 mb-2 rounded-lg'/>
            <div className='flex justify-between'>
              <button className='px-3 py-2 bg-green-800 text-white rounded-lg'>Update</button>
              <button className='px-3 py-2 bg-red-800 text-white rounded-lg' onClick={handleCancel}>Cancel</button>
            </div>
        </div>
      </div>
    </div> 
    </>
  );
}

export default Profileupdate;