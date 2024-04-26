import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
html, body{
height: 100%;
width:100%;
background-color: ${colors.lightGrey1};
font-family: "Poppins", sans-serif;
box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
}

body{
  padding: 2.5rem;
}

#root{
  width:inherit;
  height: inherit;
  max-height: 35rem;
  margin: 0 6rem;

  display: flex;
  align-items: center;
}`;
