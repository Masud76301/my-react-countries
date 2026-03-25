import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ allCountries }) => {
    const countriesData = use(allCountries);
    const countries = countriesData.countries;

    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handelVisitedCountry = (country) => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    const handelVisitedFlags =(flags) =>{
        const newVisitedFlag = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlag);
    }

    return (
        <div>
            <h1> In The Countries : {countries.length}</h1>
            <p>Total Visited Countries: {visitedCountry.length}</p>
            <ol>
                {
                    visitedCountry.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <ol className='visited-flags'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </ol>
            <div className='countries'>

                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handelVisitedCountry={handelVisitedCountry} handelVisitedFlags={handelVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;