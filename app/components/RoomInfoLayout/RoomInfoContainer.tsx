"use client";

import { fetchRoom } from "@/app/actions/chats";
import { ChatData } from "../ChatsLayout/ChatHeader";
import { useQuery } from "@tanstack/react-query";
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

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const roomName = formData.get("room-name");
    const roomCurrentPassword = formData.get("room-current-password");
    const roomNewPassword = formData.get("room-new-password");

    console.log(roomName, roomCurrentPassword, roomNewPassword);

    startTransition(() => {
      //TODO: Add server action here
    });
  };

  let content = null;

  if (isLoading || !room) content = <HintMessage message="Loading room data" />;
  else if (error) content = <ErrorMessage message={error.message} />;
  else
    content = (
      <div className="flex flex-col gap-3 [&>span>span]:font-bold [&>span>span]:italic">
        {editOpened ? (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex [&>button]:p-3 gap-2">
                {showSaveButton && (
                  <UnfilledButton className="text-start" type="submit">
                    Save
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
            </form>
          </>
        ) : (
          <>
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
