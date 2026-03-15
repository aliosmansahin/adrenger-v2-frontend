export interface ChatCardData {
  roomId: number;
  role: "admin" | "member";
  name: string;
  lastMessage?: string | undefined; //Consider converting message with date
}

function ChatCard({
  roomId,
  role,
  name,
  lastMessage = "testsdlkaskdsadksaşldkaslşsskjjsjkjdsajksdajkdsakjlsdakjlsdajksdlajklsdajksldajksldajksdajkdsakjlsdajdlksajlkdasklak",
}: ChatCardData) {
  return (
    <div>
      <div className="overflow-hidden text-ellipsis">{name}</div>
      <div className="overflow-hidden text-ellipsis">
        {lastMessage && <span>{lastMessage}</span>}
      </div>
    </div>
  );
}

export default ChatCard;
