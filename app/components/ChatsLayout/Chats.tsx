"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllChats } from "../../actions/chats";
import { Fragment } from "react/jsx-runtime";
import ChatCard, { ChatCardData } from "./ChatCard";
import { Activity, ReactNode } from "react";
import PaginationEnd from "../Pagination/PaginationEnd";
import ErrorMessage from "../utils/ErrorMessage";
import HintMessage from "../utils/HintMessage";
import ChatsHeader from "./ChatsHeader";

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
    initialPageParam: undefined,
    getNextPageParam: (lastPage: ChatCardData[]) => {
      if (lastPage.length < 5) return undefined; //Hardcoded limit, consider refactor as a constant

      return lastPage[lastPage.length - 1].roomId;
    },
  });

  let contentInside: ReactNode = null;

  const isDataEmpty =
    !chats || chats.pages.length === 0 || chats.pages[0].length === 0;

  if (isLoading) contentInside = <HintMessage message="Loading Chats..." />;
  else if (isDataEmpty && error && !isFetchingNextPage)
    contentInside = <ErrorMessage message={error.message} />;
  else if (isDataEmpty) contentInside = <HintMessage message="No Chats" />;
  else {
    contentInside = (
      <>
        <ChatsHeader />
        <div className="flex flex-col mb-4">
          {chats.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((chat: ChatCardData, index: number) => (
                <ChatCard {...chat} key={index} />
              ))}
            </Fragment>
          ))}
        </div>
        <PaginationEnd
          show={!isLoading}
          isFetchingNextPage={isFetchingNextPage}
          error={error?.message}
          hasNextPage={hasNextPage}
          onLoadMore={() => fetchNextPage()}
        />
      </>
    );
  }

  return (
    <div className="hidden sm:block sm:max-w-75 w-4/12 p-2">
      {contentInside}
    </div>
  );
}

export default Chats;
