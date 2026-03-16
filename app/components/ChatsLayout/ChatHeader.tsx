interface Props {
  roomName: string;
}

function ChatHeader({ roomName }: Props) {
  return (
    <header>
      <span>{roomName}</span>
    </header>
  );
}

export default ChatHeader;
