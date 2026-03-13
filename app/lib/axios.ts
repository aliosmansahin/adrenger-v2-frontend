import axios from "axios";

export const api = axios.create({baseURL: process.env.BACKEND_URL, withCredentials: true});

export const apiRefresh = axios.create({baseURL: process.env.BACKEND_URL, withCredentials: true});

// API Refresh should be using only for token rotation