import classNames from 'classnames';
import { isValidElement, PropsWithChildren } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export const Text = ({
  children,
  hasContainer = false,
  className,
}: PropsWithChildren<{ hasContainer?: boolean; className?: string }>) => {
  return (
    <ScrollAnimation animateIn="fade-in 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both" animateOnce offset={100}>
      <div
        className={classNames({
          container: hasContainer,
        })}
      >
        {/* {#if $$slots.default}
            <div class="{$$props.class}">
                <slot />
            </div>
        {:else} */}
        {/* The class was in the slot and text class */}
        <div className={classNames(className)}>
          {isValidElement(children) ? children : <p className="py-9 text-center tracking-wide">{children}</p>}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export const Title = ({ offset }: PropsWithChildren<{ offset: number }>) => {
  return (
    <ScrollAnimation
      animateIn="fade-in-top {duration}s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"
      animateOnce
      offset={offset}
    >
      {/* {#if $$slots.custom}
  <slot name="custom"></slot>
  {:else}
  <div class="flex flex-col gap-y-5 {$$props.class}">
      <div class="text-secondary mx-auto">
          {#if icon}
          <Fa icon={icon} size="2x" />
          {/if}
      </div>
      <p class="headline">{text}</p>
  </div>
  {/if} */}
    </ScrollAnimation>
  );
};
