import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const DisplayDaysContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;

  @media ${device.md} {
    gap: 0.3rem;
  }
  @media ${device.sm} {
    flex-direction: column;
    margin-top: 1rem;
    gap: 0.6rem;
  }
`;

export const DaysContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  transition: all 1s;

  &:hover {
    transform: translateY(-1rem);
    cursor: pointer;

    @media ${device.sm} {
      transform: translateY(-0.5rem);
    }
  }

  @media ${device.sm} {
    margin: 0;
    &:nth-child(5) {
      margin-bottom: 0;
    }
  }
`;
