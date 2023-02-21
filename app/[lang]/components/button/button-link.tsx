"use client";

import {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from "react";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import { isAbsoluteURL } from "@/utils/is-absolute-url";
import { isHashTag } from "@/utils/is-hash-tag";

const ButtonLink: FunctionComponent<
  PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, children, ...props }) => {
  if (!props.href) return null;

  const isAbsoluteUrl = isAbsoluteURL(props.href);
  const isHashtag = isHashTag(props.href);

  return isAbsoluteUrl || isHashtag ? (
    <a
      {...props}
      href={props.href as string}
      target={isHashtag ? undefined : "_blank"}
      rel={isHashtag ? undefined : "noopener noreferrer"}
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link href={props.href as Url} className={className} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
