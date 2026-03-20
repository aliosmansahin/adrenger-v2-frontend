"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UnfilledButton from "../utils/UnfilledButton";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useMenu } from "@/app/context/MenuContext";

function MenuToggle() {
  const { menuOpen, toggleMenu } = useMenu();

  return (
    <UnfilledButton className="px-2 text-[20px]" onClick={() => toggleMenu()}>
      {menuOpen ? (
        <FontAwesomeIcon icon={faClose} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </UnfilledButton>
  );
}

export default MenuToggle;
