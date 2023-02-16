import { FunctionComponent, HTMLProps } from "react";

interface ButtonLinkProps extends HTMLProps<HTMLAnchorElement> {}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  className,
  children,
  ...props
}) => (
  <a className={className} {...props}>
    {children}
  </a>
);

export default ButtonLink;
