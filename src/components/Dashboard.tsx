import React, { useState, useMemo } from "react";
import { useCountries } from "../hooks/useFetchCountries";
import { Grid } from "./Grid";
import { SearchBar } from "./SearchBar";
import { PaginationControls } from "./PaginationControls";

const ITEMS_PER_PAGE = 15;

export const Dashboard: React.FC = () => {
  const { countries, loading, error } = useCountries();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [countries, searchTerm]
  );

  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCountries = filteredCountries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset page on search
  };

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

  return (
    <div className="px-4">
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <Grid countries={currentCountries} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
};
