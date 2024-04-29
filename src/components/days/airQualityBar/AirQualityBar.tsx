import React, { FC } from "react";
import { BarContainer, Input } from "./AirQualityBar.style";
import { Forecast } from "../../../interface/forecast";

interface AirQualityBarProps extends Forecast {}

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
      />
    </BarContainer>
  );
};

export default AirQualityBar;
