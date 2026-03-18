"use server";

import { api } from "@/app/lib/axios";
import { cookies } from "next/headers";

export async function fetchAllChats({pageParam}: {pageParam: any}) {
    const cookieStore = await cookies();

    console.log("fetch all chats");
    
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

    console.log(result.data);
    
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

export async function createRoom({name, password} : {name: string, password?: string}) {
    const rawFormData = {
        name,
        password,
    };

    const cookieStore = await cookies();

    const result = await api.post(`/rooms`,
        rawFormData,
        {
            headers: {
                Cookie: cookieStore.toString()
            }
        }
    );

    if(result.status !== 201) {
        console.log(`An error occurred: ${result.data}`);
        throw new Error(result.data);
    }

    const roomData = result.data;

    return roomData.id;
}