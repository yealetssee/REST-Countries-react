import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import useService from "./hooks/useService";

import { ThemeProvider } from "styled-components";
import { CountryData, modeType } from "./types";
import { Header, SearchAndFilter } from "./components";
import Countries from "./components/Countries";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const App = () => {
  const [activeTheme, setActiveTheme] = useState<string>(
    darkModeQuery.matches ? "dark" : "light",
  );
  const {
    searchInput,
    searchResult,
    searchEventHandler,
    handleChange,
    setSearchResult,
  } = useService();
  const [filteredData, setFilteredData] = useState<CountryData[]>(searchResult);
  console.log(filteredData.length);

  useEffect(() => {
    const handleChange = (event: MediaQueryListEvent) => {
      setActiveTheme(event.matches ? "dark" : "light");
    };

    darkModeQuery.addEventListener("change", handleChange);

    return () => darkModeQuery.removeEventListener("change", handleChange);
  }, []);
  return (
    <ThemeProvider theme={{ activeTheme, setActiveTheme }}>
      <Wrapper activeTheme={activeTheme}>
        <Header />
        <ParentDiv>
          <SearchAndFilter
            setFilteredData={setFilteredData}
            searchInput={searchInput}
            searchEventHandler={searchEventHandler}
            handleChange={handleChange}
            searchResult={searchResult}
            setSearchResult={setSearchResult}
          />
          <Countries searchResult={searchResult} filteredData={filteredData} />
        </ParentDiv>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;

const ParentDiv = styled.div`
  width: 100%;
  height: auto;
  /* background-color: red; */

  padding-inline: 1.6rem;
  margin-top: 2.4rem;

  @media (min-width: 768px) {
    width: 60rem;
  }
`;
const Wrapper = styled.div<modeType>(
  ({ activeTheme }) => css`
    width: 100%;
    min-height: 100%;

    background-color: ${activeTheme === "dark" ? "#202C36" : "#FAFAFA"};
  `,
);
