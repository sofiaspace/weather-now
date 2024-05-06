import { useEffect, useState } from "react";
import { Weather } from "../interface/forecast";
import useWeatherContext from "./useWeatherContext";

const useFetch = (id: string | undefined) => {
  const [weather, setWeather] = useState<Weather | undefined>();
  const { dispatch } = useWeatherContext();

  useEffect(() => {
    if (!id) return;

    const fetchWeatherData = async (id: string) => {
      const cityNumber = parseInt(id);
      dispatch({ type: "loading" });
      try {
        const res = await fetch(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityNumber}?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`
        );
        const data = await res.json();

        setWeather(data);
      } catch (err) {
        throw new Error("Error fetching location key");
      }
      dispatch({ type: "stopLoading" });
    };
    if (id) {
      fetchWeatherData(id);
    }
  }, [id, dispatch]);

  return { weather };
};

export default useFetch;
