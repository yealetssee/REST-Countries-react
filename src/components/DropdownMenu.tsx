import { ReactEventHandler, useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import { dropDownProps, dropType, modeType } from "../types";

const DropdownMenu: React.FC<dropDownProps> = ({
  isShown,
  setChosenRegion,
  searchResult,
  setSearchResult,
  setFilteredData,
}) => {
  const { activeTheme } = useContext(ThemeContext);

  const clickHandler: ReactEventHandler<HTMLParagraphElement> = (e) => {
    const target = e.target as HTMLParagraphElement;
    const region = target.textContent as
      | "Africa"
      | "Americas"
      | "Asia"
      | "Europe"
      | "Oceania";

    // Update the chosen region
    setChosenRegion(region);

    const filteredSearchResult = searchResult.filter(
      (item) => item.region === region,
    );

    // Update the filtered search result state
    setFilteredData(filteredSearchResult);
  };

  return (
    <Dropdown activeTheme={activeTheme} isShown={isShown}>
      <Region
        // onClick={() => {
        //   setChosenRegion("Africa");
        // }}
        onClick={clickHandler}
        activeTheme={activeTheme}
      >
        Africa
      </Region>
      <Region
        // onClick={() => setChosenRegion("America")}
        onClick={clickHandler}
        activeTheme={activeTheme}
      >
        Americas
      </Region>
      <Region
        // onClick={() => setChosenRegion("Asia")}
        activeTheme={activeTheme}
        onClick={clickHandler}
      >
        Asia
      </Region>
      <Region
        // onClick={() => setChosenRegion("Europe")}
        onClick={clickHandler}
        activeTheme={activeTheme}
      >
        Europe
      </Region>
      <Region
        // onClick={() => setChosenRegion("Oceania")}
        onClick={clickHandler}
        activeTheme={activeTheme}
      >
        Oceania
      </Region>
    </Dropdown>
  );
};

export default DropdownMenu;

const Dropdown = styled.div<dropType>(
  ({ activeTheme, isShown }) => css`
    position: absolute;

    top: 5rem;
    left: 0;
    display: ${!isShown ? "none" : "flex"};
    flex-direction: column;
    gap: 0.8rem;
    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
    width: 20rem;
    height: 14.4rem;
    padding: 1.6rem 2.4rem;
    border-radius: 0.5rem;
  `,
);

const Region = styled.p<modeType>(
  ({ activeTheme }) => css`
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.6rem;
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);
