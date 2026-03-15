export interface ChatCardData {
  roomId: number;
  role: "admin" | "member";
  name: string;
  lastMessage?: string | undefined; //Consider converting message with date
}

function ChatCard({ roomId, role, name, lastMessage }: ChatCardData) {
  return <div>{name}</div>;
}

export default ChatCard;
