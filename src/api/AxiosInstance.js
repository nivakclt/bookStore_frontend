import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})

// response interceptors : handling global/common errors

axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("Response Recieved !!")
        return response
    },(error)=>{
        if(error.response){
            const status=error.response.status
            if(status===401){
                console.log("Unauthorized access!!")
            }
            else if(status===404){
                console.log("Api not Found")
            }
            else if(status===500){
                console.log("Server Error")
            }
            else{
                console.log("Error:"+error.message)
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance