import Button from "../utils/Button";
import UnfilledLink from "../utils/UnfilledLink";

function Welcome() {
  return (
    <div className="text-[18px] flex flex-col items-center justify-center gap-2 sm:max-w-150 sm:max-h-150 w-150 h-150">
      <span className="font-bold italic">Welcome to adrenger</span>
      <span>Select a room and start chatting</span>
      <span>or create a room and invite people</span>
      <span>
        <UnfilledLink href="/create" className="px-3 mr-3">
          CREATE A ROOM
        </UnfilledLink>
        <Button className="px-3">SETTINGS</Button>
      </span>
    </div>
  );
}

export default Welcome;
