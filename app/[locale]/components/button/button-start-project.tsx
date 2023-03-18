import 'server-only';

import { FunctionComponent } from 'react';

import clsx from 'clsx';

import { Dictionary } from '@/config/i18n';

import Button, { ButtonTypeEnum } from './button';

import styles from './button-start-project.module.scss';

interface ButtonStartProjectProps {
  className?: string;
  dictionary: Dictionary;
}

const ButtonStartProject: FunctionComponent<ButtonStartProjectProps> = ({
  className,
  dictionary,
}) => (
  <Button
    className={clsx(styles.lightbulbButton, className)}
    element={ButtonTypeEnum.A}
    href={dictionary.global.header.callToAction.project.href}
    title={dictionary.global.header.callToAction.project.title}
    aria-label={dictionary.global.header.callToAction.project.ariaLabel}
    icon={
      <span className={clsx(styles.lightbulbWrapper, 'relative')}>
        <svg
          data-id='lightbulb-icon'
          className='mr-1 xs:mr-2 text-base w-4 h-4 xs:w-5 xs:h-5'
          version='1.1'
          id='lightbulb-icon'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          x='0px'
          y='0px'
          viewBox='0 0 352 512'
          xmlSpace='preserve'
          fill='currentColor'
        >
          <path
            id='Icon_Path'
            d='M96.1,454.4c0,6.3,1.9,12.5,5.4,17.7l17.1,25.7c5.9,8.9,15.9,14.3,26.6,14.3h61.7c10.7,0,20.7-5.4,26.6-14.3
	l17.1-25.7c3.5-5.2,5.4-11.4,5.4-17.7l0-38.4H96C96,416,96.1,454.4,96.1,454.4z M0,176c0,44.4,16.5,84.9,43.6,115.8
	c16.5,18.9,42.4,58.2,52.2,91.4c0,0.3,0.1,0.5,0.1,0.8h160.2c0-0.3,0.1-0.5,0.1-0.8c9.9-33.2,35.7-72.6,52.2-91.5
	C335.5,260.9,352,220.4,352,176C352,78.6,272.9-0.3,175.4,0C73.4,0.3,0,83,0,176z M176,96c-44.1,0-80,35.9-80,80c0,8.8-7.2,16-16,16
	s-16-7.2-16-16c0-61.8,50.2-112,112-112c8.8,0,16,7.2,16,16S184.8,96,176,96z'
          />
        </svg>
        <span className={styles.lightbulbRays}>
          <span className={clsx(styles.lightbulbRay1)} />
          <span className={clsx(styles.lightbulbRay2)} />
          <span className={clsx(styles.lightbulbRay3)} />
          <span className={clsx(styles.lightbulbRay4)} />
          <span className={clsx(styles.lightbulbRay5)} />
          <span className={clsx(styles.lightbulbRay6)} />
          <span className={clsx(styles.lightbulbRay7)} />
        </span>
      </span>
    }
  >
    <span className={clsx(styles.text, 'relative')}>
      {dictionary.global.header.callToAction.project.value}
    </span>
  </Button>
);

export default ButtonStartProject;
