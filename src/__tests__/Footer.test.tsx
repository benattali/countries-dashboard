import { render, screen } from "@testing-library/react";
import { Footer } from "../components/Footer";

describe("Footer Component", () => {
    test("renders copyright text with current year", () => {
        render(<Footer />);
        const currentYear = new Date().getFullYear();
        expect(
            screen.getByText(new RegExp(`Countries Dashboard .* ${currentYear}`, "i"))
        ).toBeInTheDocument();
    });

    test("renders creator name", () => {
        render(<Footer />);
        expect(screen.getByText(/Ben Attali/i)).toBeInTheDocument();
    });

    test("renders REST Countries API link", () => {
        render(<Footer />);
        const link = screen.getByRole("link", { name: /REST Countries API/i });
        expect(link).toHaveAttribute("href", "https://restcountries.com/");
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });

    test("renders social links", () => {
        render(<Footer />);
        const githubLink = screen.getByRole("link", { name: /github/i });
        expect(githubLink).toHaveAttribute("href", "https://github.com/benattali");

        const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
        expect(linkedinLink).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/ben-attali/"
        );
    });
});
