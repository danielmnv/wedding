import { useRef } from 'react';
import { useAnimate, useInView, UseInViewOptions } from 'motion/react';

type AnimationViewProps =
  // Omit<UseInViewOptions, 'once'> &
  {
    hideAnimation?: boolean;
  };

export const useAnimationView = <T extends HTMLElement>(props?: AnimationViewProps) => {
  const { hideAnimation = false } = props || {};

  const [ref, animate] = useAnimate<T>();
  const isInView =
    useInView(ref, {
      once: true,
      margin: '0px 0px -120px 0px',
    }) || hideAnimation;

  return { ref, animate, isInView };
};
