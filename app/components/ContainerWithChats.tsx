import { ReactNode } from "react";
import Chats from "./ChatsLayout/Chats";

function ContainerWithChats({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Chats />
      {children}
    </div>
  );
}

export default ContainerWithChats;
