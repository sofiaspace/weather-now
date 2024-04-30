import styled, { css } from "styled-components";
import { TextColor, TextVariant } from "./Text.types";
import { colors } from "../../../styles/variables";

export const TextContainer = styled.span<{
  type: TextVariant;
  color: TextColor;
}>`
  ${({ type }) => {
    switch (type) {
      case "body3":
        return css`
          font-size: 0.6rem;
        `;

      case "body1":
        return css`
          font-size: 3.5rem;
        `;

      case "body2":
        return css`
          font-size: 0.9rem;
        `;

      case "headline":
        return css`
          font-size: 6rem;
        `;
    }
  }};

  ${({ color }) => `color: ${colors[color]}`};
`;
