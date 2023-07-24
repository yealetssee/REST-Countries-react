import { ReactEventHandler, useContext, useState } from "react";
import styled, { ThemeContext, css } from "styled-components";
import { dropDownProps, dropType, modeType } from "../types";

const DropdownMenu: React.FC<dropDownProps> = ({
  isShown,
  setChosenRegion,
}) => {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <Dropdown activeTheme={activeTheme} isShown={isShown}>
      <Region
        onClick={() => {
          setChosenRegion("Africa");
        }}
        activeTheme={activeTheme}
      >
        Africa
      </Region>
      <Region
        onClick={() => setChosenRegion("America")}
        activeTheme={activeTheme}
      >
        America
      </Region>
      <Region onClick={() => setChosenRegion("Asia")} activeTheme={activeTheme}>
        Asia
      </Region>
      <Region
        onClick={() => setChosenRegion("Europe")}
        activeTheme={activeTheme}
      >
        Europe
      </Region>
      <Region
        onClick={() => setChosenRegion("Oceania")}
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
