'use client';

import classNames from 'classnames';
import { useAnimationView } from '../hooks/use-animation-view';

type TextProps = {
  content?: string;
  className?: string;
  hideAnimation?: boolean;
};

export const Title = ({ content, className, hideAnimation = false }: TextProps) => {
  const { ref, isInView } = useAnimationView<HTMLHeadingElement>({ hideAnimation });

  return (
    <h1
      ref={ref}
      className={classNames('prose title-font', className)}
      style={{
        transform: isInView ? 'none' : 'translateY(-30px)',
        opacity: isInView ? 1 : 0,
      }}
    >
      {content}
    </h1>
  );
};

export const Subtitle = ({ content, className, hideAnimation = false }: TextProps) => {
  const { ref, isInView } = useAnimationView<HTMLHeadingElement>({ hideAnimation });

  return (
    <h2
      ref={ref}
      className={classNames('prose subtitle-font', className)}
      style={{
        transform: isInView ? 'none' : 'translateY(-30px)',
        opacity: isInView ? 1 : 0,
      }}
    >
      {content}
    </h2>
  );
};

export const Text = ({ content, className, hideAnimation = false }: TextProps) => {
  const { ref, isInView } = useAnimationView<HTMLParagraphElement>({ hideAnimation });

  return (
    <p
      ref={ref}
      className={classNames('tracking-wide prose cubic-bezier', className)}
      style={{
        opacity: isInView ? 1 : 0,
      }}
    >
      {content}
    </p>
  );
};
