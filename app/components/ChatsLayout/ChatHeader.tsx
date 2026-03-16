import { ChatCardData } from "./ChatCard";

interface Props {
  roomId: number;
}

async function ChatHeader({ roomId }: Props) {
  return (
    <header>
      <span>{roomId}</span>
    </header>
  );
}

export default ChatHeader;
