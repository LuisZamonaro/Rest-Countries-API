import { useMode } from '../../context/ModeStyleContext';
import { useRegionContext } from '../../context/RegionContext';
import { useCountrySearchContext } from '../../context/SearchContext';
import { useCountry } from '../../context/SelectedCountryContext';
import data from '../../data.json';
import { Country } from '../../types/types';
import IndividualCountry from '../IndividualCountry/IndividualCountry';
import * as S from './styles';





const CountriesComponent = () => {
    const { mode } = useMode()
    const { region } = useRegionContext();
    const { selectedCountry } = useCountry();
    const africaCountries = data.filter((country) => country.region === 'Africa');
    const americaCountries = data.filter((country) => country.region === 'Americas');
    const asiaCountries = data.filter((country) => country.region === 'Asia');
    const europeCountries = data.filter((country) => country.region === 'Europe');
    const oceaniaCountries = data.filter((country) => country.region === 'Oceania');
    const { searchResults, searchTerm } = useCountrySearchContext()



    return (
        <>
            <S.GeralContainer mode={mode}>

                {searchTerm.length !== 0 && !selectedCountry && (
                    <S.Container>
                        {searchResults.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}
                {region === '1' && searchTerm.length === 0 && !selectedCountry && (
                    <S.Container>
                        {africaCountries.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}

                {region === '2' && searchTerm.length === 0 && !selectedCountry && (
                    <S.Container>
                        {americaCountries.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}

                {region === '3' && searchTerm.length === 0 && !selectedCountry && (
                    <S.Container>
                        {asiaCountries.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}


                {region === '4' && searchTerm.length === 0 && !selectedCountry && (
                    <S.Container>
                        {europeCountries.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}

                {region === '5' && searchTerm.length === 0 && !selectedCountry && (
                    <S.Container>
                        {oceaniaCountries.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}

                {region === '0' && searchTerm.length === 0 && !selectedCountry && (
                    <S.Container>
                        {data.map((country, index) => (
                            <IndividualCountry key={index} country={country as Country} />
                        ))}
                    </S.Container>
                )}

            </S.GeralContainer>
        </>
    );
}

export default CountriesComponent;
