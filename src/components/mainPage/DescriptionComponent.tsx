import React, { FC } from "react";
import { Text } from "../ui/text/Text";
import { DescriptionWrapper } from "./MainPage.style";

const DescriptionComponent: FC = () => {
  return (
    <DescriptionWrapper>
      <Text color="white" variant="body2">
        Welcome to WeatherNow, your personal weather application. Discover the
        weather in any corner of the globe, by simply typing in the search
        engine the city you are looking for. You will get a panoramic view of
        the week with our 5-day weather outlook. By clicking on a specific day
        you can dive deeper into the daily forecast with all weather details.
      </Text>
    </DescriptionWrapper>
  );
};

export default DescriptionComponent;
