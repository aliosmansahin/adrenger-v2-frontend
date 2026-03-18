"use client";

import { fetchRoom } from "@/app/actions/chats";
import { ChatCardData } from "./ChatCard";
import HintMessage from "../utils/HintMessage";
import { useQuery } from "@tanstack/react-query";
import ErrorMessage from "../utils/ErrorMessage";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnfilledButton from "../utils/UnfilledButton";
import OptionMenuWithButton from "../utils/OptionMenu/OptionMenuWithButton";
import OptionMenuOption from "../utils/OptionMenu/OptionMenuOption";

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
      <div className="w-full flex justify-between items-center">
        <span>{room.name}</span>
        <OptionMenuWithButton>
          <OptionMenuOption content="Room Info" />
          <OptionMenuOption content="Joined Users" />
          <OptionMenuOption content="Leave Room" />
        </OptionMenuWithButton>
      </div>
    );

  return (
    <header className="w-full h-13 px-3 flex justify-center items-center text-[20px] border-b">
      {content}
    </header>
  );
}

export default ChatHeader;
