import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error("WeatherContext was used outside WeatherProvider");
  }
  return context;
};

export default useWeatherContext;
