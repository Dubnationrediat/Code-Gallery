import axios from 'axios';
let BASE_URL ='http://localhost:4800'

const axiosInstance = axios.create({
    withCredentials : true,
    baseURL:BASE_URL
})

export {axiosInstance}