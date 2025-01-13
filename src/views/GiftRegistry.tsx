'use client';

import { Text, Title } from '../components/Typography';
import { CompanyRegistry } from '../types/gifts';
import classNames from 'classnames';
import { Icon } from '../components/Icon';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { Slider } from '../components/Slider';
import { useAnimationView } from '../hooks/use-animation-view';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';

export const GiftRegistryView = () => {
  const { giftRegistry } = useApp();

  return (
    <Section section={giftRegistry} className="bg-neutral rounded-se-[50px] rounded-es-[50px] flex flex-col gap-20">
      <div className="overflow-hidden">
        <Slider />
      </div>

      <div className="container flex flex-col gap-20 items-center">
        <Title content={giftRegistry!.title} />

        <div className="flex gap-20">
          {giftRegistry!.items.map((company) => (
            <CompanyGifts key={`company-${company.eventId}`} {...company} />
          ))}
        </div>
      </div>
    </Section>
  );
};

const CompanyGifts = ({ symbol, eventId, url, text }: CompanyRegistry) => {
  const { ref, isInView, animate } = useAnimationView<HTMLDivElement>();

  function showGifts() {
    window.open(url.replace(':eventId', eventId), '_blank');
  }

  useEffect(() => {
    if (isInView)
      animate([
        ['div.gift-icon', { opacity: 1, transform: 'translateY(0)' }],
        ['div.gift-info', { opacity: 1 }, { at: 0.5 }],
      ]);
  }, [isInView]);

  return (
    <div ref={ref} className={classNames('flex flex-col gap-4 items-center cursor-pointer')} onClick={showGifts}>
      <motion.div className="gift-icon" style={{ opacity: 0, translateY: '30px' }}>
        <Icon symbol={symbol} stroke="oklch(var(--a))" />
      </motion.div>

      <Button onClick={() => {}} type="secondary">
        {symbol}
      </Button>

      <motion.div className="gift-info" style={{ opacity: 0 }}>
        <Text
          hideAnimation
          content={text.replace(':eventId', eventId)}
          className={classNames('text-center text-secondary-content text-lg whitespace-pre-wrap', {
            invisible: eventId === undefined,
          })}
        />
      </motion.div>
    </div>
  );
};
