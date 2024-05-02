import React, { FC } from "react";
import {
  DailyForecastContainer,
  Details,
  MainForecastContainer,
  StyledContainer,
  StyledSpan,
  TextWrapper,
  Title,
} from "./DailyForecast.styles";
import { useParams } from "react-router-dom";
import { Weather, smallIcons } from "../../../styles/variables";
import { timeConverter } from "../../ui/dateConverter/timeConverter";
import { Input } from "../airQualityBar/AirQualityBar.style";
import { StyledImage } from "../../ui/pngIcon/pngIcon.styles";
import ErrorMessage from "../../ui/errorMessage/ErrorMessage";
import { Text } from "../../ui/text/Text";
import {
  dateConverter,
  dayConverter,
} from "../../ui/dateConverter/DateConverter";
import useFetch from "../../../hooks/useFetch";

interface DailyForecastProps {}

const DailyForecast: FC<DailyForecastProps> = ({}) => {
  const { dayId, cityId } = useParams();
  const { weather } = useFetch(cityId);
  if (dayId === undefined || weather === undefined) {
    return <ErrorMessage>Can't find day</ErrorMessage>;
  }
  const dayNumber = parseInt(dayId);
  const day = Weather.DailyForecasts[dayNumber];

  if (day === undefined) {
    return <ErrorMessage>Can't find day</ErrorMessage>;
  }

  return (
    <MainForecastContainer>
      <TextWrapper>
        <Text variant="body2" color="white">
          Daily forecast for {dayConverter(day.Date)}, {dateConverter(day.Date)}
        </Text>
      </TextWrapper>
      <DailyForecastContainer>
        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.sunriseIcon}
              alt="sunrise"
              color="white"
            />
            Sunrise
          </Title>
          <div>
            <Details>{timeConverter(day.Sun.Rise)}</Details>
          </div>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.sunsetIcon}
              alt="sunset"
              color="white"
            />
            Sunset
          </Title>
          <Details>{timeConverter(day.Sun.Set)}</Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.temperatureIcon}
              alt="temperature"
              color="white"
            />
            Temperature{" "}
          </Title>
          <Details>
            H:
            {day.Temperature.Maximum.Value}°C L:
            {day.Temperature.Minimum.Value}°C
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>Feels like</Title>
          <Details>
            H:
            {day.RealFeelTemperature.Maximum.Value}°C L:
            {day.RealFeelTemperature.Minimum.Value}°C
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.humidityIcon}
              alt="humidity"
              color="white"
            />
            RH
          </Title>
          <Details>{day.Day.RelativeHumidity.Average}%</Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.uvIcon} alt="uvIndex" color="white" />
            UV Index
          </Title>
          <Details>
            <span>
              {day.AirAndPollen[5].Category} {day.AirAndPollen[5].Value}
            </span>
            <StyledSpan>
              <Input
                type="range"
                min="0"
                max="10.499"
                step="2.5"
                value={day.AirAndPollen[5].Value}
                readOnly={true}
              />
            </StyledSpan>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.solarIrradiance}
              alt="solarIrradiance"
              color="white"
            />
            Solar Irradiance
          </Title>
          <Details>
            <span>{day.Day.SolarIrradiance.Value} W/m²</span>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.rainIcon} alt="rain" color="white" />
            Rain
          </Title>
          <Details>
            <span>{day.Day.Rain.Value} mm</span>
            <span>Hours of Rain {day.Day.HoursOfRain}</span>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.windIcon} alt="wind" color="white" />
            Wind
          </Title>
          <Details>
            <span>{day.Day.Wind.Speed.Value} km/h </span>
            <span>Direction {day.Day.Wind.Direction.Localized}</span>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.snowIcon} alt="snow" color="white" />
            Snow
          </Title>
          <Details>
            <span>{day.Day.Snow.Value} cm</span>
            <span>Hours of Snow {day.Day.HoursOfSnow}</span>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.sunIcon} alt="sunIcon" color="white" />
            Day description{" "}
          </Title>
          <Details>{day.Day.LongPhrase}</Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.moonIcon}
              alt="moonIcon"
              color="white"
            />
            Night description{" "}
          </Title>
          <Details>{day.Night.LongPhrase}</Details>
        </StyledContainer>
      </DailyForecastContainer>
    </MainForecastContainer>
  );
};

export default DailyForecast;
