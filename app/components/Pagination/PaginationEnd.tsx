import LoadMoreButton from "./LoadMoreButton";

interface PaginationProps {
  show?: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
  hasNextPage: boolean;
}

function PaginationEnd({
  show = true,
  isFetchingNextPage,
  onLoadMore,
  hasNextPage,
}: PaginationProps) {
  if (!show) return null;

  return (
    <div className="text-center">
      {hasNextPage ? (
        <LoadMoreButton />
      ) : (
        <span className="italic text-gray-400">No More Chats</span>
      )}
    </div>
  );
}

export default PaginationEnd;
