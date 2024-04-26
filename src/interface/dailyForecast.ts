export interface DailyForecast {
  dailyForecast: {
    Date: string;
    AirAndPollen: Array<{ Value: number; Category: string }>;
    Day: { IconPhrase: string };
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
