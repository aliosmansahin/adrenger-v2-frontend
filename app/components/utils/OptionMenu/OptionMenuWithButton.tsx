"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnfilledButton from "../UnfilledButton";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import OptionMenu, { OptionMenuHandle } from "./OptionMenu";
import { ReactNode, useEffect, useRef, useState } from "react";

function OptionMenuWithButton({
  children,
  buttonContent,
}: {
  children: ReactNode;
  buttonContent?: ReactNode | undefined;
}) {
  const menuRef = useRef<OptionMenuHandle>(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative">
      <UnfilledButton
        className={`${isOpen ? "" : "text-white"}`}
        onClick={() => menuRef.current?.openMenu()}
      >
        {buttonContent ? (
          <>{buttonContent}</>
        ) : (
          <FontAwesomeIcon icon={faEllipsisVertical} />
        )}
      </UnfilledButton>
      <OptionMenu ref={menuRef} onOpenChange={(show) => setIsOpen(show)}>
        {children}
      </OptionMenu>
    </span>
  );
}

export default OptionMenuWithButton;
