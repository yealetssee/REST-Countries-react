import styled, { ThemeContext, css } from "styled-components";
import { modeType } from "../types";
import { useContext } from "react";

const Logo = () => {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setActiveTheme(activeTheme === "dark" ? "light" : "dark");
  };
  return (
    <Svg onClick={toggleTheme} activeTheme={activeTheme}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
      />
    </Svg>
  );
};

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)<modeType>(
  ({ activeTheme }) => css`
    width: 1.6rem;
    height: 1.6rem;
    margin-bottom: 0.3rem;
    fill: ${activeTheme === "dark" ? "white" : "black"};

    cursor: pointer;
  `,
);
export default Logo;
