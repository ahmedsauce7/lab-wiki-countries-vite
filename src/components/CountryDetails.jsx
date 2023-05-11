import { Link, useParams } from 'react-router-dom';



function CountryDetails({ countries }) {
    const {alpha3Code} = useParams();
    const imageExt = ".png"
    const imageURL = "https://flagpedia.net/data/flags/icon/72x54/"

    if (!countries) {
        return null
    }
        const selectCountry = countries.find((countryselection) => 
             countryselection.alpha3Code === alpha3Code
        )
    return (
      <div className="detailsinfo">
        <div>
            <img className="detailimage" src={`${imageURL}${selectCountry.alpha2Code.toLowerCase()}${imageExt}`} alt={selectCountry.name.common}/>
            </div>
        <h1>{selectCountry.name.common}</h1>
        <table className='table'>
            <tbody>
                <tr>
                    <td className='tabled'>Capital</td>
                    <td className='tabled'>{selectCountry.capital[0]}</td>
                </tr>
                <tr>
                    <td className='tabled'>Area</td>
                    <td className='tabled'>{selectCountry.area}km<sup>2</sup></td>
                </tr>
                <tr>
                    <td className='tabled'>Borders</td>
                    <td className='tabled'>
                        <ul>{selectCountry.borders.map((countryBorders, index) => {
                        return (
                            <li key={index}>
                                <Link to={`/${countryBorders}`}>
                                {countryBorders}
                                </Link>
                            </li>
                        )
                        })}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
export default CountryDetails