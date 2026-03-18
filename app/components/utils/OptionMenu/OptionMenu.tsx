"use client";

import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import useClickOutside from "../useClickOutside";

export interface OptionMenuHandle {
  openMenu: () => void;
}

interface Props {
  children?: ReactNode;
  title?: string | undefined;
  onOpenChange: (show: boolean) => void;
}

const OptionMenu = forwardRef<OptionMenuHandle, Props>((props, ref) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    openMenu: () => setShow(true),
  }));

  useClickOutside(menuRef, () => setShow(false));

  useEffect(() => {
    props.onOpenChange(show);
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="absolute left-1/2 -translate-x-full top-10 bg-gray-400 rounded-md p-2 flex flex-col"
      ref={menuRef}
    >
      {props.title && <span className="border-b pb-2 mb-2">{props.title}</span>}
      <section>{props.children}</section>
    </div>
  );
});

export default OptionMenu;
