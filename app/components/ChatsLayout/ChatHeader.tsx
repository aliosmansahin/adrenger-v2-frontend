"use client";

import { fetchRoom } from "@/app/actions/chats";
import { ChatCardData } from "./ChatCard";
import HintMessage from "../utils/HintMessage";
import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../utils/ErrorMessage";

interface Props {
  roomId: number;
}

function ChatHeader({ roomId }: Props) {
  const {
    data: room,
    isLoading,
    error,
  } = useQuery<ChatCardData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchRoom({ roomId }),
  });

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading room data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else content = <span>{room.name}</span>;

  return <header>{content}</header>;
}

export default ChatHeader;
