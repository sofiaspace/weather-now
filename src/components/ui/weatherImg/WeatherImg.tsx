import React, { FC } from "react";
import { ImageContainer } from "./Weatherimg.styles";
import { Forecast } from "../../../interface/forecast";
import { iconConverter } from "../iconConverter/iconConverter";

interface WeatherImgProps extends Forecast {}

const WeatherImg: FC<WeatherImgProps> = ({ dailyForecast }) => {
  const iconPhrase = dailyForecast.Day.IconPhrase;

  const icon = `/weatherIcons/${iconConverter(iconPhrase)}.png`;

  return <ImageContainer $icon={icon} />;
};

export default WeatherImg;
