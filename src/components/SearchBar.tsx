import React from "react";

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
    <div className="flex justify-center mb-4">
        <input
            type="text"
            placeholder="Search by country name..."
            value={value}
            onChange={onChange}
            className="px-4 py-2 w-full max-w-md rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandBlue"
        />
    </div>
);
