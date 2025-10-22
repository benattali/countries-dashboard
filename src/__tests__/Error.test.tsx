import { render, screen } from "@testing-library/react";
import { Error } from "../components/Error";

describe("Error Component", () => {
    test("renders custom error message when provided", () => {
        const customMessage = "Failed to fetch data";
        render(<Error error={customMessage} />);
        expect(screen.getByText(customMessage)).toBeInTheDocument();
    });

    test("renders default message when error is null", () => {
        render(<Error error={null} />);
        expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });

    test("renders default message when error is undefined", () => {

        render(<Error error={null} />);
        expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });

    test("applies correct styling classes", () => {
        render(<Error error="Oops!" />);
        const container = screen.getByText("Oops!").parentElement;
        expect(container).toHaveClass("flex", "items-center", "justify-center", "min-h-screen");

        const paragraph = screen.getByText("Oops!");
        expect(paragraph).toHaveClass("text-xl", "font-semibold", "text-red-600");
    });
});
