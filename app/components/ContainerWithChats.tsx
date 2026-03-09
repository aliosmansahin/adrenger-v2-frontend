import { ReactNode } from "react";
import Chats from "./Chats";

function ContainerWithChats({ children }: { children: ReactNode }) {
  return (
    <div>
      <Chats />
      {children}
    </div>
  );
}

export default ContainerWithChats;
