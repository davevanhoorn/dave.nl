"use client";

import clsx from "clsx";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from "react";

import styles from "./header-link.module.scss";

const HeaderLink: FunctionComponent<
  PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, children, ...props }) => {
  const pathname = usePathname();

  return (
    <Link
      href={props.href as Url}
      title={props.title}
      aria-label={props?.["aria-label"] ? props["aria-label"] : undefined}
      className={clsx(styles.link, className, {
        [styles.active]: pathname === props.href,
      })}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
