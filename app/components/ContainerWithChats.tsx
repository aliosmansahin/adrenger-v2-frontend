import { ReactNode } from "react";
import Chats from "./ChatsLayout/Chats";
import SuperLayout from "./SuperLayout";

function ContainerWithChats({ children }: { children: ReactNode }) {
  return (
    <div className="flex">
      <Chats />
      <SuperLayout>{children}</SuperLayout>
    </div>
  );
}

export default ContainerWithChats;
