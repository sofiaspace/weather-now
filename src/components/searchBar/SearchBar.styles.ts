import styled from "styled-components";
import { colors } from "../../styles/variables";
import { device } from "../../styles/mediaBreakpoints";

export const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 3rem;

  @media ${device.sm} {
    margin: 2rem 0 2rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 25rem;
`;

export const Input = styled.input`
  background: linear-gradient(
    to bottom,
    ${colors.darkerBlue1},
    ${colors.darkerBlue2}
  );
  box-shadow: inset 0 4px 4px ${colors.boxShadow};
  border-radius: 0.7rem;
  border-style: none;
  width: 100%;
  padding: 0.5rem 2.4rem;
  color: ${colors.lightText1};
  font-family: inherit;

  &::placeholder {
    color: ${colors.lightText1};

    &:focus {
      color: white;
    }
  }
  &:placeholder-shown {
    color: ${colors.white};
  }
`;

export const StyledUl = styled.ul`
  background-color: ${colors.white};
  list-style: none;
  border-radius: 0.3rem;
  width: 98%;
  padding: 0.2rem;
  margin-top: 0.5rem;
  position: absolute;
`;

export const StyledList = styled.li`
  border-radius: 0.2rem;
  padding: 0.1rem;

  cursor: pointer;
  &:hover {
    background-color: ${colors.lightGrey1};
  }

  a {
    text-decoration: none;
    color: ${colors.darkerBlue2};
  }
`;
