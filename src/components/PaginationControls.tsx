interface PaginationProps {
    currentPage: number;
    totalPages: number;
    goToPreviousPage: () => void;
    goToNextPage: () => void;
}

export const PaginationControls = ({
    currentPage,
    totalPages,
    goToPreviousPage,
    goToNextPage,
}: PaginationProps) => (
    <div className="flex justify-center items-center space-x-4 mt-6 mb-6">
        <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-brandBlue text-white rounded disabled:opacity-50"
        >
            Previous
        </button>

        <span className="text-gray-700 font-medium">
            Page {currentPage} of {totalPages}
        </span>

        <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-4 py-2 bg-brandBlue text-white rounded disabled:opacity-50"
        >
            Next
        </button>
    </div>
);
