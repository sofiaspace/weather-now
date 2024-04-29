import React, { FC } from "react";
import { DailyForecastContainer, StyledImage } from "./DailyForecast.styles";
import { useParams } from "react-router-dom";
import {
  Weather,
  rainIcon,
  snowIcon,
  sunriseIcon,
  sunsetIcon,
  temperatureIcon,
  uvIcon,
  windIcon,
} from "../../../styles/variables";
import { timeConverter } from "../../ui/dateConverter/timeConverter";
import { Input } from "../airQualityBar/AirQualityBar.style";

interface DailyForecastProps {}

const DailyForecast: FC<DailyForecastProps> = ({}) => {
  const { dayId } = useParams();
  if (dayId === undefined) {
    return <div>Cannot find day</div>;
  }
  const dayNumber = parseInt(dayId);
  const day = Weather.DailyForecasts[dayNumber];

  if (day === undefined) {
    return <div>Cannot find day</div>;
  }

  return (
    <DailyForecastContainer>
      Sunrise <StyledImage src={sunriseIcon} alt="sunrise" /> :{" "}
      {timeConverter(day.Sun.Rise)}
      Sunset <StyledImage src={sunsetIcon} alt="sunset" /> :{" "}
      {timeConverter(day.Sun.Set)}
      <div>
        Temperature <StyledImage src={temperatureIcon} alt="sunrise" />: H:
        {day.Temperature.Maximum.Value}°C L:
        {day.Temperature.Minimum.Value}°C{" "}
      </div>
      <div>
        Feels like: H:{day.RealFeelTemperature.Maximum.Value}°C L:
        {day.RealFeelTemperature.Minimum.Value}°C{" "}
      </div>
      <div>
        UV Index <StyledImage src={uvIcon} alt="uvIndex" /> :{" "}
        {day.AirAndPollen[5].Category} {day.AirAndPollen[5].Value}
        <Input
          type="range"
          min="0"
          max="10.499"
          step="2.5"
          value={day.AirAndPollen[5].Value}
          readOnly={true}
        />
      </div>
      <div>
        Wind <StyledImage src={windIcon} alt="wind" /> :
        {day.Day.Wind.Speed.Value} km/h Direction:{" "}
        {day.Day.Wind.Direction.Localized}
      </div>
      <div>
        Rain <StyledImage src={rainIcon} alt="sunset" />: {day.Day.Rain.Value}{" "}
        mm Hours of Rain: {day.Day.HoursOfRain}
      </div>
      <div>
        Snow: <StyledImage src={snowIcon} alt="wind" />: {day.Day.Snow.Value} cm
        Hours of snow: {day.Day.HoursOfSnow}
      </div>
      <div>Day description: {day.Day.LongPhrase}</div>
    </DailyForecastContainer>
  );
};

export default DailyForecast;
