interface PaginationControlsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const getPageNumbers = () => {
        const pages: number[] = [];
        const windowSize = 5;

        let start = Math.max(1, currentPage - Math.floor(windowSize / 2));
        let end = Math.min(totalPages, start + windowSize - 1);

        if (end - start < windowSize - 1) {
            start = Math.max(1, end - windowSize + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="flex justify-center items-center flex-wrap gap-2 mt-6 mb-6">
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-brandBlue text-white rounded disabled:opacity-50"
            >
                Prev
            </button>

            {currentPage > 5 && (
                <button
                    onClick={() => onPageChange(Math.max(1, currentPage - 5))}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                >
                    « 5
                </button>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded transition ${page === currentPage
                        ? "bg-brandBlue text-white font-semibold"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                >
                    {page}
                </button>
            ))}

            {currentPage + 5 <= totalPages && (
                <button
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 5))}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
                >
                    5 »
                </button>
            )}

            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-brandBlue text-white rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};
