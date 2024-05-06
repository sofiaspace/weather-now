import styled, { css } from "styled-components";
import { HeaderColor } from "./Header.types";
import { colors } from "../../../styles/variables";
import { device } from "../../../styles/mediaBreakpoints";

export const StyledHeading = styled.div<{
  color: HeaderColor;
}>`
  margin: 0;

  ${({ as, color }) => {
    switch (as) {
      case "h1":
        return css`
          font-size: 6rem;
          font-weight: 500;
          color: ${colors[color]};

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

      case "h2":
        return css`
          font-size: 3.5rem;
        `;

      case "h3":
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }};
`;
