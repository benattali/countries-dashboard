import { useState, useEffect } from "react";
import { Country } from "../types";


export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags"
                );

                if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

                const data = await response.json();

                const mappedCountries: Country[] = data.map((c: any) => ({
                    name: c.name.common,
                    capital: c.capital.length > 0 ? c.capital[0] : "N/A",
                    population: c.population,
                    flag: c.flags.svg,
                }));

                setCountries(mappedCountries);
            } catch (err: any) {
                setError("It appears something went wrong. You can try to refresh the page or contact us with the issue.");
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    return { countries, loading, error };
};
