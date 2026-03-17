import MessagesWithInputContainer from "../MessagesLayout/MessagesWithInputContainer";
import ChatHeader from "./ChatHeader";

function Chat({ roomId }: { roomId: number }) {
  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader roomId={roomId} />
      <MessagesWithInputContainer />
    </div>
  );
}

export default Chat;
