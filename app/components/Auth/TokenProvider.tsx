"use client";

import { api, apiRefresh } from "@/app/lib/axios";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function TokenProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    /*
        Check every call, if there is a status code 401 (Unauthorized) error,
        Request a token rotation from the backend, if it fails, route to the login page
    */

    const interceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const res = await apiRefresh.post(
              "/auth/refresh",
              {},
              { withCredentials: true },
            );

            const access_token = res.data.access_token;

            const inFiveMinutes = new Date(
              new Date().getTime() + 5 * 60 * 1000,
            );

            //TODO: Consider getting maxAge value from the token

            Cookies.set("access_token", access_token, {
              secure: true,
              sameSite: "strict",
              path: "/",
              expires: inFiveMinutes,
            });

            originalRequest.headers["Authorization"] = `Bearer ${access_token}`;

            return api(originalRequest);
          } catch (refreshError) {
            router.push("/login");
            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );

    return () => api.interceptors.response.eject(interceptor);
  }, [router]);

  return <>{children}</>;
}

export default TokenProvider;
