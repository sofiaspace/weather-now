import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const LogoContainer = styled.div`
  align-self: start;
  padding-left: 4rem;

  @media ${device.xl} {
    padding-left: 2.7rem;
  }
  @media ${device.lg} {
    padding-left: 1rem;
  }
  @media ${device.md} {
    padding-left: 0;
    text-align: center;
  }
`;
