"use server";

import { cookies } from "next/headers";
import { api } from "../lib/axios";

export async function fetchJoinedUsers({roomId, pageParam} : {roomId: number, pageParam: any}) { //TODO: Consider adding filter section
    const cookieStore = await cookies();

    const result = await api.get(`/rooms/${roomId}/joined-users`,
        {
            headers: {
                Cookie: cookieStore.toString(),
            },
            params: {
                cursor: pageParam,
            }
        }
    );

    if(result.status !== 200) {
        console.log(`An error occurred: ${result.data}`);
        throw new Error(result.data);
    }

    return result.data;
}