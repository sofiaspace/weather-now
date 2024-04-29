import React, { FC } from "react";
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

const WeatherDetails: FC<WeatherDetailsProps> = ({ dailyForecast }) => {
  return (
    <DayContainer>
      <DateContainer>
        <Text variant="body2" color="white">
          {dateConverter(dailyForecast.Date)}
        </Text>
        <AirQualityContainer>
          <StyledDiv>
            <Text variant="body3" color="white">
              AIR QUALITY
            </Text>
            <Text variant="body3" color="white">
              {dailyForecast.AirAndPollen[0].Category}
            </Text>
          </StyledDiv>
          <AirQualityBar dailyForecast={dailyForecast} />
        </AirQualityContainer>
      </DateContainer>

      <TemperatureContainer>
        <Text variant="body3" color="lightText1">
          {dailyForecast.Day.IconPhrase}
        </Text>
        <Text variant="body1" color="white">
          {Math.round(dailyForecast.Temperature.Maximum.Value)}º
        </Text>
      </TemperatureContainer>
    </DayContainer>
  );
};

export default WeatherDetails;
