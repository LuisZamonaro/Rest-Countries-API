import React from 'react'
import { useCountry } from '../../context/SelectedCountryContext'
import CountryDetails from '../CountryDetails/CountryDetails'

const CountryInfo = () => {
    const {selectedCountry} = useCountry()

  return (
    <div>
        {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  )
}

export default CountryInfo