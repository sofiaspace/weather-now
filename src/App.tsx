import { Reducer, useReducer } from "react";
import { AppContainer } from "./styles/App.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WeatherAction, WeatherState } from "./interface/WeatherReducer.types";
import Logo from "./components/logo/Logo";
import MainPage from "./components/mainPage/MainPage";
import DailyForecast from "./components/days/dailyForecast/DailyForecast";
import LocationForecast from "./components/locationForecast/LocationForecast";

export const initialState = {
  location: "",
  fetchedData: [],
  isSearched: false,
  isLoading: false,
  isOpen: false,
};

export const WeatherReduce = (state: WeatherState, action: WeatherAction) => {
  switch (action.type) {
    case "setLocation":
      return { ...state, location: action.payload };
    case "loading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: false };
    case "submitSearch":
      return { ...state, isSearched: true };
    case "fetchData":
      return { ...state, fetchedData: action.payload };
    case "openAutosearch":
      return { ...state, isOpen: true };
    case "closeAutosearch":
      return { ...state, isOpen: false };

    default:
      throw new Error("Unknown action");
  }
};

function App() {
  const [state, dispatch] = useReducer<Reducer<WeatherState, WeatherAction>>(
    WeatherReduce,
    initialState
  );
  return (
    <BrowserRouter>
      <AppContainer>
        <Logo />
        <Routes>
          <Route
            index
            element={<MainPage state={state} dispatch={dispatch} />}
          />
          <Route
            path="/cityForecast/:cityid"
            element={<LocationForecast state={state} />}
          />
          <Route
            path="/dailyForecast/:cityid/:dayId"
            element={<DailyForecast />}
          />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
