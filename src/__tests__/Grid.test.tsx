import { render, screen } from "@testing-library/react";
import { Grid } from "../components/Grid";
import { mockCountries } from "../__mocks__/countries";

describe("Grid Component", () => {
    test("renders the correct number of country cards", () => {
        render(<Grid countries={mockCountries} />);
        const countryNames = screen.getAllByRole("heading", { level: 2 });
        expect(countryNames).toHaveLength(mockCountries.length);
    });

    test("renders country names correctly", () => {
        render(<Grid countries={mockCountries} />);
        mockCountries.forEach((country) => {
            expect(screen.getByText(country.name)).toBeInTheDocument();
        });
    });

    test("renders capital and population for each country", () => {
        render(<Grid countries={mockCountries} />);
        mockCountries.forEach((country) => {
            expect(screen.getByText(new RegExp(country.capital, "i"))).toBeInTheDocument();
            expect(screen.getByText(new RegExp(country.population.toLocaleString(), "i"))).toBeInTheDocument();
        });
    });

    test("renders the flag image with correct alt text and src", () => {
        render(<Grid countries={mockCountries} />);
        mockCountries.forEach((country) => {
            const img = screen.getByAltText(`Flag of ${country.name}`);
            expect(img).toHaveAttribute("src", country.flag);
        });
    });

    test("renders correctly when given an empty array", () => {
        render(<Grid countries={[]} />);
        const countryNames = screen.queryAllByRole("heading", { level: 2 });
        expect(countryNames).toHaveLength(0);
    });

    test("renders correctly with only one country", () => {
        const singleCountry = [mockCountries[0]];
        render(<Grid countries={singleCountry} />);
        expect(screen.getByText(singleCountry[0].name)).toBeInTheDocument();
    });
});
