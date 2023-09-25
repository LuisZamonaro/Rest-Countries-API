import React, { createContext, useContext, useState, ReactNode } from 'react';


interface RegionContextType {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  handleRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void
}


const RegionContext = createContext<RegionContextType | undefined>(undefined);


export const RegionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [region, setRegion] = useState<string>('0');

  function handleRegion(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.target.value)
  }

  return (
    <RegionContext.Provider value={{ region, setRegion, handleRegion }}>
      {children}
    </RegionContext.Provider>
  );
};


export const useRegionContext = () => {
  const context = useContext(RegionContext);

  if (context === undefined) {
    throw new Error('useRegionContext must be used within a RegionProvider');
  }

  return context;
};
