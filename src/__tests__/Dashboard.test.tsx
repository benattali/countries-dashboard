import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dashboard } from "../components/Dashboard";
import { useCountries } from "../hooks/useFetchCountries";
import { mockCountries } from "../__mocks__/countries";

jest.mock("../hooks/useFetchCountries");

const mockedUseCountries = useCountries as jest.Mock;

describe("Dashboard Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("renders loading state", () => {
        mockedUseCountries.mockReturnValue({ countries: [], loading: true, error: null });
        render(<Dashboard />);
        expect(screen.getByText(/loading countries/i)).toBeInTheDocument();
    });

    test("renders error state", () => {
        mockedUseCountries.mockReturnValue({ countries: [], loading: false, error: "Failed to fetch" });
        render(<Dashboard />);
        expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument();
    });

    test("renders grid with country cards", () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);
        mockCountries.slice(0, 15).forEach((country) => {
            expect(screen.getByText(country.name)).toBeInTheDocument();
            expect(screen.getByText(new RegExp(country.capital, "i"))).toBeInTheDocument();
            expect(screen.getByText((content) => content.includes(country.population.toLocaleString()))).toBeInTheDocument();
        });
    });

    test("filters countries by search term", async () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);

        const input = screen.getByPlaceholderText(/search by country name/i);
        await userEvent.type(input, "Israel");

        expect(screen.getByText("Israel")).toBeInTheDocument();
        expect(screen.queryByText("USA")).not.toBeInTheDocument();
    });

    test("sorts countries by population descending", async () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);

        const select = screen.getByRole("combobox");
        await userEvent.selectOptions(select, "population-desc");

        const cards = screen.getAllByRole("heading", { level: 2 });
        const populations = cards.map((card) =>
            mockCountries.find(c => c.name === card.textContent)!.population
        );
        const sorted = [...populations].sort((a, b) => b - a);
        expect(populations).toEqual(sorted);
    });

    test("sorts countries by name ascending", async () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);

        const select = screen.getByRole("combobox");
        await userEvent.selectOptions(select, "name-asc");

        const cards = screen.getAllByRole("heading", { level: 2 });
        const names = cards.map((card) => card.textContent);
        const sorted = [...names].sort();
        expect(names).toEqual(sorted);
    });

    test("pagination displays correct number of items per page", () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);
        const cards = screen.getAllByRole("heading", { level: 2 });
        expect(cards).toHaveLength(Math.min(mockCountries.length, 15));
    });

    test("resets to first page when searching", async () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);

        const input = screen.getByPlaceholderText(/search by country name/i);
        await userEvent.type(input, "Canada");

        const firstPageButton = screen.getByRole("button", { name: "1" });
        expect(firstPageButton).toHaveClass("bg-brandBlue"); // currentPage = 1
    });

    test("resets to first page when sorting", async () => {
        mockedUseCountries.mockReturnValue({ countries: mockCountries, loading: false, error: null });
        render(<Dashboard />);

        const select = screen.getByRole("combobox");
        await userEvent.selectOptions(select, "population-desc");

        const firstPageButton = screen.getByRole("button", { name: "1" });
        expect(firstPageButton).toHaveClass("bg-brandBlue"); // currentPage = 1
    });
});
