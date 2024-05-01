import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";
import { device } from "./mediaBreakpoints";

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
  background: linear-gradient(
    to right bottom,
    ${colors.darkerBlue1},
    ${colors.darkerBlue2}
  );
  border-radius: 2rem;
  width:inherit;
  height: 80%;
  margin: 0 8rem;

  display: flex;
  align-items: center;

  overflow: hidden;
    flex: 1;

    @media ${device.xl}{
      margin: 0 6rem;
    }
    @media ${device.lg}{
      margin: 0 5rem;
    }
    @media ${device.md}{
      margin: 0 2rem;
      overflow: scroll;
      display: block;
      height: 90%;
    }
    @media ${device.sm}{
      margin: 0 .5rem;
      height: 95%;
    }
}`;
