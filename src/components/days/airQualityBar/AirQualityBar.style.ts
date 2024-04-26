import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const BarContainer = styled.div``;

export const Input = styled.input`
  height: 0.5rem;
  width: 80%;
  border-radius: 5px;

  background: linear-gradient(
    to right,
    ${colors.lightBlue2},
    ${colors.lightViolet1} 70%,
    ${colors.lighViolet2}
  );
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${colors.white};
    border: 1px solid ${colors.black};
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
  }
`;
