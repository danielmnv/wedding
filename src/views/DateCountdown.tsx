'use client';

import Countdown, { CountdownRenderProps } from 'react-countdown';
import { Text, Title } from '../components/Typography';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { Bride, Groom } from '../types/person';
import { useAnimationView } from '../hooks/use-animation-view';
import { Icon } from '../components/Icon';

export const CountdownView = () => {
  const { countdown } = useApp();

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      // TODO: Add a completed state
      // Render a completed state
      return (
        <div className="w-full text-center">
          <p className="pb-1 font-extrabold text-3xl md:text-5xl md:font-semibold">
            event.headline.countdown.start.title
          </p>
          <p className="tracking-widest font-extrabold text-xs md:text-sm md:font-semibold">
            event.headline.countdown.start.text
          </p>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <>
          <CountdownPart number={days} unit="días" />
          <CountdownPart number={hours} unit="horas" />
          <CountdownPart number={minutes} unit="min" />
          <CountdownPart number={seconds} unit="seg" />
        </>
      );
    }
  };

  return (
    <Section section={countdown} className="flex flex-col gap-20 items-center">
      <Title content={countdown!.title} />

      <div className="container">
        <div className="w-full flex flex-row md:justify-center md:gap-20">
          <Countdown date={countdown!.date} renderer={renderer} />
        </div>
      </div>
    </Section>
  );
};

const CountdownPart = ({ number, unit }: { number: number; unit: 'días' | 'horas' | 'min' | 'seg' }) => {
  return (
    <div className="flex flex-col items-center gap-10 flex-1 md:min-w-28 countdown-font uppercase">
      <Text content={`${number}`} className="text-neutral-500 font-bold text-4xl md:text-6xl" />
      <Text content={unit} className="text-neutral-400 font-bold text-sm md:text-md" />
    </div>
  );
};
