import { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import Logo from "../svg/Logo";
import { modeType } from "../types";

const Header = () => {
  const { setActiveTheme, activeTheme } = useContext(ThemeContext);

  return (
    <HeaderParent activeTheme={activeTheme}>
      <Span>Where in the world?</Span>
      <LeftSpan>
        <Logo setActiveTheme={setActiveTheme} activeTheme={activeTheme} />
        Dark Mode
      </LeftSpan>
    </HeaderParent>
  );
};

export default Header;

const HeaderParent = styled.header<modeType>(
  ({ activeTheme }) => css`
    width: 100%;
    height: 0.8rem;
    padding-block: 3rem;
    padding-inline: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);

const Span = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  line-height: 2rem;
`;

const LeftSpan = styled(Span)`
  font-size: 1.2rem;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
