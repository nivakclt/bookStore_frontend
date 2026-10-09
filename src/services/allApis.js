import apiService from "../api/apiService";

// user registration
export const userRegisterAPI=async(data)=>{
    return await apiService("POST","/register",data)
}

// user-login-> token generation
export const userLoginApi=async(data)=>{
    return await apiService("POST",'/login',data)
}

// google authentication->token generation
export const googleAuthApi=async (data)=>{
    return await apiService("POST",'/google-auth',data)
}

// profile-edit
export const profileEditApi = async(data) => {
    const id = data instanceof FormData ? data.get("id") : data.id
    return await apiService("PUT", `/profile-edit/${id}`, data)
}

// add book
export const addBookApi = async(data) => {
    return await apiService("POST", "/books", data)
}