import React, { FC, useEffect } from "react";
import { Text } from "../ui/text/Text";
import { LocationForecastContainer } from "./LocationForecast.styles";
import useWeatherContext from "../../hooks/useWeatherContext";
import DisplayDays from "../days/DisplayDays";
import { useNavigate } from "react-router-dom";

interface LocationForecastProps {}

const LocationForecast: FC<LocationForecastProps> = ({}) => {
  const { state } = useWeatherContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.location) {
      navigate("/");
    }
  }, [state.location, navigate]);

  return (
    <LocationForecastContainer>
      {/* <StyledDiv> */}
      <Text variant="body2" color="white">
        {state.location}
      </Text>
      {/* </StyledDiv> */}
      <DisplayDays />
    </LocationForecastContainer>
  );
};

export default LocationForecast;
