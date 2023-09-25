import { createContext, useContext, useState, ReactNode } from 'react';


interface Country {
  name: string;
  capital: string;
  population: number;
}

interface CountryContextType {
  selectedCountry: Country | null;
  handleCountryClick: (country: Country) => void;
}

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export function CountryProvider({ children }: { children: ReactNode }) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleCountryClick = (country: Country) => {
    // Se o país já estiver selecionado, feche-o
    if (selectedCountry && selectedCountry.name === country.name) {
      setSelectedCountry(null);
    } else {
      setSelectedCountry(country);
    }
  };

  return (
    <CountryContext.Provider value={{ selectedCountry, handleCountryClick }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountry deve ser usado dentro de um CountryProvider');
  }
  return context;
}
