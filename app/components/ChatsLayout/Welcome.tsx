import FilledButton from "../utils/FilledButton";
import UnfilledLink from "../utils/UnfilledLink";
import ChatsHeader from "./ChatsHeader";

function Welcome() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="block sm:hidden">
        <ChatsHeader />
      </div>
      <main className="text-[18px] flex flex-col items-center justify-center gap-2 w-full h-full">
        <span className="font-bold italic">Welcome to adrenger</span>
        <span>Select a room and start chatting</span>
        <span>or create a room and invite people</span>
        <span>
          <UnfilledLink href="/create" className="px-3 mr-3">
            CREATE A ROOM
          </UnfilledLink>
          <FilledButton className="px-3">SETTINGS</FilledButton>
        </span>
      </main>
    </div>
  );
}

export default Welcome;
