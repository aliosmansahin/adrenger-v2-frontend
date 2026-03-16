import ChatHeader from "./ChatHeader";

function Chat({ roomId }: { roomId: number }) {
  return (
    <div className="p-2 sm:max-w-150 sm:max-h-150 w-150 h-150">
      <ChatHeader roomId={roomId} />
      <div>Chat</div>
    </div>
  );
}

export default Chat;
