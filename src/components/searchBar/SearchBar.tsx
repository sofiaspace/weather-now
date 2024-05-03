import React, { FC, useEffect, useRef } from "react";
import {
  Input,
  SearchBarContainer,
  SearchWrapper,
  StyledList,
  StyledUl,
} from "./SearchBar.styles";
import SearchSvg from "../ui/svgIcon/SearchSvg";
import useWeatherContext from "../../hooks/useWeatherContext";
import { NavLink } from "react-router-dom";

const SearchBar: FC = () => {
  const { state, dispatch } = useWeatherContext();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: any) {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch({ type: "closeAutosearch" });
      }
    }
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
