import { useState, useMemo } from "react";
import { useCountries } from "../hooks/useFetchCountries";
import { Grid } from "./Grid";
import { SearchBar } from "./SearchBar";
import { PaginationControls } from "./PaginationControls";
import { SortDropdown, SortOption } from "./SortControls";
import { Loading } from "./Loading";
import { Error } from "./Error";

const ITEMS_PER_PAGE = 15;

export const Dashboard = () => {
  const { countries, loading, error } = useCountries();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("name-asc");

  const filteredCountries = useMemo(
    () =>
      countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [countries, searchTerm]
  );

  const sortedCountries = useMemo(() => {
    const sorted = [...filteredCountries];
    switch (sortOption) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "population-asc":
        sorted.sort((a, b) => a.population - b.population);
        break;
      case "population-desc":
        sorted.sort((a, b) => b.population - a.population);
        break;
    }
    return sorted;
  }, [filteredCountries, sortOption]);

  const totalPages = Math.ceil(sortedCountries.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCountries = sortedCountries.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // reset page on search
  };

  const handleSortChange = (value: SortOption) => {
    setSortOption(value);
    setCurrentPage(1); // reset page on search
  };

  if (loading)
    return <Loading />

  if (error)
    return <Error error={error} />

  return (
    <div className="px-4">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-4">
        <div className="w-full md:w-1/2">
          <SearchBar value={searchTerm} onChange={handleSearchChange} />
        </div>
        <div className="w-full md:w-1/2">
          <SortDropdown value={sortOption} onChange={handleSortChange} />
        </div>
      </div>

      <div className="flex-grow">
        <Grid countries={currentCountries} />
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </div>
  );
};
