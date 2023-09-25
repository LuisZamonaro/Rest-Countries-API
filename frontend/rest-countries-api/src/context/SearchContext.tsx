import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import data from '../data.json';

interface Country {
  name: string;
}

interface CountrySearchContextType {
  searchTerm: string;
  searchResults: Country[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  performSearch: (term: string) => void;
}


interface CountrySearchProviderProps {
  children: ReactNode;
}


const CountrySearchContext = createContext<CountrySearchContextType | undefined>(undefined);


export const CountrySearchProvider: React.FC<CountrySearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Country[]>([]);


  const performSearch = (term: string) => {
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredCountries);
  };


  useEffect(() => {
    performSearch(searchTerm);
  }, [searchTerm]);

  const contextValue: CountrySearchContextType = {
    searchTerm,
    searchResults,
    setSearchTerm,
    performSearch,
  };

  return (
    <CountrySearchContext.Provider value={contextValue}>
      {children}
    </CountrySearchContext.Provider>
  );
};


export const useCountrySearchContext = () => {
  const context = useContext(CountrySearchContext);

  if (context === undefined) {
    throw new Error('useCountrySearchContext must be used within a CountrySearchProvider');
  }

  return context;
};
