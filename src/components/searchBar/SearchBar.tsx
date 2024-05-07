import React, { FC, useEffect, useRef } from "react";
import {
  Input,
  SearchBarContainer,
  SearchWrapper,
  StyledList,
  StyledUl,
} from "./SearchBar.styles";
import SearchSvg from "../ui/svgIcon/SearchSvg";
import { NavLink } from "react-router-dom";
import {
  WeatherAction,
  WeatherData,
  WeatherState,
} from "../../interface/WeatherReducer.types";

interface SearchBarProps {
  dispatch: React.Dispatch<WeatherAction>;
  state: WeatherState;
}

const SearchBar: FC<SearchBarProps> = ({ state, dispatch }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}=${state.location}`
        );

        const data = await res.json();

        dispatch({
          type: "fetchData",
          payload: data.map((city: WeatherData) => ({
            LocalizedName: city.LocalizedName,
            Key: city.Key,
            Country: city.Country,
            AdministrativeArea: city.AdministrativeArea,
          })),
        });
      } catch (err) {
        throw new Error("Error fetching location data");
      }
    };
    if (state.location.length > 0) {
      fetchData();
    }
  }, [state.location, dispatch]);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch({ type: "closeAutosearch" });
      }
    };
    if (state.isOpen) {
      document.addEventListener("click", handleClick, true);
    } else {
      document.removeEventListener("click", handleClick, true);
    }
    return () => document.removeEventListener("click", handleClick, true);
  }, [state.isOpen, dispatch]);

  if (state.fetchedData === undefined) return null;

  return (
    <SearchBarContainer>
      <SearchWrapper ref={ref}>
        <SearchSvg />
        <Input
          placeholder="Search for a city"
          value={state.location}
          onChange={({ target }) => {
            dispatch({ type: "setLocation", payload: target.value });
            dispatch({ type: "openAutosearch" });
          }}
          onFocus={() => dispatch({ type: "openAutosearch" })}
        />
        {state.fetchedData.length > 0 && state.isOpen === true && (
          <StyledUl>
            {state.fetchedData.map(
              ({ LocalizedName, Key, Country, AdministrativeArea }) => {
                return (
                  <StyledList key={Key}>
                    <NavLink
                      to={`/cityForecast/${Key}`}
                      onClick={() =>
                        dispatch({
                          type: "setLocation",
                          payload: `${LocalizedName}, ${Country.LocalizedName}`,
                        })
                      }
                    >
                      {LocalizedName}, {Country.LocalizedName} (
                      {AdministrativeArea?.LocalizedName})
                    </NavLink>
                  </StyledList>
                );
              }
            )}
          </StyledUl>
        )}
      </SearchWrapper>
    </SearchBarContainer>
  );
};

export default SearchBar;
