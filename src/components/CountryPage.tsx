import { Link, useParams } from "react-router-dom";
import { CountryData, modeType } from "../types";
import styled, { ThemeContext, ThemeProvider, css } from "styled-components";
import { useContext } from "react";
import LeftArrow from "../svg/LeftArrow";

const CountryPage: React.FC<{ combinedData: CountryData[] }> = ({
  combinedData,
}) => {
  const { id } = useParams();

  const { activeTheme } = useContext(ThemeContext);

  const matchingCountry = combinedData.find((country) => {
    return country.name.common === id;
  });
  console.log(matchingCountry);

  return (
    <ParentDiv>
      <StyledButton activeTheme={activeTheme}>
        <Linkel to={"/"}>
          <LeftArrow />
          Back
        </Linkel>
      </StyledButton>

      <Wrapper activeTheme={activeTheme}>
        <FlagWrapper>
          <Flag src={matchingCountry?.flags.png} />
        </FlagWrapper>
        <InfoWrapper>
          <TopInfo>
            <Span>{matchingCountry?.name.common}</Span>
            <SubSpan>
              Native Name:{" "}
              <InfoSpan>{matchingCountry?.altSpellings[1]}</InfoSpan>
            </SubSpan>
            <SubSpan>
              Population: <InfoSpan>{matchingCountry?.population}</InfoSpan>
            </SubSpan>
            <SubSpan>
              Region: <InfoSpan>{matchingCountry?.region}</InfoSpan>
            </SubSpan>
            <SubSpan>
              Sub Region: <InfoSpan>{matchingCountry?.subregion}</InfoSpan>
            </SubSpan>
            <SubSpan>
              Capital: <InfoSpan>{matchingCountry?.capital}</InfoSpan>
            </SubSpan>
          </TopInfo>
          <BotInfo>
            <SubSpan>
              Top Level Domain: <InfoSpan>{matchingCountry?.tld}</InfoSpan>
            </SubSpan>
            <SubSpan>
              Currencies:{" "}
              <InfoSpan>
                {" "}
                {Object.values(matchingCountry?.currencies ?? {}).map(
                  (currency) => currency.name,
                )}
              </InfoSpan>
            </SubSpan>
            <SubSpan>
              Languages:{" "}
              {Object.entries(matchingCountry?.languages ?? {}).reduce(
                (acc, [code, lang], index) => (
                  <>
                    {acc}
                    {index !== 0 && ", "} <InfoSpan key={code}>{lang}</InfoSpan>
                  </>
                ),
                null,
              )}
            </SubSpan>
          </BotInfo>
          <BorderCountries>
            <Span>Border Countries: </Span>
            <BorderChildren>
              {matchingCountry?.borders.map((countryCode) => {
                const borderCountry = combinedData.find(
                  (item) => item.cca3 === countryCode,
                );
                if (borderCountry) {
                  return (
                    <BorderCountryButton
                      key={borderCountry.name.common}
                      activeTheme={activeTheme}
                    >
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        to={`/countries/${borderCountry.name.common}`}
                      >
                        {borderCountry.name.common}
                      </Link>
                    </BorderCountryButton>
                  );
                } else {
                  return null;
                }
              })}
            </BorderChildren>
          </BorderCountries>
        </InfoWrapper>
      </Wrapper>
    </ParentDiv>
  );
};

export default CountryPage;

const ParentDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: inherit;
  padding: 4rem 2.8rem;
  display: flex;
  gap: 6rem;
  flex-direction: column;
`;

const StyledButton = styled.button<modeType>(
  ({ activeTheme }) => css`
    width: 10.4rem;
    padding: 0.6rem 2.3rem;
    border-radius: 0.2rem;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.29);
    border: none;
    outline: none;
    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);

const Wrapper = styled.div<modeType>(
  ({ activeTheme }) => css`
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,
);

const FlagWrapper = styled.div`
  width: 100%;
  height: 20rem;
`;
const Linkel = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  /* width: 1.4rem; */
  height: 3.2rem;
`;

const Flag = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const TopInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
`;

const SubSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 3.2rem;
`;

const InfoSpan = styled(SubSpan)`
  font-weight: 300;
  text-transform: capitalize;
`;

const BotInfo = styled(TopInfo)``;

const BorderCountries = styled.div`
  display: flex;
  flex-direction: column;
`;

const BorderChildren = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const BorderCountryButton = styled.button<modeType>(
  ({ activeTheme }) => css`
    width: 9.6rem;
    height: 2.8rem;
    border-radius: 0.2rem;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
    background-color: ${activeTheme === "dark" ? "#2B3844" : "#FFF"};
    text-align: center;
    border: none;
    outline: none;
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
  `,
);
