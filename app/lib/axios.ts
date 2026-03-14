import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({baseURL: process.env.BACKEND_URL, withCredentials: true, headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },});
export const apiRefresh = axios.create({baseURL: process.env.BACKEND_URL, withCredentials: true});

// API Refresh should be using only for token rotation