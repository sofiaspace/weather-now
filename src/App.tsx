import { AppContainer } from "./styles/App.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DailyForecast from "./components/days/dailyForecast/DailyForecast";
import Logo from "./components/logo/Logo";
import LocationForecast from "./components/locationForecast/LocationForecast";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Logo />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/cityForecast/:cityid" element={<LocationForecast />} />
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
