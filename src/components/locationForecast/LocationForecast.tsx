import { FC, useEffect } from "react";
import { Text } from "../ui/text/Text";
import {
  LocationForecastContainer,
  StyledDiv,
} from "./LocationForecast.styles";
import DisplayDays from "../days/DisplayDays";
import { useNavigate } from "react-router-dom";
import { smallIcons } from "../../styles/variables";
import { StyledImage } from "../ui/pngIcon/pngIcon.styles";
import { WeatherState } from "../../interface/WeatherReducer.types";

interface LocationForecastProps {
  state: WeatherState;
}

const LocationForecast: FC<LocationForecastProps> = ({ state }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.location) {
      navigate("/");
    }
  }, [state.location, navigate]);

  return (
    <LocationForecastContainer>
      <StyledDiv>
        <StyledImage src={smallIcons.mapIcon} alt="map" color="black" />
        <Text variant="body2" color="white">
          {state.location}
        </Text>
      </StyledDiv>
      <DisplayDays />
    </LocationForecastContainer>
  );
};

export default LocationForecast;
