"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllChats } from "../../actions/chats";
import { Fragment } from "react/jsx-runtime";
import ChatCard, { ChatCardData } from "./ChatCard";
import { Activity, ReactNode } from "react";
import PaginationEnd from "../Pagination/PaginationEnd";

function Chats() {
  const {
    isLoading,
    data: chats,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["chats"],
    queryFn: fetchAllChats,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.id,
  });

  let contentInside: ReactNode = null;

  if (error) contentInside = <div>{error?.message}</div>;
  else if (isLoading) contentInside = <div>Loading Chats...</div>;
  else if (!chats || chats.pages.length === 0 || chats.pages[0].length === 0)
    contentInside = <div>No Chats</div>;
  else {
    contentInside = chats.pages.map((page, index) => (
      <Fragment key={index}>
        {page.map((chat: ChatCardData, index: number) => (
          <ChatCard {...chat} key={index} />
        ))}
      </Fragment>
    ));
  }

  return (
    <div className="hidden sm:block sm:max-w-75 w-4/12 p-2">
      <div className="flex flex-col">{contentInside}</div>
      <PaginationEnd
        show={!isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        onLoadMore={() => fetchNextPage()}
      />
    </div>
  );
}

export default Chats;
