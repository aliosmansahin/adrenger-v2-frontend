import React, { MouseEventHandler } from "react";
import Button from "../utils/Button";

interface ButtonProps {
  isFetchingNextPage?: boolean;
  onClick: MouseEventHandler;
}

function LoadMoreButton({ isFetchingNextPage = false, onClick }: ButtonProps) {
  return (
    <Button disabled={isFetchingNextPage} className="w-full" onClick={onClick}>
      {isFetchingNextPage ? "Loading More Chats" : "LOAD MORE"}
    </Button>
  );
}

export default LoadMoreButton;
