"use client";

import { fetchJoinedUsers } from "@/app/actions/users";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Fragment, ReactNode } from "react";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";
import { ChatData } from "../ChatsLayout/ChatHeader";
import { fetchRoom } from "@/app/actions/chats";
import OptionMenuWithButton from "../utils/OptionMenu/OptionMenuWithButton";
import OptionMenuOption from "../utils/OptionMenu/OptionMenuOption";
import { MenuObject } from "../utils/OptionMenu/OptionMenu";

export interface User {
  roomId: number;
  joinedAt: Date;
  role: "admin" | "member";
  user: {
    userId: number;
    nickname: string;
  };
}

function JoinedUsersContainer({ roomId }: { roomId: number }) {
  const roomQuery = useQuery<ChatData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchRoom({ roomId }),
  });

  const {
    isLoading,
    data: users,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
    error,
  } = useInfiniteQuery<User[], Error>({
    queryKey: ["chats", roomId, "users"],
    queryFn: ({ pageParam }) => fetchJoinedUsers({ roomId, pageParam }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: User[]) => {
      if (lastPage.length < 10) return undefined;

      return lastPage[lastPage.length - 1].user.userId;
    },
  });

  let contentInside: ReactNode = null;

  /* Admin data check */
  if (roomQuery.isLoading || !roomQuery.data)
    contentInside = <HintMessage message="Loading room data" />;
  else if (roomQuery.error)
    contentInside = <ErrorMessage message={roomQuery.error.message} />;
  else {
    /* Users data check */
    const isDataEmpty =
      !users || users.pages.length === 0 || users.pages[0].length === 0;

    if (isLoading) contentInside = <HintMessage message="Loading Chats..." />;
    else if (isDataEmpty && error && !isFetchingNextPage)
      contentInside = <ErrorMessage message={error.message} />;
    else if (isDataEmpty) contentInside = <HintMessage message="No Chats" />;
    else {
      contentInside = (
        <div className="flex flex-col gap-1">
          {users.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((user, index) => (
                <div
                  key={index}
                  className="px-5 py-2 bg-gray-600 rounded-4xl flex justify-between"
                >
                  <span>{user.user.nickname}</span>
                  <span>
                    <span className="text-red-400 pr-3">{user.role}</span>
                    <OptionMenuWithButton>
                      {(menuObject: MenuObject) => (
                        <>
                          <OptionMenuOption
                            content="Kick"
                            onClick={() => {
                              menuObject.closeMenu();
                            }}
                          />
                          <OptionMenuOption
                            content="Promote to admin"
                            onClick={() => {
                              menuObject.closeMenu();
                            }}
                          />
                        </>
                      )}
                    </OptionMenuWithButton>
                  </span>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      );
    }
  }

  return <div className="p-3 text-[16px]">{contentInside}</div>;
}

export default JoinedUsersContainer;
