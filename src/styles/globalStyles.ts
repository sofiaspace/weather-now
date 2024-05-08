import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
*,*::before, *::after{
  box-sizing: border-box; 
 
}
html, body{
height: 100%;
width:100%;
background-color: ${colors.lightGrey1};
font-family: "Poppins", sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;
}

#root{
  width:100%;
  height: 100%;

  display: flex;

  overflow: hidden;
}`;
