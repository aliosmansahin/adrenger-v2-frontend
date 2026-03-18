import OptionMenuOption from "../utils/OptionMenu/OptionMenuOption";
import OptionMenuWithButton from "../utils/OptionMenu/OptionMenuWithButton";

function ChatsHeader() {
  return (
    <header className="text-[20px] h-13 px-3 border-b flex justify-between items-center">
      <h1>adrenger</h1>
      <OptionMenuWithButton>
        <OptionMenuOption content="Create Room" />
        <OptionMenuOption content="Sign Out" />
      </OptionMenuWithButton>
    </header>
  );
}

export default ChatsHeader;
