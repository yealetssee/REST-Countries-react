import { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import { modeType } from "../types";

const Arrow = () => {
  const { activeTheme } = useContext(ThemeContext);
  return (
    <Svg activeTheme={activeTheme}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
      />
    </Svg>
  );
};

export default Arrow;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)<modeType>(
  ({ activeTheme }) => css`
    width: 1rem;
    height: 1rem;
    fill: ${activeTheme === "dark" ? "rgba(255, 255, 255, 1)" : "black"};
  `,
);
