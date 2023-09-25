import * as S from './styles';
import iconSearch from '../../images/icons8-search.svg';
import { useRegionContext } from '../../context/RegionContext';
import { useCountrySearchContext } from '../../context/SearchContext';
import { useCountry } from '../../context/SelectedCountryContext';
import { useMode } from '../../context/ModeStyleContext';

const FiltersAndSearch = () => {
    const { handleRegion } = useRegionContext();
    const { searchTerm, setSearchTerm } = useCountrySearchContext()
    const { selectedCountry } = useCountry()
    const {mode} = useMode()

    return (
        (!selectedCountry && (
            <S.Container mode={mode}>
                <S.LeftFilter>
                    <>
                        <div className="iconSearch">
                            <img id='iconSearch' src={iconSearch} alt="Search Icon" />
                        </div>
                        <input type="text" placeholder='Search for a country'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                    </>
                </S.LeftFilter>
                <S.RightFilter mode={mode}>
                    <select id="Dropdown" name="opcoes" onChange={handleRegion}>
                        <option value="0">Filter by Region</option>
                        <option value="1">Africa</option>
                        <option value="2">America</option>
                        <option value="3">Asia</option>
                        <option value="4">Europa</option>
                        <option value="5">Oceania</option>
                    </select>
                </S.RightFilter>
            </S.Container>
        ))
    );
};

export default FiltersAndSearch;
