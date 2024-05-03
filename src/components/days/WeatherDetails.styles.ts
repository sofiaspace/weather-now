import styled from "styled-components";
import { colors } from "../../styles/variables";
import { device } from "../../styles/mediaBreakpoints";

export const DayContainer = styled.div`
  background: linear-gradient(
    to right,
    ${colors.lighterBlue1},
    ${colors.lightBlue1}
  );
  clip-path: polygon(0 4%, 0 100%, 100% 100%, 100% 35%);

  border-radius: 1rem;
  padding-top: 7rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: auto;

  @media ${device.sm} {
    clip-path: none;
    min-height: unset;
    flex-direction: row;
    padding: 0.5rem 0 0 7rem;
  }
  @media ${device.xs} {
    padding-left: 5.5rem;
  }
`;

export const DateContainer = styled.div`
  text-align: center;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.sm} {
    padding-bottom: unset;
  }
`;

export const AirQualityContainer = styled.div`
  border: 1px solid ${colors.darkerBlue2};
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  background-color: ${colors.lightBlue1};

  @media ${device.sm} {
    margin: 0;
  }
`;

export const TemperatureContainer = styled.div`
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: end;

  @media ${device.sm} {
    align-items: center;
    padding-top: 0.2rem;
  }
`;

export const StyledDiv = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
`;
