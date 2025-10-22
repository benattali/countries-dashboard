import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SortDropdown } from "../components/SortControls";

describe("SortDropdown Component", () => {
    test("renders all sort options", () => {
        render(<SortDropdown value="name-asc" onChange={() => { }} />);

        expect(screen.getByRole("option", { name: "Name: A → Z" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "Name: Z → A" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "Population: Low → High" })).toBeInTheDocument();
        expect(screen.getByRole("option", { name: "Population: High → Low" })).toBeInTheDocument();
    });

    test("displays the correct initial value", () => {
        render(<SortDropdown value="population-asc" onChange={() => { }} />);
        const select = screen.getByRole("combobox");
        expect(select).toHaveValue("population-asc");
    });

    test("calls onChange when selecting a new sort option", async () => {
        const handleSortChange = jest.fn();
        render(<SortDropdown value="name-asc" onChange={handleSortChange} />);

        const select = screen.getByRole("combobox");
        await userEvent.selectOptions(select, "population-desc");

        expect(handleSortChange).toHaveBeenCalledWith("population-desc");
    });

    test("calls onChange for multiple selections", async () => {
        const handleSortChange = jest.fn();
        render(<SortDropdown value="name-asc" onChange={handleSortChange} />);

        const select = screen.getByRole("combobox");

        await userEvent.selectOptions(select, "name-desc");
        expect(handleSortChange).toHaveBeenCalledWith("name-desc");

        await userEvent.selectOptions(select, "population-asc");
        expect(handleSortChange).toHaveBeenCalledWith("population-asc");

        await userEvent.selectOptions(select, "population-desc");
        expect(handleSortChange).toHaveBeenCalledWith("population-desc");
    });

    test("is accessible with correct roles", () => {
        render(<SortDropdown value="name-asc" onChange={() => { }} />);
        const select = screen.getByRole("combobox");
        const options = screen.getAllByRole("option");

        expect(select).toBeInTheDocument();
        expect(options).toHaveLength(4);
    });
});
