import { ButtonHTMLAttributes, forwardRef, HTMLProps, Ref } from "react";

import clsx from "clsx";

import ButtonContent, { ButtonContentProps } from "./button-content";
import ButtonLink from "./button-link";

import styles from "./button.module.scss";

export enum ButtonTypeEnum {
  "button",
  "a",
}

type ButtonProps = {
  element?: ButtonTypeEnum; // A button can be either a HTML anchor element or an HTML button element
} & ButtonContentProps &
  HTMLProps<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      element = ButtonTypeEnum.button,
      type = "button",
      icon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const defaultButtonStyles =
      "inline-flex items-center rounded-md bg-white py-1 xs:py-2 px-2 xs:px-3 sm:px-4 text-base xl:text-lg font-bold text-black whitespace-nowrap border-2 border-black outline-offset-8";

    if (element === ButtonTypeEnum.a) {
      return (
        <ButtonLink
          className={clsx(className, styles.button, defaultButtonStyles)}
          {...(props as HTMLProps<HTMLAnchorElement>)}
        >
          <ButtonContent icon={icon}>{children}</ButtonContent>
        </ButtonLink>
      );
    }

    if (element === ButtonTypeEnum.button) {
      return (
        <button
          ref={ref as Ref<HTMLButtonElement>}
          type={type}
          className={clsx(className, styles.button, defaultButtonStyles)}
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          <ButtonContent icon={icon}>{children}</ButtonContent>
        </button>
      );
    }

    return null;
  }
);

Button.displayName = "Button";

export default Button;
