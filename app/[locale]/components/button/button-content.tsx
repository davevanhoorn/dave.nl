import "server-only";

import { FunctionComponent, ReactElement, ReactNode } from "react";

export interface ButtonContentProps {
  icon?: ReactElement; // Optional, when an icon is added, show the icon in the button / a component
  children: ReactNode; // A string is also a ReactNode
}

const ButtonContent: FunctionComponent<ButtonContentProps> = ({
  icon,
  children,
}) => (
  <>
    {icon && icon}
    {children}
  </>
);

export default ButtonContent;
