"use client";

import { FunctionComponent } from "react";

import clsx from "clsx";
import Link from "next/link";

import { Dictionary } from "@/config/i18n";

import styles from "./logo.module.scss";

interface LogoProps {
  dictionary: Dictionary;
}

const Logo: FunctionComponent<LogoProps> = ({ dictionary }) => {
  const indexLink = dictionary.global.header.navigation.find(
    (navItem) => navItem.value === "Home"
  );

  return (
    <Link
      className="inline-flex shrink-0 focus:rounded-md"
      title={indexLink?.title}
      href={indexLink?.href as string}
      aria-label={indexLink?.ariaLabel}
    >
      <span className="sr-only">{dictionary.global.header.company}</span>
      <svg
        className={clsx(
          styles.logo,
          "h-10 w-auto relative top-1 xs:h-14 xl:h-16 p-1 xs:p-2"
        )}
        data-name="Dave.nl Logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1548.8 659.7"
      >
        <path
          className={styles["letterD"]}
          d="m46.8,469.9c5.6,22.4,20.6,30.8,45.2,32.2,35.5.9,69-12.5,98.1-34.8,29.1-22,53.7-52.8,72-80.5,24.3-37.9,35.2-83.9,35.3-125.4,0-5.2-.1-10.4-.4-15.5s-.8-10.1-1.4-15.1c-1.3-9.9-3.2-19.5-5.7-28.7-5-18.4-12.5-35.4-22.3-50.8-19.5-31-48.1-55.8-84.2-74.8-36.1-18.4-79.8-31-128-22.5C9.2,63.4-5,91.9,1.5,130.6c8.2,49.4,30.8,277.7,45.3,339.3h0Zm48.7-331.4c56.8-4,103.8,48.8,111.6,98.2,12.3,68.9-24.3,122.6-79.8,159.8-14.5-65.3-34-226-31.8-258h0Z"
        />
        <path
          className={styles["letterA"]}
          d="m588.8,396.5c22.2,36.9,80.2,16.5,75.1-25.4-20.1-79.4-51.8-156.1-77.5-234-17.6-60.2-68.3-111.9-122.6-51.9-9.4,10.9-17.6,22.7-24.4,35.3-43.1,87.8-77.3,180-115.9,269.9-14.8,39.7,38.3,73.2,67.1,41.6,17.5-20.7,27.5-46.9,39.8-71l137.1-14.7c9,20,12.1,32.6,21.3,50.2h0Zm-81.7-223.3c15.3,27.7,26.1,57.8,31.7,89-22.5,8.7-44.6,6.6-73,9,11.5-33.6,25.3-66.4,41.3-98h0Z"
        />
        <path
          className={styles["letterV"]}
          d="m811,253.6c-14.7-53.2-33.6-105.4-46.7-159.1-2.2-9.2-8.8-22.4-20.4-35.9-11.3-13.2-33.3-15.4-48.6-8.1-17.7,8.6-27.2,27.1-23.1,44.8.5,2.5,1.3,4.9,2.2,7.2,29.6,76.3,58.4,152.8,87.2,229.2,4.3,10.5,9.8,20.4,16.5,29.7,27.6,39.8,69.7,40.6,98.2,1.4,9.7-13.3,17.2-28.3,24.9-42.9,40.3-76.6,82.5-152.8,126.3-228.6,3.4-5.5,6.6-11.1,9.3-16.8,2.3-5.4,3.6-10.8,4-15.9.2-2.6.1-5.1-.2-7.5-.3-2.4-.8-4.8-1.6-7-3.1-9-9.8-16.6-19.8-21.5-7.5-3.8-16.1-5.3-24.7-4.4-15.5,1.9-25.1,12-29.9,17-3.1,3.2-5.7,6.7-7.9,10.5-25.6,43.3-48,88-67.4,133.7-26.1,64-45.6,114.6-61,112.9-5.9-.5-9-8.6-17.3-38.7h0Z"
        />
        <path
          className={styles["letterE"]}
          d="m1195.8,80c11.4-1.2,64,6.4,96.2,8.1,22.5-.9,36.2-15.3,39-31.5,2.7-16.1-5.7-34.1-27.7-41.5-45.9-11.9-95.1-11.5-142.3-15-32.9-1.1-48.2,11.3-54.8,39.5-12.1,89.9-19.3,180.5-29.2,270.7-3.8,37,10.5,77.1,53.9,79.4,64.9,3.6,95.7,17.1,114.5,1,10.7-9.2,19.1-25.6,15.2-39.9-.3-17.7-34.5-30.9-99.1-33.1-13.6-.4-.8-28.8,2.2-46.9,2.4-14.4,4.5-33.6,9.9-37.1,8.6-6,127.9,28,136.6-25.8.3-16.4-4.2-23.9-18.2-34-10-8.7-50.8-12.6-75.7-17.3-12.4-1.6-29.7-1.8-35.5-6.4-6-4.5,3.6-69.2,15-70.2h0Z"
        />
        <path
          className={styles["exclamation"]}
          d="m1544.7,71.3c2.7-9.4,4-19.2,4.1-29-1.1-20.5-16.6-37.6-37.1-40.9-18.9-3.6-37.7,5.9-45.7,23-4.2,8.9-7.4,18.2-9.6,27.8-15.8,62.6-31.3,125.3-46.7,188-2.2,8.1-3.4,16.5-3.7,24.9-.5,19,12.3,36,30.9,41.2,20.5,6.4,41.1-.9,51.1-19.4,4.3-8.8,7.6-18.1,9.8-27.6,8-29.8,14.4-60.1,22-90,8.3-32.7,16.9-65.2,24.9-98h0Zm-113.8,279.9c-22-5.7-47.3,8.9-53.6,30.8-6.8,23.5,9.8,50.6,34,55.5,23.7,4.3,46.4-10.4,51.7-33.4,5.2-22.9-9.5-47.1-32.1-52.9h0Z"
        />
        <path
          className={styles["dashOne"]}
          d="m969.8,549.4c9.4.3,18.8-.1,28-1.2,26.8-3.5,42.9-16.2,40.8-33.3-.1-.5-.1-1-.2-1.5s-.2-1-.4-1.5c-.3-1-.6-2-1-3-.8-2-1.9-3.9-3.2-5.7-2.6-3.6-6.3-6.9-10.6-9.8-8.7-5.7-20.5-9.6-33.5-10.6-12.5-.7-25.2-.7-37.6-.2-92.2,1.6-184.4,3.4-276.4,5.6-39,1-78,2.2-116.7,4-20.4.9-40.3,2.7-59.2,5.5-10.9,1.6-19.2,5.5-24.6,10.3-2.7,2.4-4.6,5-5.7,7.8-.5,1.4-.9,2.8-1,4.2-.1.7-.1,1.4,0,2.1,0,.4.1.7.1,1.1.1.4.1.7.2,1.1,2.7,11.4,19.7,21.4,42.2,23.3,9.2.5,18.6.7,28,.4,70.3-.2,140.6-.5,226.8-.7,57.2.5,130.6,1.3,204,2.1h0Z"
        />
        <path
          className={styles["dashTwo"]}
          d="m845.3,659.1c5.4.6,11,.8,16.6.5,16.5-1.2,28.8-9.6,31.5-22.1.1-.4.1-.8.2-1.1.1-.4.1-.7.1-1.1.1-.7.1-1.5.1-2.2,0-1.5-.2-2.9-.6-4.3-.7-2.8-2.1-5.3-4-7.6-3.8-4.6-9.8-7.9-17.2-9.3-7.2-1.1-14.6-1.8-22-2-54.3-3.4-108.7-6.6-163-9.5-23-1.2-46.1-2.3-69.2-2.8-12.1-.4-24.2,0-35.9,1-6.7.7-12.5,3-16.7,6.2-2.1,1.6-3.8,3.4-5.1,5.3-.6,1-1.2,2-1.5,3-.2.5-.4,1-.5,1.5-.1.3-.1.5-.2.8,0,.3-.1.5-.1.8-1,8.3,6.6,16.4,19.4,18.9,5.3.8,10.7,1.4,16.3,1.7,41.2,3.3,82.4,6.5,132.8,10.6,33.5,3.3,76.3,7.5,119,11.7h0Z"
        />
      </svg>
    </Link>
  );
};

export default Logo;
