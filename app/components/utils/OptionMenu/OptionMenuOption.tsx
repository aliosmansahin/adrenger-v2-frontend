"use client";

import { MouseEventHandler } from "react";

interface Props {
  content: string;
  onClick: MouseEventHandler;
}

function OptionMenuOption({ content, onClick }: Props) {
  return (
    <div className="w-full p-2 not-last:border-b not-last:border-gray-300">
      <button onClick={onClick}>{content}</button>
    </div>
  );
}

export default OptionMenuOption;
