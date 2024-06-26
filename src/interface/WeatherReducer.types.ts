export interface WeatherData {
  LocalizedName: string;
  Key: string;
  Country: CountryData;
  AdministrativeArea: AreaData;
}

interface CountryData {
  LocalizedName: string;
}

interface AreaData {
  LocalizedName: string;
}

export interface WeatherState {
  location: string;
  fetchedData: WeatherData[] | undefined;
  isOpen: boolean;
}

export type WeatherAction =
  | { type: "setLocation"; payload: string }
  | { type: "fetchData"; payload: WeatherData[] | undefined }
  | { type: "openAutosearch" }
  | { type: "closeAutosearch" };
