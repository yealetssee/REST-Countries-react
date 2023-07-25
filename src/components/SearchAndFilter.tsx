import { useContext, useState } from "react";
import styled, { ThemeContext, css } from "styled-components";
import { SearchFilterProps, modeType } from "../types";
import SearchLogo from "../svg/SearchLogo";
import Arrow from "../svg/Arrow";
import DropdownMenu from "./DropdownMenu";
import { SearchAndFilter } from ".";
// import useService from "../hooks/useService";

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchInput,
  handleChange,
  searchEventHandler,
  searchResult,
  setSearchResult,
  setFilteredData,
}) => {
  const { activeTheme } = useContext(ThemeContext);
  const [isShown, setIsShown] = useState<boolean>(false);
  // const { searchInput, searchEventHandler, handleChange } = useService();
  const [chosenRegion, setChosenRegion] = useState<
    "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"
  >();
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event,
  ) => {
    // Your custom action here
    if (event.key === "Enter") {
      searchEventHandler(event);
      setFilteredData([]);
    }

    // Call the searchEventHandler from your custom hook
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
  `,
);

const Input = styled.input<modeType>(
  ({ activeTheme }) => css`
    width: 100%;
    background-color: inherit;
    border: none;
    outline: none;
    color: ${activeTheme === "dark"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(196, 196, 196, 1)"};
  `,
);

const FilterDiv = styled.div<modeType>(
  ({ activeTheme }) => css`
    max-width: 20rem;
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
