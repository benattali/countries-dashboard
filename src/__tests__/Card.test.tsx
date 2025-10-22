import { render, screen } from "@testing-library/react";
import { Card } from "../components/Card";
import { mockCountries } from "../__mocks__/countries";

const mockCountry = mockCountries[0]

describe("Card Component", () => {
    test("renders the country name", () => {
        render(<Card {...mockCountry} />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockCountry.name);
    });

    test("renders the capital", () => {
        render(<Card {...mockCountry} />);
        expect(screen.getByText(new RegExp(mockCountry.capital, "i"))).toBeInTheDocument();
    });

    test("renders the population formatted with commas", () => {
        render(<Card {...mockCountry} />);
        const populationText = mockCountry.population.toLocaleString();
        expect(screen.getByText(new RegExp(populationText, "i"))).toBeInTheDocument();
    });

    test("renders the flag with correct src and alt", () => {
        render(<Card {...mockCountry} />);
        const img = screen.getByAltText(`Flag of ${mockCountry.name}`);
        expect(img).toHaveAttribute("src", mockCountry.flag);
    });

    test("renders all elements correctly together", () => {
        render(<Card {...mockCountry} />);
        expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(mockCountry.name);
        expect(screen.getByText(`Capital: ${mockCountry.capital}`)).toBeInTheDocument();
        expect(
            screen.getByText(`Population: ${mockCountry.population.toLocaleString()}`)
        ).toBeInTheDocument();
        expect(screen.getByAltText(`Flag of ${mockCountry.name}`)).toHaveAttribute(
            "src",
            mockCountry.flag
        );
    });
});
