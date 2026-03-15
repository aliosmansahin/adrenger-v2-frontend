import ErrorMessage from "../utils/ErrorMessage";
import HintMessage from "../utils/HintMessage";
import LoadMoreButton from "./LoadMoreButton";

interface PaginationProps {
  show?: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
  hasNextPage: boolean;
  error?: string | undefined;
}

function PaginationEnd({
  show = true,
  isFetchingNextPage,
  onLoadMore,
  hasNextPage,
  error,
}: PaginationProps) {
  if (!show) return null;

  return (
    <div className="text-[17px]">
      {error && !isFetchingNextPage && (
        <div className="mb-2">
          <ErrorMessage message={error} />
        </div>
      )}
      {hasNextPage ? (
        <LoadMoreButton
          isFetchingNextPage={isFetchingNextPage}
          onClick={onLoadMore}
        />
      ) : (
        <HintMessage message="No More Chats" />
      )}
    </div>
  );
}

export default PaginationEnd;
