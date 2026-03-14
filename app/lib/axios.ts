import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const api = axios.create({baseURL: process.env.BACKEND_URL, withCredentials: true, headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json',
},});
export const apiRefresh = axios.create({baseURL: process.env.BACKEND_URL, withCredentials: true, headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json',
},});

// API Refresh should be using only for token rotation

api.interceptors.request.use(async (request) => {
  const cookieStore = await cookies();

  if (!cookieStore.get("access_token")) {
    try {
      const res = await apiRefresh.post("/auth/refresh", {}, {headers: {Cookie: cookieStore.toString()}});
    
      const access_token = res.data.access_token;

      const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);

      //TODO: Consider getting maxAge value from the token

      cookieStore.set("access_token", access_token, {
        httpOnly: false,
        secure: true,
        sameSite: "strict",
        path: "/",
        expires: inFiveMinutes,
      });

      const rememberMe = cookieStore.get("rememberMe");
      if(['on', 'true', true, '1', 1].includes(rememberMeHeader)) {
        cookieStore.set("rememberMe", "on", {
          httpOnly: false,
          secure: true,
          sameSite: "strict",
          path: "/",
          expires: 5 * 24 * 60 * 60,
        });
      }

      request.headers.Authorization = `Bearer ${access_token}`;

      return request;
    } catch (refreshError) {
      console.log(refreshError);
    }
  }
  else
    return request;
  
  redirect("/login");
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      const cookieStore = await cookies();
      originalRequest._retry = true;

      try {
        const res = await apiRefresh.post("/auth/refresh", {}, {headers: {Cookie: cookieStore.toString()}});

        const access_token = res.data.access_token;

        const inFiveMinutes = new Date(
          new Date().getTime() + 5 * 60 * 1000,
        );

        //TODO: Consider getting maxAge value from the token

        cookieStore.set("access_token", access_token, {
          httpOnly: false,
          secure: true,
          sameSite: "strict",
          path: "/",
          expires: inFiveMinutes,
        });

        originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

        return api(originalRequest);
      } catch (refreshError) {
        console.log(refreshError);
      }

      redirect("/login");
    }
  },
);

export { api };