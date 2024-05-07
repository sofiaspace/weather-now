import { FC } from "react";
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
import { smallIcons } from "../../../styles/variables";
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
import { Header } from "../../ui/header/Header";

const DailyForecast: FC = () => {
  const { dayId, cityid } = useParams();
  const { weather } = useFetch(cityid);

  if (!dayId || !weather) {
    return <ErrorMessage>Can't find day</ErrorMessage>;
  }
  const dayNumber = parseInt(dayId);
  const day = weather.DailyForecasts[dayNumber];

  if (!day) {
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
            <Header variant="h3" color="white">
              Sunrise
            </Header>
          </Title>

          <Details>
            <Text variant="body3" color="lightText1">
              {timeConverter(day.Sun.Rise)}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.sunsetIcon}
              alt="sunset"
              color="white"
            />
            <Header variant="h3" color="white">
              Sunset
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {timeConverter(day.Sun.Set)}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.temperatureIcon}
              alt="temperature"
              color="white"
            />
            <Header variant="h3" color="white">
              Temperature
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              H:
              {day.Temperature.Maximum.Value}°C L:
              {day.Temperature.Minimum.Value}°C
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <Header variant="h3" color="white">
              Feels like
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              H:
              {day.RealFeelTemperature.Maximum.Value}°C L:
              {day.RealFeelTemperature.Minimum.Value}°C{" "}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.humidityIcon}
              alt="humidity"
              color="white"
            />
            <Header variant="h3" color="white">
              RH
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Day.RelativeHumidity.Average}%
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.uvIcon} alt="uvIndex" color="white" />
            <Header variant="h3" color="white">
              UV Index
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.AirAndPollen[5].Category} {day.AirAndPollen[5].Value}
            </Text>
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
            <Header variant="h3" color="white">
              Solar Irradiance
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Day.SolarIrradiance.Value} W/m²
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.rainIcon} alt="rain" color="white" />
            <Header variant="h3" color="white">
              Rain
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Day.Rain.Value} mm
            </Text>
            <Text variant="body3" color="lightText1">
              Hours of Rain {day.Day.HoursOfRain}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.windIcon} alt="wind" color="white" />
            <Header variant="h3" color="white">
              Wind
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Day.Wind.Speed.Value} km/h{" "}
            </Text>
            <Text variant="body3" color="lightText1">
              Direction {day.Day.Wind.Direction.Localized}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.snowIcon} alt="snow" color="white" />
            <Header variant="h3" color="white">
              Snow
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Day.Snow.Value} cm
            </Text>
            <Text variant="body3" color="lightText1">
              Hours of Snow {day.Day.HoursOfSnow}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage src={smallIcons.sunIcon} alt="sunIcon" color="white" />
            <Header variant="h3" color="white">
              Day description
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Day.LongPhrase}
            </Text>
          </Details>
        </StyledContainer>

        <StyledContainer>
          <Title>
            <StyledImage
              src={smallIcons.moonIcon}
              alt="moonIcon"
              color="white"
            />
            <Header variant="h3" color="white">
              Night description
            </Header>
          </Title>
          <Details>
            <Text variant="body3" color="lightText1">
              {day.Night.LongPhrase}
            </Text>
          </Details>
        </StyledContainer>
      </DailyForecastContainer>
    </MainForecastContainer>
  );
};

export default DailyForecast;
