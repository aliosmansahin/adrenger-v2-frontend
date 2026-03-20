"use client";

import { fetchJoinRoom } from "@/app/actions/chats";
import { useQuery } from "@tanstack/react-query";
import { ChatCardData } from "../ChatsLayout/ChatCard";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";
import FilledButton from "../utils/FilledButton";
import InputWithLabel from "../utils/InputWithLabel";
import { SubmitEvent } from "react";

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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading Room Data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else
    content = (
      <form onSubmit={handleSubmit}>
        <div className="w-full h-full flex flex-col gap-2">
          <span>
            <span className="italic">Join room: </span>
            {room.name}
          </span>
          {!room.hasPassword && (
            <InputWithLabel
              label="Room Password"
              placeholder="Enter room password"
              name="room-password"
              id="room-password-input"
              type="password"
            />
          )}
          <FilledButton type="submit">JOIN ROOM</FilledButton>
        </div>
      </form>
    );

  return <main className="w-full grow text-[18px] mt-3">{content}</main>;
}

export default JoinRoomForm;
