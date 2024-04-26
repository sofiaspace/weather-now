import styled from "styled-components";

export const DisplayDaysContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 3rem;
`;

export const DaysContainer = styled.div`
  position: relative;
  flex: 1;
  transition: all 1s;

  &:hover {
    transform: translateY(-1rem);
    cursor: pointer;
  }
`;
