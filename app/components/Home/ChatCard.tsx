export interface ChatCardData {
  roomId: number;
  role: "admin" | "member";
  name: string;
  lastMessage?: string | undefined; //Consider converting message with date
}

function ChatCard({ roomId, role, name, lastMessage }: ChatCardData) {
  return (
    <div>
      <div>{name}</div>
      <div>{lastMessage && <span>{lastMessage}</span>}</div>
    </div>
  );
}

export default ChatCard;
