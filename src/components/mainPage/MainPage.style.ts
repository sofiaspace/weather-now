import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem;

  @media ${device.xs} {
    padding: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 2rem 3rem 4rem 3rem;
  text-align: justify;
`;
