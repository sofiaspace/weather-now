import styled from "styled-components";
import { device } from "../../../styles/mediaBreakpoints";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding-top: 3rem;

  @media ${device.xs} {
    padding-top: 0;
  }
`;

export const DescriptionWrapper = styled.div`
  text-align: center;
`;
