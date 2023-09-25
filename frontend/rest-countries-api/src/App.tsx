import BodyComponent from "./components/BodyComponent/BodyComponent"
import { ModeProvider } from "./context/ModeStyleContext"
import { RegionProvider } from "./context/RegionContext"
import { CountrySearchProvider } from "./context/SearchContext"
import { CountryProvider } from "./context/SelectedCountryContext"



function App() {

    return (
        <>
            <ModeProvider>
                <CountryProvider>
                    <CountrySearchProvider>
                        <RegionProvider>
                            <BodyComponent/>
                        </RegionProvider>
                    </CountrySearchProvider>
                </CountryProvider>
            </ModeProvider>
        </>
    )
}

export default App
