export interface ChatCardData {
  roomId: number;
  role: "admin" | "member";
  name: string;
  lastMessage?: string | undefined; //Consider converting message with date
}

function ChatCard({ roomId, role, name, lastMessage }: ChatCardData) {
  return (
    <div className="not-last:border-b not-last:pb-2 not-first:pt-2">
      <div className="overflow-hidden text-ellipsis">{name}</div>
      <div className="overflow-hidden text-ellipsis">
        {lastMessage && <span>{lastMessage}</span>}
      </div>
    </div>
  );
}

export default ChatCard;
