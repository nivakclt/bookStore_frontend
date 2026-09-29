import apiService from "../api/apiService";

// user registration
export const userRegisterAPI=async(data)=>{
    return await apiService("POST","/register",data)
}

// user-login-> token generation
export const userLoginApi=async(data)=>{
    return await apiService("POST",'/login',data)

}