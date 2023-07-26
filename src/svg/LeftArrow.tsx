import { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import { modeType } from "../types";

const LeftArrow = () => {
  const { activeTheme } = useContext(ThemeContext);
  return (
    <SVG activeTheme={activeTheme}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
      />
    </SVG>
  );
};

export default LeftArrow;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const SVG = styled(attrs)<modeType>(
  ({ activeTheme }) => css`
    width: 1.8rem;
    height: 1.8rem;
    fill: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);
