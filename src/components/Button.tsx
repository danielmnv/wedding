import { PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import { useAnimationView } from '../hooks/use-animation-view';

type ButtonProps = PropsWithChildren<{
  type?: 'primary' | 'secondary';
  className?: string;
  hideAnimation?: boolean;
  onClick: () => void;
}>;

export const Button = ({ type = 'primary', hideAnimation = false, className, onClick, children }: ButtonProps) => {
  const { ref, isInView } = useAnimationView<HTMLButtonElement>({ hideAnimation });
  return (
    <button
      ref={ref}
      type="button"
      className={classNames('btn', `btn-${type}`, className)}
      onClick={onClick}
      style={{
        transform: isInView ? 'scale(1)' : 'scale(0.1)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
    >
      {children}
    </button>
  );
};
