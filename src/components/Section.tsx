import { PropsWithChildren } from 'react';
import { EventSection } from '../types/event';
import classNames from 'classnames';

export const Section = ({
  section,
  children,
  className,
}: PropsWithChildren<{ section?: EventSection; className?: string }>) => {
  return section ? <section className={classNames('section', className)}>{children}</section> : null;
};
