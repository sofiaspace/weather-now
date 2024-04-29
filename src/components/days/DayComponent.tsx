import React, { FC } from "react";
import { DaysContainer } from "./DayComponent.styles";
import WeatherImg from "../ui/weatherImg/WeatherImg";
import WeatherDetails from "./WeatherDetails";
import { Forecast } from "../../interface/forecast";

interface DayComponentProps extends Forecast {
  onClick: () => void;
}

const DayComponent: FC<DayComponentProps> = ({ onClick, dailyForecast }) => {
  return (
    <DaysContainer onClick={onClick}>
      <WeatherImg dailyForecast={dailyForecast} />
      <WeatherDetails dailyForecast={dailyForecast} />
    </DaysContainer>
  );
};

export default DayComponent;
