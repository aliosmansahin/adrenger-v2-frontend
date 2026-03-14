"use server";

import { api } from "@/app/lib/axios";

export async function fetchAllChats({pageParam}: {pageParam: any}) {
    const result = await api.get("/home");

    console.log(result);

    if(result.status !== 200) {
        console.log(`An error occurred: ${result.data}`);
        throw new Error(result.data);
    }
    
    return result.data;
}