"use server";

import { api } from "@/app/lib/axios";
import { cookies } from "next/headers";

export async function fetchAllChats({pageParam}: {pageParam: any}) {
    const cookieStore = await cookies();
    
    const result = await api.get("/home", {headers: {Cookie: cookieStore.toString()}});

    console.log(result.data);

    if(result.status !== 200) {
        console.log(`An error occurred: ${result.data}`);
        throw new Error(result.data);
    }
    
    return result.data;
}