import { useEffect, useState } from "react";
import { Weather } from "../interface/forecast";

const useFetch = (id: string | undefined) => {
  const [weather, setWeather] = useState<Weather | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchWeatherData = async (id: string) => {
      const cityNumber = parseInt(id);
      setIsLoading(true);
      try {
        const res = await fetch(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityNumber}?apikey=${process.env.REACT_APP_API_KEY}&details=true&metric=true`
        );
        const data = await res.json();

        setWeather(data);
      } catch (err) {
        throw new Error("Error fetching location key");
      }
      setIsLoading(false);
    };
    if (id) {
      fetchWeatherData(id);
    }
  }, [id]);

  return { weather, isLoading };
};

export default useFetch;
