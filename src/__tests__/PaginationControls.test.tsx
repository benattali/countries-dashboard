import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaginationControls } from "../components/PaginationControls";

describe("PaginationControls Component", () => {
    let onPageChange: jest.Mock;

    beforeEach(() => {
        onPageChange = jest.fn();
    });

    test("renders Prev and Next buttons correctly", () => {
        render(<PaginationControls currentPage={1} totalPages={10} onPageChange={onPageChange} />);

        const prevButton = screen.getByText(/prev/i);
        const nextButton = screen.getByText(/next/i);

        expect(prevButton).toBeDisabled();
        expect(nextButton).toBeEnabled();
    });

    test("renders numbered page buttons", () => {
        render(<PaginationControls currentPage={3} totalPages={10} onPageChange={onPageChange} />);
        for (let i = 1; i <= 5; i++) {
            expect(screen.getByText(i.toString())).toBeInTheDocument();
        }
    });

    test("highlights current page", () => {
        render(<PaginationControls currentPage={3} totalPages={10} onPageChange={onPageChange} />);
        const currentPageButton = screen.getByText("3");
        expect(currentPageButton).toHaveClass("bg-brandBlue");
    });

    test("calls onPageChange when Prev, Next, or number buttons are clicked", async () => {
        render(<PaginationControls currentPage={3} totalPages={10} onPageChange={onPageChange} />);
        const user = userEvent;

        await user.click(screen.getByText("Prev"));
        expect(onPageChange).toHaveBeenCalledWith(2);

        await user.click(screen.getByText("Next"));
        expect(onPageChange).toHaveBeenCalledWith(4);

        await user.click(screen.getByText("1"));
        expect(onPageChange).toHaveBeenCalledWith(1);
    });

    test("renders « 5 button when currentPage > 5", () => {
        render(<PaginationControls currentPage={6} totalPages={15} onPageChange={onPageChange} />);
        const jumpBackButton = screen.getByText(/« 5/);
        expect(jumpBackButton).toBeInTheDocument();
    });

    test("renders 5 » button when currentPage + 5 <= totalPages", () => {
        render(<PaginationControls currentPage={3} totalPages={15} onPageChange={onPageChange} />);
        const jumpForwardButton = screen.getByText(/5 »/);
        expect(jumpForwardButton).toBeInTheDocument();
    });

    test("calls onPageChange with jump buttons correctly", async () => {
        render(<PaginationControls currentPage={6} totalPages={15} onPageChange={onPageChange} />);
        const user = userEvent;

        await user.click(screen.getByText(/« 5/));
        expect(onPageChange).toHaveBeenCalledWith(1);

        await user.click(screen.getByText(/5 »/));
        expect(onPageChange).toHaveBeenCalledWith(11);
    });

    test("does not render jump buttons when not needed", () => {
        render(<PaginationControls currentPage={2} totalPages={5} onPageChange={onPageChange} />);
        expect(screen.queryByText(/« 5/)).toBeNull();
        expect(screen.queryByText(/5 »/)).toBeNull();
    });
});
