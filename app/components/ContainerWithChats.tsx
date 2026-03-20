import { ReactNode } from "react";
import Chats from "./ChatsLayout/Chats";
import SuperLayout from "./SuperLayout";
import { MenuProvider } from "../context/MenuContext";

function ContainerWithChats({ children }: { children: ReactNode }) {
  return (
    <div className="flex not-sm:w-lvw not-sm:h-lvh">
      <MenuProvider>
        <Chats />
        <SuperLayout>{children}</SuperLayout>
      </MenuProvider>
    </div>
  );
}

export default ContainerWithChats;
