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
  min-height: 80%;
  padding: 2rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  width: inherit;

  @media ${device.md} {
    padding: 0.7rem;
  }
  @media ${device.sm} {
    display: unset;
    overflow: auto;
    margin: auto;
  }
`;
