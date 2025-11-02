import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "https://green-busket-international.vercel.app/",
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
    },
}); 


export default axiosInstance