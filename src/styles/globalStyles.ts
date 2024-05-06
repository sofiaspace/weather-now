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
  width:inherit;
  height: 100%;
  margin: 0 8rem;

  display: flex;
  align-items: center;

  overflow: hidden;

    @media ${device.xl}{
      margin: 0 6rem;
    }
    @media ${device.lg}{
      margin: 0 5rem;
    }
    @media ${device.md}{
      margin: 0 3rem; 
    }
    @media ${device.sm}{
      margin: auto;
      align-items: unset;
      overflow: auto;
    }
}`;
