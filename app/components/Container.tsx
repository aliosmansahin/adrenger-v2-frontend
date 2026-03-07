import { ReactNode } from "react";
import Chats from "./Chats";

function Container({ children }: { children: ReactNode }) {
  return (
    <div>
      <Chats />
      {children}
    </div>
  );
}

export default Container;
