import styled, { ThemeContext, ThemeProvider, css } from "styled-components";

import { SearchAndFilter } from "./components";
import Countries from "./components/Countries";

const App = () => {
  return (
    <ParentDiv>
      <SearchAndFilter />
      <Countries />
    </ParentDiv>
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
