import { FC } from "react";
import {
  AirQualityContainer,
  DateContainer,
  DayContainer,
  StyledDiv,
  TemperatureContainer,
} from "./WeatherDetails.styles";
import { Text } from "../ui/text/Text";
import AirQualityBar from "./airQualityBar/AirQualityBar";
import { dateConverter } from "../ui/dateConverter/DateConverter";
import { Forecast } from "../../interface/forecast";

interface WeatherDetailsProps extends Forecast {}

const WeatherDetails: FC<WeatherDetailsProps> = ({ DailyForecast }) => {
  return (
    <DayContainer>
      <DateContainer>
        <Text variant="body2" color="white">
          {dateConverter(DailyForecast.Date)}
        </Text>
        <AirQualityContainer>
          <StyledDiv>
            <Text variant="body4" color="white">
              AIR QUALITY
            </Text>
            <Text variant="body4" color="white">
              {DailyForecast.AirAndPollen[0].Category}
            </Text>
          </StyledDiv>
          <AirQualityBar DailyForecast={DailyForecast} />
        </AirQualityContainer>
      </DateContainer>

      <TemperatureContainer>
        <Text variant="body5" color="lightText1">
          {DailyForecast.Day.IconPhrase}
        </Text>
        <Text variant="body1" color="white">
          {Math.round(DailyForecast.Temperature.Maximum.Value)}º
        </Text>
      </TemperatureContainer>
    </DayContainer>
  );
};

export default WeatherDetails;
