import { memo } from "react";
// icons
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { currentPage, totalItems, itemsPerPage, onPageChange } = props;

  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];

    const maxVisiblePages = 4;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pageCount, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="py-3 flex flex-col sm:flex-row items-center justify-between">
      <div className="mb-4 sm:mb-0">
        <p className="text-sm text-gray-700 dark:text-neutral-300">
          Showing{" "}
          <span className="font-semibold">
            {(currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {Math.min(currentPage * itemsPerPage, totalItems)}
          </span>{" "}
          of <span className="font-semibold">{totalItems}</span> results
        </p>
      </div>
      <div>
        <div className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
          {/* previous button */}
          <button
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-neutral-300 disabled:text-neutral-700 disabled:cursor-not-allowed"
          >
            <PiCaretLeftBold fontSize={"1rem"} />
          </button>
          {/* page numbers */}
          {getPageNumbers().map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => onPageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                currentPage === page
                  ? "z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          {/* next button */}
          <button
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === pageCount}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-neutral-300 disabled:text-neutral-700 disabled:cursor-not-allowed"
          >
            <PiCaretRightBold fontSize={"1rem"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Pagination);
