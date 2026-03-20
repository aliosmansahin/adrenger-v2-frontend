"use client";

import { fetchJoinRoom, joinRoom } from "@/app/actions/chats";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ChatCardData } from "../ChatsLayout/ChatCard";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";
import FilledButton from "../utils/FilledButton";
import InputWithLabel from "../utils/InputWithLabel";
import { startTransition, SubmitEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface JoinRoomData {
  id: number;
  name: number;
  createdBy: {
    nickname: string;
  };
  hasPassword: boolean;
}

function JoinRoomForm({ roomId }: { roomId: number }) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [buttonActive, setButtonActive] = useState(true);

  const {
    data: room,
    isLoading,
    error,
  } = useQuery<JoinRoomData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchJoinRoom({ roomId }),
  });

  const mutation = useMutation({
    mutationFn: joinRoom,
    onSuccess: (id: string) => {
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });

      router.replace(`/room/${id}`);
    },
    onError: () => {},
  });

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const roomPassword = formData.get("room-password") as string;

    startTransition(() => {
      mutation.mutate({ id: roomId, password: roomPassword });
    });
  };

  useEffect(() => {
    if (mutation.isPending) setButtonActive(false);
    else if (mutation.isError) setButtonActive(true);
  }, [mutation.isPending]);

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
          {room.hasPassword && (
            <InputWithLabel
              label="Room Password"
              placeholder="Enter room password"
              name="room-password"
              id="room-password-input"
              type="password"
            />
          )}
          <FilledButton type="submit" disabled={!buttonActive}>
            {buttonActive
              ? "JOIN ROOM"
              : mutation.isPending
                ? "Joining room"
                : "Redirecting to the room"}
          </FilledButton>
        </div>
      </form>
    );

  return <main className="w-full grow text-[18px] mt-3">{content}</main>;
}

export default JoinRoomForm;
