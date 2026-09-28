import axiosInstance from "./axiosInstance";

const apiService=async(httpMethod,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader
    }
    try{
        console.log("Request Config:",reqConfig)
        const response=await axiosInstance(reqConfig)
        return response
    }
    catch(err){
        console.log("API Error:",err)
        throw err
    }
}
export default apiService