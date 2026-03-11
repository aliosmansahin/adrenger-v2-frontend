"use server";

export async function login(initialState: any, formData: FormData) {
    const rawFormData = {
        email: formData.get("email"),
        password: formData.get("password"),
        rememberMe: formData.get("remember-me"),
    }

    //TODO: Fetch Login API
    console.log("login");

    return {
        message: "logged in",
    }
}