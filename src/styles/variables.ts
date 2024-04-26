export const colors = {
  darkBlue1: "#45278B",
  darkerBlue1: "#2E335A",
  darkerBlue2: "#1C1B33",
  lightBlue1: "#362A84",
  lightBlue2: "#3658B1",
  lighterBlue1: "#5936B4",
  lightGrey1: "#A499C0",
  lightText1: "#EBEBF599",
  white: "#FFFFFF",
  black: "#000000",
  lightViolet1: "#C159EC",
  lighViolet2: "#C427FB",
  boxShadow: "#000040",
};

export const Weather = {
  Headline: {
    EffectiveDate: "2024-04-25T14:00:00+03:00",
    EffectiveEpochDate: 1714042800,
    Severity: 7,
    Text: "Breezy Thursday afternoon",
    Category: "wind",
    EndDate: "2024-04-25T20:00:00+03:00",
    EndEpochDate: 1714064400,
    MobileLink:
      "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2024-04-25T07:00:00+03:00",
      EpochDate: 1714017600,
      Sun: {
        Rise: "2024-04-25T06:36:00+03:00",
        EpochRise: 1714016160,
        Set: "2024-04-25T20:11:00+03:00",
        EpochSet: 1714065060,
      },
      Moon: {
        Rise: "2024-04-25T21:58:00+03:00",
        EpochRise: 1714071480,
        Set: "2024-04-26T07:38:00+03:00",
        EpochSet: 1714106280,
        Phase: "WaningGibbous",
        Age: 17,
      },
      Temperature: {
        Minimum: {
          Value: 11.4,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 22.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 10.7,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 26.9,
          Unit: "C",
          UnitType: 17,
          Phrase: "Very Warm",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 10.7,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 22.2,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 11.3,
      DegreeDaySummary: {
        Heating: {
          Value: 1,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 28,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Mold",
          Value: 32767,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 272,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "UVIndex",
          Value: 9,
          Category: "Very High",
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 5,
        IconPhrase: "Hazy sunshine",
        HasPrecipitation: false,
        ShortPhrase: "Hazy; breezy this afternoon",
        LongPhrase: "Hazy sunshine; breezy this afternoon",
        PrecipitationProbability: 2,
        ThunderstormProbability: 0,
        RainProbability: 2,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 14.8,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 249,
            Localized: "WSW",
            English: "WSW",
          },
        },
        WindGust: {
          Speed: {
            Value: 46.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 241,
            Localized: "WSW",
            English: "WSW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 31,
        Evapotranspiration: {
          Value: 4.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 7191.9,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 35,
          Maximum: 51,
          Average: 42,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 11,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 16,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 13.5,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 14.9,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 20.7,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 17.7,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
        ShortPhrase: "Mostly clear",
        LongPhrase: "Mostly clear",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 14.8,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 300,
            Localized: "WNW",
            English: "WNW",
          },
        },
        WindGust: {
          Speed: {
            Value: 40.7,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 277,
            Localized: "W",
            English: "W",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 20,
        Evapotranspiration: {
          Value: 0.8,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 156.1,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 44,
          Maximum: 70,
          Average: 57,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 8.9,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 11.9,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 10.4,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 11.3,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 15.4,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 13.2,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=1&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2024-04-26T07:00:00+03:00",
      EpochDate: 1714104000,
      Sun: {
        Rise: "2024-04-26T06:34:00+03:00",
        EpochRise: 1714102440,
        Set: "2024-04-26T20:12:00+03:00",
        EpochSet: 1714151520,
      },
      Moon: {
        Rise: "2024-04-26T23:04:00+03:00",
        EpochRise: 1714161840,
        Set: "2024-04-27T08:18:00+03:00",
        EpochSet: 1714195080,
        Phase: "WaningGibbous",
        Age: 18,
      },
      Temperature: {
        Minimum: {
          Value: 12.5,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 21.4,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 11.3,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 23.9,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 11.3,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 19,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 11.9,
      DegreeDaySummary: {
        Heating: {
          Value: 1,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 4,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 27,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Mold",
          Value: 32767,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 354,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "UVIndex",
          Value: 9,
          Category: "Very High",
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 5,
        IconPhrase: "Intermittent Clouds",
        HasPrecipitation: false,
        ShortPhrase: "Hazy sunshine",
        LongPhrase: "Hazy sunshine",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 230,
            Localized: "SW",
            English: "SW",
          },
        },
        WindGust: {
          Speed: {
            Value: 33.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 206,
            Localized: "SSW",
            English: "SSW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 6,
        Evapotranspiration: {
          Value: 4.6,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 8235.5,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 35,
          Maximum: 60,
          Average: 42,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 9.7,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 12.7,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 11.9,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 12.9,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 17.4,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 16.1,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
        ShortPhrase: "Patchy clouds",
        LongPhrase: "Patchy clouds",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 118,
            Localized: "ESE",
            English: "ESE",
          },
        },
        WindGust: {
          Speed: {
            Value: 18.5,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 197,
            Localized: "SSW",
            English: "SSW",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 39,
        Evapotranspiration: {
          Value: 0.5,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 8,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 46,
          Maximum: 68,
          Average: 61,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 9.6,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 11.9,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 10.5,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 11.1,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 15.9,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 13.2,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=2&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2024-04-27T07:00:00+03:00",
      EpochDate: 1714190400,
      Sun: {
        Rise: "2024-04-27T06:33:00+03:00",
        EpochRise: 1714188780,
        Set: "2024-04-27T20:13:00+03:00",
        EpochSet: 1714237980,
      },
      Moon: {
        Rise: null,
        EpochRise: null,
        Set: "2024-04-27T08:18:00+03:00",
        EpochSet: 1714195080,
        Phase: "WaningGibbous",
        Age: 19,
      },
      Temperature: {
        Minimum: {
          Value: 13.7,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 22.7,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 11.9,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 25.6,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 11.9,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 20.5,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 8.6,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 25,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Mold",
          Value: 32767,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 519,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "UVIndex",
          Value: 9,
          Category: "Very High",
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 5,
        IconPhrase: "Hazy sunshine",
        HasPrecipitation: false,
        ShortPhrase: "Hazy sun",
        LongPhrase: "Hazy sun",
        PrecipitationProbability: 2,
        ThunderstormProbability: 0,
        RainProbability: 2,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.1,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 309,
            Localized: "NW",
            English: "NW",
          },
        },
        WindGust: {
          Speed: {
            Value: 33.3,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 274,
            Localized: "W",
            English: "W",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 42,
        Evapotranspiration: {
          Value: 4.1,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 7055.4,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 37,
          Maximum: 56,
          Average: 43,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 10,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 14,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 12.9,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 11.7,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 18.9,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 17,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
        ShortPhrase: "Clear",
        LongPhrase: "Clear",
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.1,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 1,
            Localized: "N",
            English: "N",
          },
        },
        WindGust: {
          Speed: {
            Value: 22.2,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 7,
            Localized: "N",
            English: "N",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 0.5,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 163.5,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 44,
          Maximum: 68,
          Average: 61,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 10.8,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 13,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 11.6,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 13.1,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 17,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 14.4,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=3&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2024-04-28T07:00:00+03:00",
      EpochDate: 1714276800,
      Sun: {
        Rise: "2024-04-28T06:32:00+03:00",
        EpochRise: 1714275120,
        Set: "2024-04-28T20:14:00+03:00",
        EpochSet: 1714324440,
      },
      Moon: {
        Rise: "2024-04-28T00:08:00+03:00",
        EpochRise: 1714252080,
        Set: "2024-04-28T09:09:00+03:00",
        EpochSet: 1714284540,
        Phase: "WaningGibbous",
        Age: 20,
      },
      Temperature: {
        Minimum: {
          Value: 15.1,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 24,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 13.6,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 25.2,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 13.6,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 21.5,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 13.7,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 2,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 24,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Mold",
          Value: 32767,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 825,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "UVIndex",
          Value: 9,
          Category: "Very High",
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 5,
        IconPhrase: "Hazy sunshine",
        HasPrecipitation: false,
        ShortPhrase: "Hazy sun",
        LongPhrase: "Hazy sun",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 16.7,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 16,
            Localized: "NNE",
            English: "NNE",
          },
        },
        WindGust: {
          Speed: {
            Value: 35.2,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 19,
            Localized: "NNE",
            English: "NNE",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 5.3,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 8309.3,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 24,
          Maximum: 61,
          Average: 36,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 11.6,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 13.4,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 12.6,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 14.5,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 18.5,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 17.3,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
        ShortPhrase: "Clear",
        LongPhrase: "Clear",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.1,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 356,
            Localized: "N",
            English: "N",
          },
        },
        WindGust: {
          Speed: {
            Value: 25.9,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 16,
            Localized: "NNE",
            English: "NNE",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 1,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 167.1,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 29,
          Maximum: 60,
          Average: 47,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 10.3,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 11.4,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 10.9,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 13.9,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 16.4,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 14.7,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=4&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2024-04-29T07:00:00+03:00",
      EpochDate: 1714363200,
      Sun: {
        Rise: "2024-04-29T06:31:00+03:00",
        EpochRise: 1714361460,
        Set: "2024-04-29T20:15:00+03:00",
        EpochSet: 1714410900,
      },
      Moon: {
        Rise: "2024-04-29T01:08:00+03:00",
        EpochRise: 1714342080,
        Set: "2024-04-29T10:08:00+03:00",
        EpochSet: 1714374480,
        Phase: "WaningGibbous",
        Age: 21,
      },
      Temperature: {
        Minimum: {
          Value: 15.5,
          Unit: "C",
          UnitType: 17,
        },
        Maximum: {
          Value: 24.4,
          Unit: "C",
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 13.8,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 25.2,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 13.8,
          Unit: "C",
          UnitType: 17,
          Phrase: "Cool",
        },
        Maximum: {
          Value: 21.7,
          Unit: "C",
          UnitType: 17,
          Phrase: "Pleasant",
        },
      },
      HoursOfSun: 13.7,
      DegreeDaySummary: {
        Heating: {
          Value: 0,
          Unit: "C",
          UnitType: 17,
        },
        Cooling: {
          Value: 2,
          Unit: "C",
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: "AirQuality",
          Value: 0,
          Category: "Very Good",
          CategoryValue: 1,
          Type: "Ozone",
        },
        {
          Name: "Grass",
          Value: 23,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Mold",
          Value: 32767,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "Ragweed",
          Value: 0,
          Category: "Low",
          CategoryValue: 1,
        },
        {
          Name: "Tree",
          Value: 1024,
          Category: "High",
          CategoryValue: 3,
        },
        {
          Name: "UVIndex",
          Value: 9,
          Category: "Very High",
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 5,
        IconPhrase: "Hazy sunshine",
        HasPrecipitation: false,
        ShortPhrase: "Breezy with hazy sun",
        LongPhrase: "Breezy with hazy sun",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 20.4,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 13,
            Localized: "NNE",
            English: "NNE",
          },
        },
        WindGust: {
          Speed: {
            Value: 40.7,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 19,
            Localized: "NNE",
            English: "NNE",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 5.6,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 8344,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 30,
          Maximum: 54,
          Average: 37,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 12,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 14,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 13.5,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 15.4,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 19.2,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 18,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 33,
        IconPhrase: "Clear",
        HasPrecipitation: false,
        ShortPhrase: "Clear",
        LongPhrase: "Clear",
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 358,
            Localized: "N",
            English: "N",
          },
        },
        WindGust: {
          Speed: {
            Value: 27.8,
            Unit: "km/h",
            UnitType: 7,
          },
          Direction: {
            Degrees: 9,
            Localized: "N",
            English: "N",
          },
        },
        TotalLiquid: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Rain: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        Snow: {
          Value: 0,
          Unit: "cm",
          UnitType: 4,
        },
        Ice: {
          Value: 0,
          Unit: "mm",
          UnitType: 3,
        },
        HoursOfPrecipitation: 0,
        HoursOfRain: 0,
        HoursOfSnow: 0,
        HoursOfIce: 0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 0.8,
          Unit: "mm",
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 170.7,
          Unit: "W/m²",
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 44,
          Maximum: 69,
          Average: 60,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 12.6,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 13.8,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 13,
            Unit: "C",
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 15,
            Unit: "C",
            UnitType: 17,
          },
          Maximum: {
            Value: 17.8,
            Unit: "C",
            UnitType: 17,
          },
          Average: {
            Value: 16,
            Unit: "C",
            UnitType: 17,
          },
        },
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=5&unit=c&lang=en-us",
      Link: "http://www.accuweather.com/en/gr/athens/182536/daily-weather-forecast/182536?day=5&unit=c&lang=en-us",
    },
  ],
};
