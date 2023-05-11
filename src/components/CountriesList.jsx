import React from 'react';
import { Link } from "react-router-dom"

const CountriesList = (props) => {
    const imageExt = ".png"
    const imageURL = "https://flagpedia.net/data/flags/icon/72x54/"

    return (
        <div className='col-5'>
            <div className='countriesGroup'>
                {props.countries.map((oneCountry) => {
                return(
                    <Link key={oneCountry.alpha3Code} className='countriescolumn'
                    to={`/${oneCountry.alpha3Code}`}>
                        <img className="image" src={`${imageURL}${oneCountry.alpha2Code.toLowerCase()}${imageExt}`} alt={oneCountry.name.common}/>
                        {oneCountry.name.common}
                    </Link>
                )
                })}
            </div>
        </div>
    )
};

export default CountriesList;