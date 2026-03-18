import FilledButton from "../utils/FilledButton";
import UnfilledLink from "../utils/UnfilledLink";

function Welcome() {
  return (
    <div className="text-[18px] flex flex-col items-center justify-center gap-2 w-full h-full">
      <span className="font-bold italic">Welcome to adrenger</span>
      <span>Select a room and start chatting</span>
      <span>or create a room and invite people</span>
      <span>
        <UnfilledLink href="/create" className="px-3 mr-3">
          CREATE A ROOM
        </UnfilledLink>
        <FilledButton className="px-3">SETTINGS</FilledButton>
      </span>
    </div>
  );
}

export default Welcome;
