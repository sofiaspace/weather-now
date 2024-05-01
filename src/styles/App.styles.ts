import styled from "styled-components";
import { device } from "./mediaBreakpoints";

export const AppContainer = styled.div`
  min-height: 100%;
  padding: 2rem;
  flex: 1;

  display: flex;
  flex-direction: column;
  width: inherit;

  @media ${device.md} {
    padding: 1rem 1rem;
  }
`;
