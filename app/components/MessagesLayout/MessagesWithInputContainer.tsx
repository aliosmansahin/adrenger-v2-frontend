import MessageInputContainer from "./MessageInputContainer";
import MessagesContainer from "./MessagesContainer";

function MessagesWithInputContainer() {
  return (
    <div className="grow flex flex-col">
      <MessagesContainer />
      <div className="border-b" />
      <MessageInputContainer />
    </div>
  );
}

export default MessagesWithInputContainer;
