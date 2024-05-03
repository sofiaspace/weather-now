import React, { FC } from "react";
import SearchBar from "../../searchBar/SearchBar";
import DescriptionComponent from "./DescriptionComponent";
import { MainPageContainer } from "./MainPage.style";

interface MainPageProps {}

const MainPage: FC<MainPageProps> = ({}) => {
  return (
    <MainPageContainer>
      <SearchBar />
      <DescriptionComponent />
    </MainPageContainer>
  );
};

export default MainPage;
