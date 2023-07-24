import axios from "axios";
import { useEffect, useState } from "react";
import { CountryData } from "../types";

const useService = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CountryData[]>([]);
  // console.log(searchResult);
  const fetchCountry = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${searchInput}`,
      );

      const filteredResponse = response.data.filter((country: CountryData) => {
        return country.name.common.toLowerCase() === searchInput.toLowerCase();
      });

      setSearchResult(filteredResponse);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchInitialCountries = async () => {
      try {
        const initialResponse = await axios.get(
          "https://restcountries.com/v3.1/all",
        );
        const shuffledCountries = initialResponse.data.sort(
          () => Math.random() - 0.5,
        );
        setSearchResult(shuffledCountries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInitialCountries();
  }, []);

  const searchEventHandler = (event: { key: string }) => {
    if (event.key === "Enter") {
      if (searchInput.trim() !== "") {
        fetchCountry();
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchInput(event.target.value);
  };

  return { searchEventHandler, handleChange, searchInput, searchResult };
};

export default useService;
