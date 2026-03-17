import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnfilledButton from "../utils/UnfilledButton";

function ChatsHeader() {
  return (
    <header className="text-[20px] h-13 px-3 border-b flex justify-between items-center">
      <h1>adrenger</h1>
      <UnfilledButton className="text-white">
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </UnfilledButton>
    </header>
  );
}

export default ChatsHeader;
