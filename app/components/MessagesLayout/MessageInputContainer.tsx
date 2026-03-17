import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FilledButton from "../utils/FilledButton";
import MessageInput from "./MessageInput";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function MessageInputContainer() {
  return (
    <form action="">
      <div className="flex gap-2 pt-2 text-[18px]">
        <MessageInput />
        <FilledButton className="grow flex justify-center items-center min-w-12.5">
          <FontAwesomeIcon icon={faPaperPlane} />
        </FilledButton>
      </div>
    </form>
  );
}

export default MessageInputContainer;
