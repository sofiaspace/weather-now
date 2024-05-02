import React, {
  FC,
  PropsWithChildren,
  Reducer,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { WeatherReduce, initialState } from "../reducer/WeatherReducer";
import {
  WeatherAction,
  WeatherData,
  WeatherState,
} from "../reducer/WeatherReducer.types";

interface Props {
  dispatch: React.Dispatch<WeatherAction>;
  state: WeatherState;
}

export const WeatherContext = createContext<Props>({} as Props);

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<WeatherState, WeatherAction>>(
    WeatherReduce,
    initialState
  );

  useEffect(() => {
    async function fetchLocation() {
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
    }
    if (state.location.length > 0) {
      fetchLocation();
    }
  }, [state.location]);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
