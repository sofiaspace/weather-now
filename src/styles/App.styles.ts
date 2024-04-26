import styled from "styled-components";
import { colors } from "./variables";

export const AppContainer = styled.div`
  background: linear-gradient(
    to right bottom,
    ${colors.darkerBlue1},
    ${colors.darkerBlue2}
  );
  border-radius: 2rem;
  height: inherit;
  margin: 0 2rem;
  padding: 2rem;
  flex: 1;

  display: flex;
  flex-direction: column;
`;
