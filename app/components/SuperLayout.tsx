"use client";

import { ReactNode } from "react";
import { useMenu } from "../context/MenuContext";

function SuperLayout({ children }: { children: ReactNode }) {
  const { menuOpen } = useMenu();

  return (
    <div
      className={`${menuOpen ? "not-sm:hidden" : "not-sm:block"} p-2 sm:max-w-150 sm:max-h-150 sm:w-150 not-sm:w-full sm:h-150 not-sm:h-full`}
    >
      {children}
    </div>
  );
}

export default SuperLayout;
