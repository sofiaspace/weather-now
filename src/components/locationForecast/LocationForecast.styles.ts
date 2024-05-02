import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const LocationForecastContainer = styled.div`
  margin-top: 6rem;

  display: flex;
  flex-direction: column;

  @media ${device.sm} {
    margin-top: 1rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 0.1rem;
`;
