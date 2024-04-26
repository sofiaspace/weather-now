import { WeatherAction, WeatherState } from "./WeatherReducer.types";

export const initialState = {
  location: "",
  fetchedData: [],
  isSearched: false,
  isOpen: false,
};

export const WeatherReduce = (state: WeatherState, action: WeatherAction) => {
  switch (action.type) {
    case "setLocation":
      return { ...state, location: action.payload };
    case "submitSearch":
      return { ...state, isSearched: true };
    case "fetchData":
      return { ...state, fetchedData: action.payload };
    case "openAutosearch":
      return { ...state, isOpen: true };
    case "closeAutosearch":
      return { ...state, isOpen: false };

    default:
      throw new Error("Unknown action");
  }
};
