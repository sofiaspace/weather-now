import { FC } from "react";
import { DaysContainer } from "./DayComponent.styles";
import WeatherImg from "../ui/weatherImg/WeatherImg";
import WeatherDetails from "./WeatherDetails";
import { Forecast } from "../../interface/forecast";

interface DayComponentProps extends Forecast {
  onClick: () => void;
}

const DayComponent: FC<DayComponentProps> = ({ onClick, DailyForecast }) => {
  return (
    <DaysContainer onClick={onClick}>
      <WeatherImg DailyForecast={DailyForecast} />
      <WeatherDetails DailyForecast={DailyForecast} />
    </DaysContainer>
  );
};

export default DayComponent;
