import App from "../App";

import { Route, Routes as ReactRoutes } from "react-router-dom";
import useService from "../hooks/useService";
import { useState, useEffect } from "react";
import { CountryData, ValuesContextType, modeType } from "../types";
import { ThemeProvider, css } from "styled-components";
import styled from "styled-components";

import CountryPage from "./CountryPage";
import { createContext } from "react";
import { Header } from ".";
export const ValuesContext = createContext<ValuesContextType | null>(null);
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const Routes: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<string>(
    darkModeQuery.matches ? "dark" : "light",
  );

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setActiveTheme(event.matches ? "dark" : "light");
    };

    darkModeQuery.addEventListener("change", handleChange);

    return () => darkModeQuery.removeEventListener("change", handleChange);
  }, []);
  const {
    searchInput,
    searchResult,
    searchEventHandler,
    handleChange,
    setSearchResult,
  } = useService();
  const [filteredData, setFilteredData] = useState<CountryData[]>(searchResult);
  const [combinedData, setCombinedData] = useState<CountryData[]>(searchResult);
  useEffect(() => {
    setCombinedData(filteredData.length === 0 ? searchResult : filteredData);
  }, [filteredData, searchResult]);

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
        combinedData,
      }}
    >
      <ThemeProvider theme={{ activeTheme, setActiveTheme }}>
        <Wrapper activeTheme={activeTheme}>
          <Header />
          <ReactRoutes>
            <Route path="/" element={<App />} />
            <Route
              path="/countries/:id"
              element={<CountryPage combinedData={combinedData} />}
            />
          </ReactRoutes>
        </Wrapper>
      </ThemeProvider>
    </ValuesContext.Provider>
  );
};

export default Routes;
const Wrapper = styled.div<modeType>(
  ({ activeTheme }) => css`
    width: 100%;
    min-height: 100%;

    background-color: ${activeTheme === "dark" ? "#202C36" : "#FAFAFA"};
  `,
);
