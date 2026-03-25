"use client";

import { editRoom, fetchRoom } from "@/app/actions/chats";
import { ChatData } from "../ChatsLayout/ChatHeader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import HintMessage from "../utils/HintMessage";
import ErrorMessage from "../utils/ErrorMessage";
import UnfilledButton from "../utils/UnfilledButton";
import { startTransition, SubmitEvent, useState } from "react";
import InputWithLabel from "../utils/InputWithLabel";

function RoomInfoContainer({ roomId }: { roomId: number }) {
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [editOpened, setEditOpened] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  const {
    data: room,
    isLoading,
    error,
  } = useQuery<ChatData, Error>({
    queryKey: ["chats", roomId],
    queryFn: () => fetchRoom({ roomId }),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: editRoom,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chats", roomId] });
      queryClient.invalidateQueries({ queryKey: ["chats"] }); //To invalidate chats menu

      setEditOpened(false);
    },
  });

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const roomName = formData.get("room-name") as string;
    const roomCurrentPassword = formData.get("room-current-password") as
      | string
      | null;
    const roomNewPassword = formData.get("room-new-password") as string | null;

    startTransition(() => {
      mutation.mutate({
        id: roomId,
        name: roomName,
        changePassword,
        currentPassword: roomCurrentPassword,
        newPassword: roomNewPassword,
      });
    });
  };

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading room data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else
    content = (
      <div className="flex flex-col gap-3 [&>span>span]:font-bold [&>span>span]:italic">
        {editOpened && room.role === "admin" ? (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex [&>button]:p-3 gap-2">
                {showSaveButton && (
                  <UnfilledButton
                    className="text-start"
                    type="submit"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Saving" : "Save"}
                  </UnfilledButton>
                )}
                <UnfilledButton
                  className="text-start"
                  type="reset"
                  onClick={() => setEditOpened(false)}
                >
                  Cancel
                </UnfilledButton>
              </div>
              <InputWithLabel
                label="Room Name"
                defaultValue={room.name}
                required
                placeholder="Enter a room name"
                id="room-name-input"
                name="room-name"
                className="mb-2"
                onChange={() => setShowSaveButton(true)}
              />
              <div className="border-b " />
              {changePassword ? (
                <>
                  <InputWithLabel
                    label="Current Password"
                    id="room-current-password-input"
                    name="room-current-password"
                    placeholder="Enter current password of the room"
                    onChange={() => setShowSaveButton(true)}
                  />
                  <InputWithLabel
                    label="New Password"
                    id="room-new-password-input"
                    name="room-new-password"
                    placeholder="Enter new password"
                    onChange={() => setShowSaveButton(true)}
                  />
                  <UnfilledButton
                    type="button"
                    onClick={() => setChangePassword(false)}
                  >
                    Cancel Password Changing
                  </UnfilledButton>
                </>
              ) : (
                <UnfilledButton
                  type="button"
                  onClick={() => setChangePassword(true)}
                >
                  Change Room Password
                </UnfilledButton>
              )}
              {mutation.isError && (
                <ErrorMessage message={mutation.error.message} />
              )}
            </form>
          </>
        ) : (
          <>
            {room.role === "admin" && (
              <UnfilledButton
                className="text-start p-3"
                onClick={() => {
                  setShowSaveButton(false);
                  setChangePassword(false);
                  setEditOpened(true);
                }}
              >
                Edit Room
              </UnfilledButton>
            )}
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
