import { FC } from "react";
import SearchBar from "../searchBar/SearchBar";
import DescriptionComponent from "./DescriptionComponent";
import { MainPageContainer } from "./MainPage.style";
import {
  WeatherAction,
  WeatherState,
} from "../../interface/WeatherReducer.types";

interface MainPageProps {
  dispatch: React.Dispatch<WeatherAction>;
  state: WeatherState;
}

const MainPage: FC<MainPageProps> = ({ state, dispatch }) => {
  return (
    <MainPageContainer>
      <SearchBar state={state} dispatch={dispatch} />
      <DescriptionComponent />
    </MainPageContainer>
  );
};

export default MainPage;
