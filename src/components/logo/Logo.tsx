import { FC } from "react";
import { LogoContainer } from "./Logo.styles";
import { Header } from "../ui/header/Header";

const Logo: FC = () => {
  return (
    <LogoContainer>
      <Header variant="h1" color="lightText1">
        WeatherNow
      </Header>
    </LogoContainer>
  );
};

export default Logo;
