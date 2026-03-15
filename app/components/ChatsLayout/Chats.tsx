"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllChats } from "../../actions/chats";
import { Fragment } from "react/jsx-runtime";
import ChatCard, { ChatCardData } from "./ChatCard";

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
    <div className="hidden sm:block sm:max-w-75 w-4/12 p-2">
      <div className="flex flex-col">
        {chats.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((chat: ChatCardData, index: number) => (
              <ChatCard {...chat} key={index} />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Chats;
