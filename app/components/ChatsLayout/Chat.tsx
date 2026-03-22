"use client";

import { ChatPage, useChatPages } from "@/app/context/ChatPagesContext";
import MessagesWithInputContainer from "../MessagesLayout/MessagesWithInputContainer";
import ChatHeader from "./ChatHeader";
import PageHeader from "../Pages/PageHeader";

function Chat({ roomId }: { roomId: number }) {
  const { chatPage } = useChatPages();

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
        <PageHeader text="Room Info" />
      </div>
      <div
        className={`w-full h-full ${chatPage === ChatPage.Users ? "flex flex-col" : "hidden"}`}
      >
        <PageHeader text="Users" />
      </div>
    </>
  );
}

export default Chat;
