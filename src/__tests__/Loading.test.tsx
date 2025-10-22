import { render, screen } from "@testing-library/react";
import { Loading } from "../components/Loading";

describe("Loading Component", () => {
    test("renders loading text", () => {
        render(<Loading />);
        expect(screen.getByText(/loading countries/i)).toBeInTheDocument();
    });
});
