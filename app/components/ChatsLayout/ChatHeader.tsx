"use client";

import { fetchRoom } from "@/app/actions/chats";
import { ChatCardData } from "./ChatCard";
import HintMessage from "../utils/HintMessage";
import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../utils/ErrorMessage";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnfilledButton from "../utils/UnfilledButton";

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
  else
    content = (
      <div className="flex justify-between items-center">
        <span>{room.name}</span>
        <UnfilledButton className="text-white">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </UnfilledButton>
      </div>
    );

  return <header className="w-full p-3 text-[20px] border-b">{content}</header>;
}

export default ChatHeader;
