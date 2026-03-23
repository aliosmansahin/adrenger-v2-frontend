"use client";

import { fetchRoom } from "@/app/actions/chats";
import { ChatData } from "../ChatsLayout/ChatHeader";
import { useQuery } from "@tanstack/react-query";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";
import UnfilledButton from "../utils/UnfilledButton";
import { useState } from "react";

function RoomInfoContainer({ roomId }: { roomId: number }) {
  const [editOpened, setEditOpened] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);

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
        {editOpened ? (
          <>
            <div className="flex [&>button]:p-3 gap-2">
              {showSaveButton && (
                <UnfilledButton
                  className="text-start"
                  onClick={() => setEditOpened(false)}
                >
                  Save
                </UnfilledButton>
              )}
              <UnfilledButton
                className="text-start"
                onClick={() => setEditOpened(false)}
              >
                Cancel
              </UnfilledButton>
            </div>
          </>
        ) : (
          <>
            <UnfilledButton
              className="text-start p-3"
              onClick={() => setEditOpened(true)}
            >
              Edit Room
            </UnfilledButton>
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
          </>
        )}
      </div>
    );

  return <div className="p-3 text-[18px]">{content}</div>;
}

export default RoomInfoContainer;
