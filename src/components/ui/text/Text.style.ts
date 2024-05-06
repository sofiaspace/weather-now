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
      case "body4":
        return css`
          font-size: 0.6rem;

          @media ${device.sm} {
            text-wrap: nowrap;
          }
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
        `;
    }
  }};

  ${({ color }) => `color: ${colors[color]}`};
`;
