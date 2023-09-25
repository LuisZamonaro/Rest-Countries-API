import { Country } from '../../types/types'
import * as S from './styles'
import { useCountry } from '../../context/SelectedCountryContext';
import { useMode } from '../../context/ModeStyleContext';


interface IndividualCountryProps {
    country: Country
    onClick?: () => void;   
}

const IndividualCountry = ({ country }: IndividualCountryProps) => {
    
    const {mode} = useMode()
    const {handleCountryClick} = useCountry()


    return (
        <S.CountryCard onClick={() => handleCountryClick(country)}>
            <img id='countryFlag' src={country.flags.png} />
            <S.InfoCountry mode={mode}>
                <div className="name">
                    {country.name}
                </div>
                <div className="population">
                    {country.population}
                </div>
                <div className="region">
                    {country.region}
                </div>
                <div className="capital">
                    {country.capital}
                </div>
            </S.InfoCountry>

        </S.CountryCard>


    )
}

export default IndividualCountry