import { useMode } from '../../context/ModeStyleContext'
import { GlobalStyles } from '../../styles/GlobalStyles'
import CountriesComponent from '../CountriesComponent/CountriesComponent'
import CountryInfo from '../CountryInfo/CountryInfo'
import FiltersAndSearch from '../FiltersAndSearch/FiltersAndSearch'
import Header from '../Header/Header'


const BodyComponent = () => {
    const { mode } = useMode()

    return (
        <>
            <GlobalStyles mode={mode} />
            <Header />
            <FiltersAndSearch />
            <CountryInfo />
            <CountriesComponent />
        </>
    )
}

export default BodyComponent