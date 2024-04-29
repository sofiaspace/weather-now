import React, { FC } from "react";
import DayComponent from "./DayComponent";
import { DisplayDaysContainer } from "./DayComponent.styles";
import { useNavigate } from "react-router-dom";
import { Weather } from "../../styles/variables";

interface DisplayDaysProps {}

const DisplayDays: FC<DisplayDaysProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <DisplayDaysContainer>
      {Weather.DailyForecasts.map((dailyForecast, i) => {
        return (
          <DayComponent
            key={i}
            onClick={() => navigate(`/dailyForecast/${i}`)}
            dailyForecast={dailyForecast}
          />
        );
      })}
    </DisplayDaysContainer>
  );
};

export default DisplayDays;
