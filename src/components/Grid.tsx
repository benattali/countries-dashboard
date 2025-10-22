import { Country } from "../types";
import { Card } from "./Card";

interface GridProps {
    countries: Country[];
}

export const Grid = ({ countries }: GridProps) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-rows-5 gap-4 p-4">
            {countries.map((country) => (
                <Card key={country.name} {...country} />
            ))}
        </div>
    );
};
