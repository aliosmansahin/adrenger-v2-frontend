"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import FilledButton from "../utils/FilledButton";
import InputWithLabel from "../utils/InputWithLabel";
import { createRoom } from "@/app/actions/chats";
import { startTransition, SubmitEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function CreateRoomForm() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const [buttonActive, setButtonActive] = useState(true);

  const mutation = useMutation({
    mutationFn: createRoom,
    onSuccess: (id: string) => {
      queryClient.invalidateQueries({
        queryKey: ["chats"],
      });

      router.replace(`/room/${id}`);
    },
    onError: () => {},
  });

  useEffect(() => {
    if (mutation.isPending) setButtonActive(false);
  }, [mutation.isPending]);

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const roomName = formData.get("room-name") as string;
    const roomPassword = formData.get("room-password") as string;

    startTransition(() => {
      mutation.mutate({ name: roomName, password: roomPassword });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grow text-[18px] flex flex-col mt-3">
        <span>* Indicates optional field</span>
        <div className="flex flex-col border-b gap-3 pb-3 my-3">
          <InputWithLabel
            placeholder="Enter room name"
            name="room-name"
            id="room-name-input"
            label="Room Name"
            required
          />
          <InputWithLabel
            placeholder="Enter room password"
            name="room-password"
            id="room-password-input"
            label="Room Password*"
          />
        </div>
        <FilledButton type="submit" disabled={!buttonActive}>
          {buttonActive
            ? "CREATE ROOM"
            : mutation.isPending
              ? "Creating Room"
              : "Redirecting to the room"}
        </FilledButton>
      </div>
    </form>
  );
}

export default CreateRoomForm;
