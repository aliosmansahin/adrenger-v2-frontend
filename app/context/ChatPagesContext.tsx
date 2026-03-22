"use client";

import { createContext, ReactNode, useContext, useState } from "react";

enum ChatPage {
  Messages,
  RoomInfo,
  Users,
}

interface ChatPagesContextType {
  chatPage: ChatPage;
  changePage: (chatPage: ChatPage) => void;
}

const ChatPagesContext = createContext<ChatPagesContextType | null>(null);

export function ChatPagesProvider({ children }: { children: ReactNode }) {
  const [chatPage, setChatPage] = useState<ChatPage>(ChatPage.Messages);

  const changePage = (chatPage: ChatPage) => {
    setChatPage(chatPage);
  };

  return (
    <ChatPagesContext.Provider value={{ chatPage, changePage }}>
      {children}
    </ChatPagesContext.Provider>
  );
}

export function useChatPages() {
  const ctx = useContext(ChatPagesContext);
  if (!ctx)
    throw new Error("useChatPages can only be used in ChatPagesProvider");
  return ctx;
}
