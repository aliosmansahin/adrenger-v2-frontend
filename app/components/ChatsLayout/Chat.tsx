import ChatHeader from "./ChatHeader";

function Chat({ roomId }: { roomId: number }) {
  return (
    <div>
      <ChatHeader roomId={roomId} />
      <div>Chat</div>
    </div>
  );
}

export default Chat;
