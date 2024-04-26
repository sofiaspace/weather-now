import styled from "styled-components";
import { colors } from "../../styles/variables";

export const DayContainer = styled.div`
  background: linear-gradient(
    to right,
    ${colors.lighterBlue1},
    ${colors.lightBlue1}
  );
  clip-path: polygon(0 4%, 0 100%, 100% 100%, 100% 35%);

  border-radius: 1rem;
  min-height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const DateContainer = styled.div`
  text-align: center;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AirQualityContainer = styled.div`
  border: 1px solid ${colors.darkerBlue2};
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  background-color: ${colors.lightBlue1};
`;

export const TemperatureContainer = styled.div`
  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const StyledDiv = styled.div`
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
`;
