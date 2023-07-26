import App from "../App";

import { Route, Routes as ReactRoutes } from "react-router-dom";
import useService from "../hooks/useService";
import { useState } from "react";
import { CountryData, ValuesContextType } from "../types";

import CountryPage from "./CountryPage";
import { createContext } from "react";
export const ValuesContext = createContext<ValuesContextType | null>(null);

const Routes: React.FC = () => {
  const {
    searchInput,
    searchResult,
    searchEventHandler,
    handleChange,
    setSearchResult,
  } = useService();
  const [filteredData, setFilteredData] = useState<CountryData[]>(searchResult);
  return (
    <ValuesContext.Provider
      value={{
        searchInput,
        searchResult,
        searchEventHandler,
        handleChange,
        setSearchResult,
        filteredData,
        setFilteredData,
      }}
    >
      <ReactRoutes>
        <Route path="/" element={<App />} />
        <Route path="countries/:id" element={<CountryPage />} />
      </ReactRoutes>
    </ValuesContext.Provider>
  );
};

export default Routes;
