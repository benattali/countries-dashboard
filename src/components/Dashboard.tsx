import React, { useState } from "react";
import { useCountries } from "../hooks/useFetchCountries";
import { Grid } from "./Grid";

const ITEMS_PER_PAGE = 15;

export const Dashboard: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading countries...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );

  // Calculate pagination
  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCountries = countries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="px-4">
      {/* Grid of current page countries */}
      <Grid countries={currentCountries} />

      {/* Pagination controls */}
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
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-brandBlue text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
