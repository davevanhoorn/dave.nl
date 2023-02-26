import "server-only";

import {
  AnchorHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
} from "react";

import Link from "next/link";

import { isAbsoluteURL } from "@/utils/is-absolute-url";
import { isHashTag } from "@/utils/is-hash-tag";

const ButtonLink: FunctionComponent<
  PropsWithChildren & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, children, ...props }) => {
  const href = props?.href;

  if (!href) return null;

  const isAbsoluteUrl = isAbsoluteURL(href);
  const isHashtag = isHashTag(href);

  return isAbsoluteUrl || isHashtag ? (
    <a
      {...props}
      href={href as string}
      target={isHashtag ? undefined : "_blank"}
      rel={isHashtag ? undefined : "noopener noreferrer"}
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link href={href as {}} className={className} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
