import { useContext, useState } from "react";
import styled, { ThemeContext, css } from "styled-components";

import { ValuesContextType, modeType } from "../types";
import SearchLogo from "../svg/SearchLogo";
import Arrow from "../svg/Arrow";
import DropdownMenu from "./DropdownMenu";
import { ValuesContext } from "./Routes";

const SearchFilter = () => {
  const { activeTheme } = useContext(ThemeContext);
  const contextValues = useContext(ValuesContext) as ValuesContextType;
  const {
    searchEventHandler,
    setFilteredData,
    searchInput,
    handleChange,
    searchResult,
    setSearchResult,
  } = contextValues;
  const [isShown, setIsShown] = useState<boolean>(false);

  const [chosenRegion, setChosenRegion] = useState<
    "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"
  >();
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    if (event.key === "Enter") {
      searchEventHandler(event);
      setFilteredData([]);
    }
  };

  return (
    <Wrapper>
      <Search activeTheme={activeTheme}>
        <SearchLogo />
        <Input
          activeTheme={activeTheme}
          value={searchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Search>
      <FilterDiv onClick={() => setIsShown(!isShown)} activeTheme={activeTheme}>
        <Span activeTheme={activeTheme}>
          {chosenRegion !== undefined ? chosenRegion : "Filter by Region"}
        </Span>
        <Arrow />
        <DropdownMenu
          setFilteredData={setFilteredData}
          searchResult={searchResult}
          setChosenRegion={setChosenRegion}
          isShown={isShown}
          setSearchResult={setSearchResult}
        />
      </FilterDiv>
    </Wrapper>
  );
};

export default SearchFilter;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Search = styled.div<modeType>(
  ({ activeTheme }) => css`
    max-width: 34.3rem;
    height: 4.8rem;
    padding: 1.6rem 3.2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.1);
    border: none;

    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    display: flex;
    align-items: center;
    gap: 2.6rem;

    @media (min-width: 768px) {
      width: 48rem;
      height: 5.6rem;
    }
  `,
);

const Input = styled.input<modeType>(
  ({ activeTheme }) => css`
    width: 100%;
    background-color: inherit;
    border: none;
    font-size: 1.2rem;
    outline: none;
    color: ${activeTheme === "dark"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(196, 196, 196, 1)"};
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  `,
);

const FilterDiv = styled.div<modeType>(
  ({ activeTheme }) => css`
    width: 20rem;
    height: 4.8rem;
    border-radius: 0.5rem;
    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    padding-block: 1.4rem;
    padding-inline: 2.4rem 1.9rem;
    display: flex;
    align-items: center;
    /* gap: 6.2rem; */
    justify-content: space-between;
    position: relative;
    @media (min-width: 768px) {
      /* width: 20rem; */
      height: 5.6rem;
    }
  `,
);

const Span = styled.span<modeType>(
  ({ activeTheme }) => css`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);
