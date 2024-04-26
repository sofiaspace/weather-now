import styled from "styled-components";
import { colors } from "../../styles/variables";

export const LocationForecastContainer = styled.div`
  text-align: center;
  height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledDiv = styled.div`
  border: 1px solid ${colors.lightGrey1};
  border-radius: 1rem;
  padding: 0.3rem 0;
`;
