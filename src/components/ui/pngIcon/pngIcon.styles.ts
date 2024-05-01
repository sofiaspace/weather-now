import styled from "styled-components";
import { device } from "../../../styles/mediaBreakpoints";

interface Color {
  color: string;
}

const handleColor = (color: string) => {
  if (color === "white") {
    return "filter: invert(100%) sepia(93%) saturate(0%) hue-rotate(201deg) brightness(106%) contrast(106%);";
  } else {
    return "filter:none;";
  }
};

export const StyledImage = styled.img<Color>`
  width: 1.2rem;

  ${({ color }) => handleColor(color)};

  @media ${device.sm} {
    padding-right: 0.1rem;
  }
`;
