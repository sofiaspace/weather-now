import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const LocationForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;

  @media ${device.sm} {
    margin-top: 1rem;
    justify-content: center;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 0.1rem;
`;
