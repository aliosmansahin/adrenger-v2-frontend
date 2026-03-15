"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllChats } from "../actions/chats";
import { Fragment } from "react/jsx-runtime";

function Chats() {
  const {
    isFetching,
    data: chats,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["chats"],
    queryFn: fetchAllChats,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.id,
  });

  if (error) return <div>{error?.message}</div>;

  if (isFetching) return <div>Loading Chats...</div>;

  if (!chats || chats.pages.length === 0) return <div>No Chats</div>;

  return (
    <div>
      {chats.pages.map((page, index) => (
        <Fragment key={index}>
          {page.map((chat: any, index: number) => (
            <div key={index}>{chat.id}</div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}

export default Chats;
