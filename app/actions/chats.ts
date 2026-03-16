"use server";

import { api } from "@/app/lib/axios";
import { cookies } from "next/headers";

export async function fetchAllChats({pageParam}: {pageParam: any}) {
    const cookieStore = await cookies();
    
    const result = await api.get("/home", {
        headers: {
            Cookie: cookieStore.toString()
        },
        params: {
            cursor: pageParam,
        },
    });

    if(result.status !== 200) {
        console.log(`An error occurred: ${result.data}`);
        throw new Error(result.data);
    }
    
    return result.data;
}

export async function fetchRoom({roomId}: {roomId: number}) {
    const cookieStore = await cookies();

    const result = await api.get(`/rooms/${roomId}`, {
        headers: {
            Cookie: cookieStore.toString()
        }
    });

    if(result.status !== 200) {
        console.log(`An error occurred: ${result.data}`);
        throw new Error(result.data);
    }
    
    return result.data;
}