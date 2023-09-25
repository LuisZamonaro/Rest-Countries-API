export interface Country {
    name: string
    flags: {
        svg: string,
        png: string,
    }
    population: number
    region: string
    capital: string
    nativeName: string
    subregion: string
    borders: string[]
    topLevelDomain: string
    currencies: {
        name: string
    }[]
    languages: {
        name: string
    }[]
}
