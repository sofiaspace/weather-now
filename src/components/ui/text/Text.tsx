import { FC, PropsWithChildren } from "react";
import { TextContainer } from "./Text.style";
import { TextColor, TextVariant } from "./Text.types";

interface Props extends PropsWithChildren {
  variant: TextVariant;
  color: TextColor;
}

export const Text: FC<Props> = ({ variant, color, children }) => {
  return (
    <TextContainer type={variant} color={color}>
      {children}
    </TextContainer>
  );
};
