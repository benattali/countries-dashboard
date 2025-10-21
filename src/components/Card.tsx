import React from "react";
import { Country } from "../types";

export const Card = ({ name, capital, population, flag }: Country) => {
    console.log("flag, ", flag);

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start hover:shadow-xl transition-shadow duration-200">
            <img
                src={flag}
                alt={`${name} flag`}
                className="w-12 h-8 object-cover rounded-sm mb-2"
            />
            <h2 className="text-xl font-bold mt-2">{name}</h2>
            <p className="text-gray-600">Capital: {capital}</p>
            <p className="text-gray-600">Population: {population.toLocaleString()}</p>
        </div>
    );
};
