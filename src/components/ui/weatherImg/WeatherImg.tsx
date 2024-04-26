import React, { FC } from "react";
import { ImageContainer } from "./Weatherimg.styles";
import { DailyForecast } from "../../../interface/dailyForecast";

interface WeatherImgProps extends DailyForecast {}

const WeatherImg: FC<WeatherImgProps> = ({ dailyForecast }) => {
  return <ImageContainer />;
};

export default WeatherImg;
