'use client';

import Countdown, { CountdownRenderProps } from 'react-countdown';
import { Text, Title } from '../components/Typography';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { Fireworks } from '@fireworks-js/react';
import type { FireworksHandlers } from '@fireworks-js/react';
import { motion } from 'motion/react';
import { useRef } from 'react';

export const CountdownView = () => {
  const { date, countdown } = useApp();
  const ref = useRef<FireworksHandlers>(null);

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return (
        <motion.div
          className="w-full flex flex-col items-center gap-2"
          style={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
        >
          <Text
            content={countdown?.postCountdown.text}
            className="font-extrabold text-3xl md:text-5xl md:font-semibold"
            hideAnimation
          />
          <Text
            content={countdown?.postCountdown.secondaryText}
            className="tracking-widest font-extrabold text-xs md:text-sm md:font-semibold"
            hideAnimation
          />

          <Fireworks
            ref={ref}
            options={{
              hue: {
                min: 40,
                max: 40,
              },
              delay: {
                min: 30,
                max: 50,
              },
              traceSpeed: 2,
            }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'fixed',
              background: 'transparent',
              zIndex: 1000,
            }}
          />
        </motion.div>
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
          <Countdown date={date} renderer={renderer} />
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
