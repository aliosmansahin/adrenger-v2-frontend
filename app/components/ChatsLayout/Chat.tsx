"use client";

import { ChatPage, useChatPages } from "@/app/context/ChatPagesContext";
import MessagesWithInputContainer from "../MessagesLayout/MessagesWithInputContainer";
import ChatHeader from "./ChatHeader";
import PageHeader from "../Pages/PageHeader";
import UnfilledButton from "../utils/UnfilledButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import RoomInfoContainer from "../RoomInfoLayout/RoomInfoContainer";

function Chat({ roomId }: { roomId: number }) {
  const { chatPage, changePage } = useChatPages();

  return (
    <>
      <div
        className={`w-full h-full ${chatPage === ChatPage.Messages ? "flex flex-col" : "hidden"}`}
      >
        <ChatHeader roomId={roomId} />
        <MessagesWithInputContainer />
      </div>
      <div
        className={`w-full h-full ${chatPage === ChatPage.RoomInfo ? "flex flex-col" : "hidden"}`}
      >
        <PageHeader text="Room Info">
          <UnfilledButton
            className="px-2"
            onClick={() => changePage(ChatPage.Messages)}
          >
            <FontAwesomeIcon icon={faClose} />
          </UnfilledButton>
        </PageHeader>
        <RoomInfoContainer roomId={roomId} />
      </div>
      <div
        className={`w-full h-full ${chatPage === ChatPage.Users ? "flex flex-col" : "hidden"}`}
      >
        <PageHeader text="Users">
          <UnfilledButton
            className="px-2"
            onClick={() => changePage(ChatPage.Messages)}
          >
            <FontAwesomeIcon icon={faClose} />
          </UnfilledButton>
        </PageHeader>
      </div>
    </>
  );
}

export default Chat;
