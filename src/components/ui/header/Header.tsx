import { FC, PropsWithChildren } from "react";
import { HeaderColor, HeaderVariant } from "./Header.types";
import { StyledHeading } from "./Header.styles";

interface Props extends PropsWithChildren {
  variant: HeaderVariant;
  color: HeaderColor;
}

export const Header: FC<Props> = ({ variant, color, children }) => {
  return (
    <StyledHeading color={color} as={variant}>
      {children}
    </StyledHeading>
  );
};
