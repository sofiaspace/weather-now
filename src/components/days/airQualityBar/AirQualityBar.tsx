import React, { FC } from "react";
import { BarContainer, Input } from "./AirQualityBar.style";
import { DailyForecast } from "../../../interface/dailyForecast";

interface AirQualityBarProps extends DailyForecast {}

const AirQualityBar: FC<AirQualityBarProps> = ({ dailyForecast }) => {
  return (
    <BarContainer>
      <Input
        type="range"
        min="0"
        max="5"
        step="1"
        value={dailyForecast.AirAndPollen[0].Value}
        readOnly={true}
      ></Input>
    </BarContainer>
  );
};

export default AirQualityBar;
