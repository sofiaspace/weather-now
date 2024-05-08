export const iconConverter = (iconPhrase: string) => {
  switch (iconPhrase) {
    case "Sunny":
      return "sunny";
    case "Mostly sunny":
      return "mostlySunny";
    case "Partly sunny":
      return "partlySunny";
    case "Intermittent Clouds":
      return "intermittentClouds";
    case "Hazy Sunshine":
      return "hazySunshine";
    case "Mostly cloudy":
      return "mostlyCloudy";
    case "Cloudy":
      return "cloudy";
    case "Dreary (Overcast)":
      return "dreary";
    case "Fog":
      return "fog";
    case "Showers":
      return "showers";
    case "Mostly cloudy w/ showers":
      return "mostlyCloudyShowers";
    case "Partly sunny w/ showers":
      return "partlySunnyShowers";
    case "T-Storms":
      return "t-storms";
    case "Mostly Cloudy w/ T-Storms":
      return "mostlyCloudyT-Storms";
    case "Partly Sunny w/ T-Storms":
      return "partlySunnyT-Storms";
    case "Rain":
      return "rain";
    case "Flurries":
      return "flurries";
    case "Mostly Cloudy w/ Flurries":
      return "mostlyCloudyFlurries";
    case "Partly Sunny w/ Flurries":
      return "partlySunnyFlurries";
    case "Snow":
      return "snow";
    case "Mostly Cloudy w/ Snow":
      return "mostlyCloudySnow";
    case "Ice":
      return "ice";
    case "Sleet":
      return "sleet";
    case "Freezing Rain":
      return "freezingRain";
    case "Rain and Snow":
      return "rainAndSnow";
    case "Hot":
      return "hot";
    case "Cold":
      return "cold";
    case "Windy":
      return "windy";

    default:
      return "hazySunshine";
  }
};
