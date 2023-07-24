import { useContext } from "react";
import styled, { ThemeContext, css } from "styled-components";
import { CountryData, modeType } from "../types";

const Countries = ({ searchResult }: { searchResult: CountryData[] }) => {
  const { activeTheme } = useContext(ThemeContext);

  console.log(searchResult);

  return (
    <ParentDiv>
      {searchResult.slice(0, 8).map((country: CountryData) => (
        <Country activeTheme={activeTheme} key={country.name.common}>
          <FlagWrapper>
            <FlagImg src={country.flags.png} alt={country.flags.alt} />
          </FlagWrapper>
          <Info>
            <CountryName activeTheme={activeTheme}>
              {country.name.common}
            </CountryName>
            <Span activeTheme={activeTheme}>
              Population:{" "}
              <Stat activeTheme={activeTheme}>
                {country.population.toLocaleString()}
              </Stat>{" "}
            </Span>
            <Span activeTheme={activeTheme}>
              Region: <Stat activeTheme={activeTheme}>{country.region}</Stat>
            </Span>
            <Span activeTheme={activeTheme}>
              Capital: <Stat activeTheme={activeTheme}>{country.capital}</Stat>
            </Span>
          </Info>
        </Country>
      ))}
    </ParentDiv>
  );
};

export default Countries;

const ParentDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-top: 3.2rem;
  gap: 4rem;
`;

const Country = styled.div<modeType>(
  ({ activeTheme }) => css`
    width: 26.4rem;
    height: 33.6rem;
    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.07);
    border-radius: 0.5rem;
  `,
);

const FlagWrapper = styled.div`
  width: 100%;
  height: 16rem;
`;

const FlagImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2.4rem;
  padding-left: 2.4rem;
  display: flex;
  flex-direction: column;

  /* background-color: red; */
`;

const CountryName = styled.span<modeType>(
  ({ activeTheme }) => css`
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);

const Span = styled(CountryName)`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  &:nth-child(n + 1) {
    margin-top: rem;
  }
`;

const Stat = styled(Span)`
  font-weight: 300;
`;
