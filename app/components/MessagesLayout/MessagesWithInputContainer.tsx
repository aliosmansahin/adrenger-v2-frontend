import MessageInput from "./MessageInput";
import Messages from "./Messages";

function MessagesWithInputContainer() {
  return (
    <div className="grow p-2 flex flex-col">
      <Messages />
      <div className="border-b" />
      <MessageInput />
    </div>
  );
}

export default MessagesWithInputContainer;
