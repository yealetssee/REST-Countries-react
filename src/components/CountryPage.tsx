import { Link, useParams } from "react-router-dom";
import React from "react";

import { CountryData, modeType } from "../types";
import styled, { ThemeContext, css } from "styled-components";
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

  const zzz = combinedData.find((country) => {
    return country.name.common === "Grenada";
  });
  console.log(zzz);

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
          <TwoInfos>
            <TopInfo>
              <Span>{matchingCountry?.name.common}</Span>
              <SubSpan>
                Native Name:{" "}
                <InfoSpan>{matchingCountry?.altSpellings[1]}</InfoSpan>
              </SubSpan>
              <SubSpan>
                Population:{" "}
                <InfoSpan>
                  {matchingCountry?.population.toLocaleString()}
                </InfoSpan>
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
                {Object.values(matchingCountry?.languages ?? {}).reduce(
                  (acc: JSX.Element[], lang, index) => {
                    if (index !== 0) {
                      acc.push(
                        <React.Fragment key={`comma-${index}`}>
                          ,{" "}
                        </React.Fragment>,
                      );
                    }
                    acc.push(<InfoSpan key={index}>{lang}</InfoSpan>);
                    return acc;
                  },
                  [],
                )}
              </SubSpan>
            </BotInfo>
          </TwoInfos>

          <BorderCountries>
            <SubSpan>Border Countries: </SubSpan>
            <BorderChildren>
              {matchingCountry?.borders &&
                matchingCountry?.borders.map((countryCode) => {
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
    @media (min-width: 1440px) {
      width: 13.6rem;
      height: 4rem;
      padding-inline: 3.2rem 3.9rem;
      text-align: center;
      border-radius: 0.6rem;
    }
  `,
);

const Wrapper = styled.div<modeType>(
  ({ activeTheme }) => css`
    color: ${activeTheme === "dark" ? "#FFF" : "#111517"};
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media (min-width: 1440px) {
      flex-direction: row;
      align-items: center;
      gap: 14.4rem;
    }
  `,
);

const FlagWrapper = styled.div`
  width: 100%;
  max-width: 60rem;

  max-height: 48.3rem;
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

const TwoInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 11.2rem;
    align-items: center;
  }
`;

const Span = styled.span`
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.6rem;
  @media (min-width: 1440px) {
    font-size: 3.2rem;
  }
`;

const SubSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 3.2rem;
  @media (min-width: 1440px) {
    font-size: 1.6rem;
  }
`;

const InfoSpan = styled(SubSpan)`
  font-weight: 300;
  text-transform: capitalize;
`;

const BotInfo = styled(TopInfo)``;

const BorderCountries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media (min-width: 1440px) {
    flex-direction: row;
  }
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
