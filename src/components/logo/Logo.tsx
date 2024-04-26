import React, { FC } from "react";
import { LogoContainer } from "./Logo.styles";
import { Text } from "../ui/text/Text";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <LogoContainer>
      <Text variant="headline" color="lightText1">
        WeatherNow
      </Text>
    </LogoContainer>
  );
};

export default Logo;
