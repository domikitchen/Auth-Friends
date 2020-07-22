import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")

    console.log(localStorage)

    return axios.create({
        headers: {
        Authorization: token
        },
        baseURL: "http://localhost:5000"
    });
};
