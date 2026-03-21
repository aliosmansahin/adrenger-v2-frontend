"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllChats } from "../../actions/chats";
import { Fragment } from "react/jsx-runtime";
import ChatCard, { ChatCardData } from "./ChatCard";
import { ReactNode } from "react";
import PaginationEnd from "../Pagination/PaginationEnd";
import ErrorMessage from "../utils/ErrorMessage";
import HintMessage from "../utils/HintMessage";
import ChatsHeader from "./ChatsHeader";
import { useMenu } from "@/app/context/MenuContext";

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

  const { menuOpen } = useMenu();

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
        <div className="flex flex-col mt-3 pb-3 gap-1 overflow-auto">
          {chats.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((chat: ChatCardData, index: number) => (
                <ChatCard {...chat} key={index} />
              ))}
            </Fragment>
          ))}
          <PaginationEnd
            show={!isLoading}
            isFetchingNextPage={isFetchingNextPage}
            error={error?.message}
            hasNextPage={hasNextPage}
            onLoadMore={() => fetchNextPage()}
          />
        </div>
      </>
    );
  }

  return (
    <div
      className={`${menuOpen ? "not-sm:flex not-sm:flex-col" : "not-sm:hidden"} sm:flex sm:flex-col sm:max-w-75 p-2 sm:w-4/12 not-sm:w-full sm:max-h-150`}
    >
      <div>
        <ChatsHeader />
      </div>
      {contentInside}
    </div>
  );
}

export default Chats;
