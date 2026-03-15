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
    <>
      <LoadMoreButton />
    </>
  );
}

export default PaginationEnd;
