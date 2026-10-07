import axios from 'axios'

// create an axios instance with base URL and timeout
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})

// request interceptor rejects the request if the token is not present in the local storage
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// response interceptor handles the response and errors from the API calls
axiosInstance.interceptors.response.use(
    (response) => {
        console.log("Response Recieved !!")
        return response
    },
    (error) => {

        if(error.response){
            const status = error.response.status

            if(status === 401){
                console.log("Unauthorized access!!")
            }
            else if(status === 404){
                console.log("Api not Found")
            }
            else if(status === 500){
                console.log("Server Error")
            }
            else{
                console.log("Error: " + error.message)
            }
        }
        else{
            console.log("Network Error:", error.message)
        }

        return Promise.reject(error)
    }
)

export default axiosInstance