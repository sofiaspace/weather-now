import { FC } from "react";
import DayComponent from "./DayComponent";
import { DisplayDaysContainer } from "./DayComponent.styles";
import { useNavigate, useParams } from "react-router-dom";
import { DailyForecast } from "../../interface/forecast";
import useFetch from "../../hooks/useFetch";
import ErrorMessage from "../ui/errorMessage/ErrorMessage";
import Loading from "../ui/loadingMessage/Loading";

const DisplayDays: FC = () => {
  const navigate = useNavigate();
  const { cityid } = useParams();
  const { weather, isLoading } = useFetch(cityid);

  return (
    <DisplayDaysContainer>
      {isLoading && <Loading />}
      {!weather ? (
        <ErrorMessage>Can't find forecast</ErrorMessage>
      ) : (
        weather.DailyForecasts.map((DailyForecast: DailyForecast, i) => {
          return (
            <DayComponent
              key={DailyForecast.Date.toString()}
              onClick={() => navigate(`/dailyForecast/${cityid}/${i}`)}
              DailyForecast={DailyForecast}
            />
          );
        })
      )}
    </DisplayDaysContainer>
  );
};

export default DisplayDays;
