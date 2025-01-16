'use client';

import { Title } from './Typography';
import { Icon } from './Icon';
import { useIsScrolling } from '../hooks/use-is-scrolling';
import classNames from 'classnames';

type NavbarProps = {
  title: string;
};

export const Navbar = ({ title }: NavbarProps) => {
  const { ref, isScrolling } = useIsScrolling<HTMLDivElement>();
  return (
    <>
      <div
        ref={ref}
        className={classNames('navigation', {
          'navigation--sticky': isScrolling,
        })}
      >
        <div className="w-full container">
          <Icon symbol="Monogram" size="lg" stroke={isScrolling ? '#525252' : 'oklch(var(--n))'} />
          <div
            className={classNames('navigation-divider', {
              'divider--scrolling': isScrolling,
            })}
          />
          <Title
            hideAnimation
            content={title}
            className={classNames('!text-2xl', {
              'text-neutral': !isScrolling,
              'text-neutral-600': isScrolling,
            })}
          ></Title>
        </div>
      </div>
    </>
  );
};
