"use client";

import {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import OptionMenuOption from "./OptionMenuOption";

export interface OptionMenuHandle {
  openMenu: () => void;
}

interface Props {
  children?: ReactNode;
}

const OptionMenu = forwardRef<OptionMenuHandle, Props>((props, ref) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useImperativeHandle(ref, () => ({
    openMenu: () => setShow(true),
  }));

  if (!show) return null;

  return (
    <div className="absolute" ref={menuRef}>
      <span>Option Menu</span>
      <section>
        <OptionMenuOption />
        <OptionMenuOption />
      </section>
    </div>
  );
});

export default OptionMenu;
