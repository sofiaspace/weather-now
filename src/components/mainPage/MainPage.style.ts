import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;

  @media ${device.sm} {
    padding: 1.5rem;
  }
  @media ${device.xs} {
    padding: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 2rem 3rem 4rem 3rem;
  text-align: justify;

  @media ${device.lg} {
    padding: 2rem 2rem 4rem 2rem;
  }
  @media ${device.sm} {
    padding: 2rem 1rem 2rem 1rem;
  }
`;
