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

          @media ${device.xl} {
            font-size: 5rem;
          }
          @media ${device.md} {
            font-size: 4rem;
          }
          @media ${device.sm} {
            font-size: 3rem;
          }
          @media ${device.xs} {
            font-size: 2rem;
          }
        `;
    }
  }};

  ${({ color }) => `color: ${colors[color]}`};
`;
