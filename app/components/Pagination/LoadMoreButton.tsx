import React, { MouseEventHandler } from "react";
import FilledButton from "../utils/FilledButton";

interface ButtonProps {
  isFetchingNextPage?: boolean;
  onClick: MouseEventHandler;
}

function LoadMoreButton({ isFetchingNextPage = false, onClick }: ButtonProps) {
  return (
    <FilledButton
      disabled={isFetchingNextPage}
      className="w-full"
      onClick={onClick}
    >
      {isFetchingNextPage ? "Loading More Chats" : "LOAD MORE"}
    </FilledButton>
  );
}

export default LoadMoreButton;
