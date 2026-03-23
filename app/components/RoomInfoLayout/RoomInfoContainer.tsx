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
  else
    content = (
      <div className="flex flex-col gap-3 [&>span>span]:font-bold [&>span>span]:italic">
        <span>
          <span>Room Name:</span> {room.name}
        </span>
        <span>
          <span>Your Role:</span> {room.role}
        </span>
        <span>
          <span>Room creator:</span> {room.createdBy.nickname}
        </span>
        <span>
          <span>Create time:</span> {room.createdAt.toLocaleString()}
        </span>
      </div>
    );

  return <div className="p-3 text-[18px]">{content}</div>;
}

export default RoomInfoContainer;
