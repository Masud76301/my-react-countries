import React, { useState } from 'react';
import './Country.css';
const Country = ({country,handelVisitedCountry,handelVisitedFlags}) => {
    const countryName = country.name.common;
    const countryFlag = country.flags.flags.png;
    const countryPopulation = country.population.population;
    const countryArea = country.area.area;

    const [visited,setVisited] = useState(false);

    const handleVisited = () => {

        setVisited(visited ? false : true);
        handelVisitedCountry(country);
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={countryFlag} alt={country.flags.flags.alt}></img>
            <h4>Name:{countryName}</h4>
            <p>Population:{countryPopulation}</p>
            <p>Area:{countryArea} - {countryArea > 300000 ? 'Big Country' : 'Small Country' }</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=> {handelVisitedFlags(countryFlag)}}>Visited Flags</button>
        </div>
    );
};

export default Country;