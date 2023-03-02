import 'server-only';

import { ButtonHTMLAttributes, forwardRef, HTMLProps, Ref } from 'react';

import clsx from 'clsx';

import ButtonContent, { ButtonContentProps } from './button-content';
import ButtonLink from './button-link';

import styles from './button.module.scss';

export enum ButtonTypeEnum {
  A,
  BUTTON,
}

type ButtonProps = {
  element?: ButtonTypeEnum; // A button can be either a HTML anchor element or an HTML button element
} & ButtonContentProps &
  HTMLProps<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ ...props }, ref) => {
    const defaultButtonStyles =
      'text-text inline-flex items-center rounded-md bg-primary py-1 xs:py-2 px-2 xs:px-3 sm:px-4 text-base xl:text-lg font-bold whitespace-nowrap border-2 sm:border-2 border-black outline-offset-8 dark:border-white';
    const { className, icon, children, type, element } = props;

    if (element === ButtonTypeEnum.A) {
      return (
        <ButtonLink
          {...(props as HTMLProps<HTMLAnchorElement>)}
          className={clsx(className, styles.button, defaultButtonStyles)}
        >
          <ButtonContent icon={icon}>{children}</ButtonContent>
        </ButtonLink>
      );
    }

    if (element === ButtonTypeEnum.BUTTON) {
      return (
        <button
          {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
          ref={ref as Ref<HTMLButtonElement>}
          type={type}
          className={clsx(className, styles.button, defaultButtonStyles)}
        >
          <ButtonContent icon={icon}>{children}</ButtonContent>
        </button>
      );
    }

    return null;
  }
);

Button.displayName = 'Button';

export default Button;
