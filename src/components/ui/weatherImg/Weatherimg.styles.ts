import styled from "styled-components";

interface StyleProps {
  $icon: string;
}

export const ImageContainer = styled.div<StyleProps>`
  position: absolute;
  height: 7rem;
  width: 100%;

  background-image: url(${({ $icon }) => $icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: center;
  z-index: 1;
`;
