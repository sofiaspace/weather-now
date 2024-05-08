import styled, { css } from "styled-components";
import { TextColor, TextVariant } from "./Text.types";
import { colors } from "../../../styles/variables";
import { device } from "../../../styles/mediaBreakpoints";

export const TextContainer = styled.span<{
  type: TextVariant;
  color: TextColor;
}>`
  ${({ type }) => {
    switch (type) {
      case "body5":
        return css`
          font-size: 0.6rem;

          @media ${device.sm} {
            width: 95%;
          }
        `;
      case "body4":
        return css`
          font-size: 0.7rem;
        `;

      case "body3":
        return css`
          font-size: 0.8rem;
        `;

      case "body2":
        return css`
          font-size: 0.9rem;
        `;

      case "body1":
        return css`
          font-size: 3.5rem;

          @media ${device.md} {
            font-size: 3.2rem;
          }
        `;
    }
  }};

  ${({ color }) => `color: ${colors[color]}`};
`;
