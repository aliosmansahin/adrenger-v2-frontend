"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(initialState: any, formData: FormData) {
    const rawFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
        rememberMe: formData.get("remember-me"),
    }

    try {
        const res = await axios.post(`${process.env.BACKEND_URL}/auth/login`, rawFormData, {withCredentials: true});

        const cookieStore = await cookies();
        
        cookieStore.set("access_token", res.data.access_token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            path: "/",
            maxAge: 5 * 60,
        });

        const rawCookies = res.headers["set-cookie"]; 
        
        if (rawCookies) {
            const refreshTokenCookie = rawCookies.find(c => c.startsWith("refresh_token"));
            
            if (refreshTokenCookie) {
                const tokenValue = refreshTokenCookie.split(";")[0].split("=")[1];
                
                cookieStore.set("refresh_token", tokenValue, {
                    httpOnly: true,
                    secure: true,
                    sameSite: "strict",
                    maxAge: rawFormData.rememberMe ? 5 * 24 * 60 * 60 : 1 * 24 * 60 * 60,
                    path: "/",
                });
            }
        }
    }
    catch(error: any) {
        console.error(`An error occurred: ${error}`);
        return {
            message: error.response?.data?.message || "unknown_error",
            success: false,
        };
    }

    redirect("/");

}

export async function signup(initialState: any, formData: FormData) {
    //TODO: Implement signup logic
    return {
        message: "test",
        success: true,
    }
}