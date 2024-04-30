import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const DailyForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 1rem;
`;

export const StyledContainer = styled.div`
  background: linear-gradient(
    to right,
    ${colors.lighterBlue1},
    ${colors.lightBlue1}
  );
  color: ${colors.white};
  border-radius: 0.4rem;
  padding: 0.6rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.div`
  text-transform: uppercase;
  color: ${colors.white};
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

export const Details = styled.div`
  font-size: 0.8rem;
  color: #ebebf5;

  display: flex;
  flex-direction: column;
`;

export const StyledSpan = styled.span`
  Input {
    width: 100%;
  }
`;
