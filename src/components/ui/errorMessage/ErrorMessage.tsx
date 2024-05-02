import { FC, PropsWithChildren } from "react";
import { MessageContainer } from "./ErrorMessage.styles";

interface ErrorMessageProps extends PropsWithChildren {}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return <MessageContainer>{children}</MessageContainer>;
};

export default ErrorMessage;
