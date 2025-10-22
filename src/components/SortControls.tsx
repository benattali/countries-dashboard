export type SortOption = "name-asc" | "name-desc" | "population-asc" | "population-desc";

interface SortDropdownProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

export const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
    return (
        <div className="flex justify-center mb-4">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
                className="px-4 py-2 w-full max-w-md rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBlue"
            >
                <option value="name-asc">Name: A → Z</option>
                <option value="name-desc">Name: Z → A</option>
                <option value="population-asc">Population: Low → High</option>
                <option value="population-desc">Population: High → Low</option>
            </select>
        </div>
    );
};
