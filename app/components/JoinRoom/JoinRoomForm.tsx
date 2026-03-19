"use client";

import { fetchJoinRoom } from "@/app/actions/chats";
import { useQuery } from "@tanstack/react-query";
import { ChatCardData } from "../ChatsLayout/ChatCard";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";

export interface JoinRoomData {
  id: number;
  name: number;
  createdBy: {
    nickname: string;
  };
  hasPassword: boolean;
}

function JoinRoomForm({ roomId }: { roomId: number }) {
  const {
    data: room,
    isLoading,
    error,
  } = useQuery<JoinRoomData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchJoinRoom({ roomId }),
  });

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading Room Data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else content = <div className="w-full h-full"></div>;

  return <main className="w-full grow text-[18px]">{content}</main>;
}

export default JoinRoomForm;
