"use client";

import { useRouter } from "next/navigation";
import OptionMenuOption from "../utils/OptionMenu/OptionMenuOption";
import OptionMenuWithButton from "../utils/OptionMenu/OptionMenuWithButton";
import { MenuObject } from "../utils/OptionMenu/OptionMenu";

function ChatsHeader() {
  const router = useRouter();

  return (
    <header className="text-[20px] h-13 px-3 border-b flex justify-between items-center">
      <h1>adrenger</h1>
      <OptionMenuWithButton>
        {(menuObject: MenuObject) => (
          <>
            <OptionMenuOption
              content="Create Room"
              onClick={() => {
                router.push("/create");
                menuObject.closeMenu();
              }}
            />
            <OptionMenuOption
              content="Sign Out"
              onClick={() => menuObject.closeMenu()}
            />
          </>
        )}
      </OptionMenuWithButton>
    </header>
  );
}

export default ChatsHeader;
