'use client';

import { Location } from '../types/locations';
import { Fragment, useEffect } from 'react';
import { Subtitle, Text } from '../components/Typography';
import { Thumbnail } from '../components/Thumbnail';
import classNames from 'classnames';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { Button } from '../components/Button';
import { useAnimationView } from '../hooks/use-animation-view';
import { motion } from 'motion/react';
import { useResponsive } from '../hooks/use-responsive';

export const LocationsView = () => {
  const { locations } = useApp();

  return (
    <Section section={locations} className="bg-neutral rounded-ss-[50px] rounded-ee-[50px]">
      <div className="container">
        <div className="flex flex-col gap-20 md:gap-36">
          {locations!.items.map((item: Location, idx) => (
            <Fragment key={`location-${item.title}`}>
              <LocationCard {...item} buttonText={locations!.buttonText} reverse={idx % 2 !== 0} />
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
};

const LocationCard = ({
  background,
  time,
  title,
  name,
  address,
  url,
  buttonText,
  reverse = false,
}: Location & {
  reverse?: boolean;
  buttonText: string;
}) => {
  const open = () => {
    // gtag('event', 'page_view', { 'page_location': url, 'title': name });
    window.open(url, '_blank');
  };
  return (
    <div
      className={classNames('flex items-center gap-10 flex-col md:flex-row', {
        'md:!flex-row-reverse': reverse,
      })}
    >
      <div
        className={classNames('flex-[25%] flex flex-col gap-2 items-center', {
          'md:items-start': reverse,
          'text-right md:items-end': !reverse,
        })}
      >
        <Subtitle content={title} />
        <Text content={name} />
        <Text content={time} />

        <Button type="secondary" onClick={open}>
          {buttonText}
        </Button>
      </div>

      <LocationImage background={background} name={name} position={reverse ? 'left' : 'right'} open={open} />
    </div>
  );
};

const LocationImage = ({
  background,
  name,
  position,
  open,
}: {
  background: string;
  name: string;
  position: 'left' | 'right';
  open: () => void;
}) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();
  const { isMobile } = useResponsive();

  return (
    <motion.div
      ref={ref}
      className="relative cursor-pointer"
      onClick={open}
      style={{
        transform: isInView
          ? isMobile
            ? 'translateY(0)'
            : 'translateX(0)'
          : isMobile
            ? 'translateY(80px)'
            : `translateX(${position === 'right' ? '' : '-'}80px)`,
        opacity: isInView ? 1 : 0,
        transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
      }}
    >
      <Thumbnail
        src={background}
        alt={name}
        width={620}
        height={0}
        wrapperClassName="border-primary hover:border-secondary"
      />
    </motion.div>
  );
};
