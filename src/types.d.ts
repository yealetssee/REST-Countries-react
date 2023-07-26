export type modeType = {
  activeTheme: string;
};

type ValuesContextType = {
  searchInput: string;
  searchResult: CountryData[];
  searchEventHandler: (event: { key: string }) => void;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  setSearchResult: React.Dispatch<React.SetStateAction<CountryData[]>>;
  filteredData: CountryData[];
  setFilteredData: React.Dispatch<React.SetStateAction<CountryData[]>>;
};

export type propsType = {
  setActiveTheme: Function;
  activeTheme: string;
};

export type dropType = {
  activeTheme: string;
  isShown: boolean;
};
export type SearchFilterContextType = {
  filteredData: CountryData[];
  searchResult: CountryData[];
};
export interface dropDownProps {
  isShown: boolean;
  setChosenRegion: (
    chosenRegion: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania",
  ) => void;
  searchResult: CountryData[];
  setSearchResult: React.Dispatch<React.SetStateAction<CountryData[]>>;
  setFilteredData: React.Dispatch<React.SetStateAction<CountryData[]>>;
}

export type region = {
  target: {
    value: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
  };
};

export interface CountryData {
  name: {
    common: string;
  };
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  translations: {
    [key: string]: string;
  };
  flag: string;
  regionalBlocs: {
    acronym: string;
    name: string;
  }[];
  cioc: string;
  independent: boolean;
}
