import { createContext, useState, useEffect } from "react";


export const authContext = createContext();

function AuthContext({ children }) {
const[role,setRole]=useState("")
const[authUser,setAuthUser]=useState(false)

useEffect(()=>{
if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
    setAuthUser(true);
    setRole(JSON.parse(sessionStorage.getItem("user")).role)
}
},[])

  return (
    <>
    <authContext.Provider value={{authUser,setAuthUser,role,setRole}}>
        {children}
    </authContext.Provider> 
    </>
    
)
}

export default AuthContext