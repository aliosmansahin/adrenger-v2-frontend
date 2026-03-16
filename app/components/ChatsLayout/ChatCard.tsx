import Link from "next/link";
import { useParams } from "next/navigation";

export interface ChatCardData {
  roomId: number;
  role: "admin" | "member";
  name: string;
  lastMessage?: string | undefined; //Consider converting message with date
}

function ChatCard({ roomId, role, name, lastMessage }: ChatCardData) {
  const { slug } = useParams();

  const cardContent = (
    <div className="not-last:border-b not-last:pb-2 not-first:pt-2">
      <div className="overflow-hidden text-ellipsis">{name}</div>
      <div className="overflow-hidden text-ellipsis">
        {lastMessage && <span>{lastMessage}</span>}
      </div>
    </div>
  );

  if (roomId.toString() === slug) {
    return (
      <span className="bg-gray-600 rounded-4xl px-3 py-2">{cardContent}</span>
    );
  } else {
    return (
      <Link
        href={`/room/${roomId}`}
        className="hover:bg-gray-800 active:bg-gray-700 px-3 py-2 rounded-4xl"
      >
        {cardContent}
      </Link>
    );
  }
}

export default ChatCard;
