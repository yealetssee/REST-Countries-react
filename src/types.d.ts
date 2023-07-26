export type modeType = {
  activeTheme: string;
};

export type ValuesContextType = {
  searchInput: string;
  searchResult: CountryData[];
  combinedData: CountryData[];
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
  combinedData: CountryData[];
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
    nativeName: {
      mon: {
        common: string;
      };
    };
  };
  cca3: string;
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
    [currencyCode: string]: {
      name: string;
    };
  };
  languages: {
    [code: string]: string;
  };
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
  tld: string[];
}
