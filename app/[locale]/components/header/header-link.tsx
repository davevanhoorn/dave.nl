"use client";

import "client-only";

import {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { isAbsoluteURL } from "@/utils/is-absolute-url";

import styles from "./header-link.module.scss";

const HeaderLink: FunctionComponent<
  PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, children, ...props }) => {
  const pathname = usePathname();

  if (!props.href) return null;

  const isAbsoluteUrl = isAbsoluteURL(props.href);

  return isAbsoluteUrl ? (
    <a
      target="_blank"
      rel="noreferrer noopener"
      href={props.href as string}
      title={props.title}
      aria-label={props?.["aria-label"] ? props["aria-label"] : undefined}
      className={clsx(styles.link, className, {
        [styles.active]: pathname === props.href,
      })}
      {...props}
    >
      {children}
    </a>
  ) : (
    <Link
      href={props.href as {}}
      title={props.title}
      aria-label={props?.["aria-label"] ? props["aria-label"] : undefined}
      className={clsx(styles.link, className, {
        [styles.active]: pathname === props.href,
      })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
