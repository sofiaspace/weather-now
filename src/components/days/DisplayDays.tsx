import React, { FC } from "react";
import DayComponent from "./DayComponent";
import { DisplayDaysContainer } from "./DayComponent.styles";
import { useNavigate, useParams } from "react-router-dom";
import { DailyForecast } from "../../interface/forecast";
import useFetch from "../../hooks/useFetch";
import ErrorMessage from "../ui/errorMessage/ErrorMessage";

interface DisplayDaysProps {}

const DisplayDays: FC<DisplayDaysProps> = ({}) => {
  const navigate = useNavigate();
  const { cityid } = useParams();
  const { weather } = useFetch(cityid);
  console.log(weather);

  if (weather === undefined)
    return <ErrorMessage>Can't find forecast</ErrorMessage>;

  return (
    <DisplayDaysContainer>
      {weather.DailyForecasts.map((DailyForecast: DailyForecast, i: number) => {
        return (
          <DayComponent
            key={i}
            onClick={() => navigate(`/dailyForecast/${cityid}/${i}`)}
            DailyForecast={DailyForecast}
          />
        );
      })}
    </DisplayDaysContainer>
  );
};

export default DisplayDays;
