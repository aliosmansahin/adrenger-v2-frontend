"use client";

import { MouseEventHandler } from "react";

interface Props {
  content: string;
  onClick: MouseEventHandler;
}

function OptionMenuOption({ content, onClick }: Props) {
  return (
    <button
      className="w-full text-start not-last:border-b not-last:border-gray-300 hover:bg-gray-500 p-2 hover:cursor-pointer active:bg-gray-600"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default OptionMenuOption;
