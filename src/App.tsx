import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { modeType } from "./types";

const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

const App = () => {
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
  return (
    <ThemeProvider theme={{ activeTheme, setActiveTheme }}>
      <ParentDiv activeTheme={activeTheme}>
        <Header />
      </ParentDiv>
    </ThemeProvider>
  );
};

export default App;

const ParentDiv = styled.div<modeType>(
  ({ activeTheme }) => css`
    width: 37.5rem;
    height: 100%;
    background-color: ${activeTheme === "dark" ? "#202C36" : "#FAFAFA"};

    @media (min-width: 768px) {
      width: 60rem;
    }
  `,
);
