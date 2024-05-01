import styled from "styled-components";
import { colors } from "../../../styles/variables";
import { device } from "../../../styles/mediaBreakpoints";

export const MainForecastContainer = styled.div`
  margin: auto 0;
`;

export const TextWrapper = styled.div`
  padding-bottom: 1.8rem;
  text-align: center;
`;

export const DailyForecastContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media ${device.lg} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.6rem;
  }
  @media ${device.md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  @media ${device.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
  }
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

  @media ${device.sm} {
    display: block;
  }
`;

export const Details = styled.div`
  font-size: 0.8rem;
  color: ${colors.lightText1};

  display: flex;
  flex-direction: column;
`;

export const StyledSpan = styled.span`
  Input {
    width: 100%;
  }
`;
