import styled from "styled-components";
import { device } from "./mediaBreakpoints";
import { colors } from "./variables";

export const AppContainer = styled.div`
  background: linear-gradient(
    to right bottom,
    ${colors.darkerBlue1},
    ${colors.darkerBlue2}
  );
  border-radius: 2rem;
  padding: 2rem;
  margin: auto 8rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  overflow: auto;

  @media ${device.xl} {
    margin: auto 6rem;
  }
  @media ${device.lg} {
    margin: auto 5rem;
  }

  @media ${device.md} {
    padding: 0.7rem;
    margin: 0.5rem 3rem;
  }
  @media ${device.sm} {
    display: unset;
    margin: auto;
  }
`;
