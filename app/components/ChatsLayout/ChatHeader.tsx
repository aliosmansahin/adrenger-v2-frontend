"use client";

import { deleteRoom, fetchRoom, leaveRoom } from "@/app/actions/chats";
import { ChatCardData } from "./ChatCard";
import HintMessage from "../utils/HintMessage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ErrorMessage from "../utils/ErrorMessage";
import OptionMenuWithButton from "../utils/OptionMenu/OptionMenuWithButton";
import OptionMenuOption from "../utils/OptionMenu/OptionMenuOption";
import { useRouter } from "next/navigation";

interface Props {
  roomId: number;
}

function ChatHeader({ roomId }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    data: room,
    isLoading,
    error,
  } = useQuery<ChatCardData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchRoom({ roomId }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
      queryClient.cancelQueries({ queryKey: ["chats", roomId] });

      router.replace("/");
    },
  });

  const leaveMutation = useMutation({
    mutationFn: leaveRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats"] });
      queryClient.cancelQueries({ queryKey: ["chats", roomId] });

      router.replace("/");
    },
  });

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading room data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else
    content = (
      <div className="w-full flex justify-between items-center">
        <span>{room.name}</span>
        <OptionMenuWithButton>
          {(menuObject) => (
            <>
              <OptionMenuOption
                content="Room Info"
                onClick={() => {
                  menuObject.closeMenu();
                }}
              />
              <OptionMenuOption
                content="Joined Users"
                onClick={() => {
                  menuObject.closeMenu();
                }}
              />
              <OptionMenuOption
                content="Leave Room"
                onClick={() => {
                  leaveMutation.mutate({ id: roomId });
                  menuObject.closeMenu();
                }}
              />
              <OptionMenuOption
                content="Delete Room"
                onClick={() => {
                  menuObject.closeMenu();
                  deleteMutation.mutate({ id: roomId });
                }}
              />
            </>
          )}
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
