import 'server-only';

import { FunctionComponent } from 'react';

import clsx from 'clsx';

import LightbulbIcon from '@/assets/images/font-awesome-5_solid-lightbulb.svg';
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
        <LightbulbIcon
          data-id='lightbulb-icon'
          className='mr-1 xs:mr-2 text-base w-4 h-4 xs:w-5 xs:h-5'
        />
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
