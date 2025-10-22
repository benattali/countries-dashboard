import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../components/SearchBar";
import { useState } from "react";

describe("SearchBar Component", () => {
    test("renders with initial value", () => {
        render(<SearchBar value="Hello" onChange={() => { }} />);
        const input = screen.getByPlaceholderText(/search by country name/i);
        expect(input).toHaveValue("Hello");
    });

    test("calls onChange correctly when typing", async () => {
        const handleChange = jest.fn();

        const Wrapper = () => {
            const [value, setValue] = useState("");
            return <SearchBar value={value} onChange={(e) => { setValue(e.target.value); handleChange(e); }} />;
        };

        render(<Wrapper />);
        const input = screen.getByPlaceholderText(/search by country name/i);

        await userEvent.type(input, "Israel");

        expect(handleChange).toHaveBeenCalledTimes(6);
        expect(input).toHaveValue("Israel");
    });

    test("calls onChange when clearing input", async () => {
        const handleChange = jest.fn();
        render(<SearchBar value="Israel" onChange={handleChange} />);
        const input = screen.getByPlaceholderText(/search by country name/i);

        await userEvent.clear(input);

        expect(handleChange).toHaveBeenCalled();
    });

    test("input can be focused", () => {
        render(<SearchBar value="" onChange={() => { }} />);
        const input = screen.getByPlaceholderText(/search by country name/i);

        input.focus();
        expect(input).toHaveFocus();
    });
});
