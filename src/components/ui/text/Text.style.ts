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

/* export const Text = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`; */

/* export const TextStyles = {
  headline: "4rem",
  title3: "2rem",
}; */
