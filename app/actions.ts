"use server";

import axios from "axios";
import { redirect } from "next/navigation";

export async function login(initialState: any, formData: FormData) {
    const rawFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
        rememberMe: formData.get("remember-me"),
    }

    try {
        const res = await axios.post(`${process.env.BACKEND_URL}/auth/login`, rawFormData);
        
    }
    catch(error: any) {
        return {
            message: error.response?.data?.message || "unknown_error",
            success: false,
        };
    }
    
    redirect("/");

}