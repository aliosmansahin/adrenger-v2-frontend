import MessagesWithInputContainer from "../MessagesLayout/MessagesWithInputContainer";
import ChatHeader from "./ChatHeader";

function Chat({ roomId }: { roomId: number }) {
  return (
    <div className="p-2 sm:max-w-150 sm:max-h-150 w-150 h-150 flex flex-col">
      <ChatHeader roomId={roomId} />
      <MessagesWithInputContainer />
    </div>
  );
}

export default Chat;
