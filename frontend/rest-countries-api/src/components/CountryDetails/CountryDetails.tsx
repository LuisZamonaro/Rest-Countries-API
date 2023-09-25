import { Country } from '../../types/types'
import iconBack from '../../images/seta-esquerda.png'
import * as S from './styles'
import { useCountry } from '../../context/SelectedCountryContext'
import { useMode } from '../../context/ModeStyleContext'


interface CountryProps {
    country: Country
}


const CountryDetails = ({ country }: CountryProps) => {

    const { handleCountryClick } = useCountry()
    const { mode } = useMode()

    return (
        <S.Container mode={mode}>
            <S.Back onClick={() => handleCountryClick(country)}>
                <div className="back"><img src={iconBack} id='iconBack' /> Back</div>
            </S.Back>
            <S.CountryContentLeft>
                <div className="countryFlag">
                    <img id='countryFlag' src={country.flags.png} />
                </div>
                <div>
                    <h2>{country.name}</h2>
                    <p>Native Name: <span className='info'>{country.nativeName}</span></p>
                    <p>Population: <span className='info'>{country.population}</span></p>
                    <p>Region: <span className='info'>{country.region}</span></p>
                    <p>Sub Region: <span className='info'>{country.subregion}</span></p>
                    <span><p>Capital: <span className='info'>{country.capital}</span></p></span>

                </div>
                <div>
                    <p className='topLevel'>Top Level Domain: <span className='info'>{country.topLevelDomain}</span></p>
                    <ul className='currencies'>
                        {country.currencies.map((currency, index) => (
                            <ul className='ulMargin' key={index}><span>Currencies:</span> {currency.name}</ul>
                        ))}
                    </ul>
                    <ul className='languages'>
                        <p>Languages</p>
                        {country.languages.map((language, index) => (
                            <ul className='ulMargin' key={index}>{language.name}</ul>
                        ))}
                    </ul>

                </div>
            </S.CountryContentLeft>
            <S.BorderCountries>
                {Array.isArray(country.borders) && country.borders.length > 0 ? (
                    <ul className='borderCountries'>
                        <div>Border Countries:</div>
                        <div className='mapCountryBorders'>
                            {country.borders.map((border, index) => (
                                <span className='individualBorderCountries'><ul key={index}>{border}</ul></span>
                            ))}
                        </div>
                    </ul>
                ) : (
                    <p className='info'>No country borders</p>
                )}
            </S.BorderCountries>
        </S.Container>
    )
}

export default CountryDetails