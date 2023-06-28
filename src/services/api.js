import axios from "axios";

export const api = axios.create({
    baseURL: "http://food-explorer-api2.onrender.com"
})