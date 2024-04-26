import { AppContainer } from "./styles/App.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DailyForecast from "./components/days/dailyForecast/DailyForecast";
import Logo from "./components/logo/Logo";
import SearchBar from "./components/searchBar/SearchBar";
import LocationForecast from "./components/locationForecast/LocationForecast";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Logo />
        <Routes>
          <Route index element={<SearchBar />} />
          <Route path="/cityForecast/:cityid" element={<LocationForecast />} />
          <Route path="/dailyForecast" element={<DailyForecast />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
