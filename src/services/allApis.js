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
export const addBookApi= async(data) => {
    return await apiService("POST", "/books", data)
}

// latest books
export const latestBookApi=async()=>{
    return await apiService("GET","/latest-books")
}

// book list for buyers
export const bookListApi=async()=>{
        return await apiService("GET","/booklist")
}

// user added books
export const userAddedBooksApi=async()=>{
    return await apiService("GET","/user-books")
}

// delete user added books
export const deleteBookApi=async(id)=>{
    return await apiService("DELETE",`/delete-book/${id}`)
}

// purchased books
export const purchasedBookApi=async()=>{
    return await apiService("GET",'/purchased-books')
}

// bookbyid
export const BookByIdApi = (bid) => {
  return apiService("GET", `/book/${bid}`)
}

// book payment
export const bookPaymentApi = async (id) => {
  return await apiService("GET", `/payment/${id}`)
}

// admin all book list
export const adminAllBooksApi=async()=>{
    return await apiService("GET",'admin/allbooks')
}
