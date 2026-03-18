"use client";

import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnfilledButton from "../utils/UnfilledButton";
import OptionMenu, { OptionMenuHandle } from "../utils/OptionMenu/OptionMenu";
import { useRef } from "react";

function ChatsHeader() {
  const menuRef = useRef<OptionMenuHandle>(null);
  return (
    <header className="text-[20px] h-13 px-3 border-b flex justify-between items-center">
      <h1>adrenger</h1>
      <span className="relative">
        <UnfilledButton
          className="text-white"
          onClick={() => menuRef.current?.openMenu()}
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </UnfilledButton>
        <OptionMenu ref={menuRef} />
      </span>
    </header>
  );
}

export default ChatsHeader;
