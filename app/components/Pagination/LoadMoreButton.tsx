import React from "react";
import Button from "../utils/Button";

interface ButtonProps {
  isFetchingNextPage?: boolean;
}

function LoadMoreButton({ isFetchingNextPage = true }: ButtonProps) {
  return (
    <Button disabled={isFetchingNextPage}>
      {isFetchingNextPage ? "Loading More Chats" : "LOAD MORE"}
    </Button>
  );
}

export default LoadMoreButton;
