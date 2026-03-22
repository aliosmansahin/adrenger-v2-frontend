"use client";

import { fetchRoom } from "@/app/actions/chats";
import { ChatData } from "../ChatsLayout/ChatHeader";
import { useQuery } from "@tanstack/react-query";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";

function RoomInfoContainer({ roomId }: { roomId: number }) {
  const {
    data: room,
    isLoading,
    error,
  } = useQuery<ChatData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchRoom({ roomId }),
  });

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading room data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else content = <div>RoomInfoContainer</div>;

  return <div>{content}</div>;
}

export default RoomInfoContainer;
