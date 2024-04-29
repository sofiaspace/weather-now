export interface Forecast {
  dailyForecast: {
    Date: string;
    AirAndPollen: Array<{ Value: number; Category: string; Name: string }>;
    Day: {
      IconPhrase: string;
      LongPhrase: string;
      Wind: {
        Speed: {
          Value: number;
        };
        Direction: {
          Localized: string;
        };
      };
      Rain: {
        Value: number;
      };

      Snow: {
        Value: number;
      };
      HoursOfRain: number;
      HoursOfSnow: number;
    };
    Sun: {
      Rise: string;
      Set: string;
    };
    Temperature: {
      Minimum: {
        Value: number;
      };
      Maximum: {
        Value: number;
      };
    };
    RealFeelTemperature: {
      Minimum: {
        Value: number;
      };
      Maximum: {
        Value: number;
      };
    };
  };
}
