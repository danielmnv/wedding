'use client';

import 'react-vertical-timeline-component/style.min.css';
import { Text, Title } from '../components/Typography';
import classNames from 'classnames';
import { Icon } from '../components/Icon';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { useAnimationView } from '../hooks/use-animation-view';
import { useEffect } from 'react';
import Symbol from '../components/Icon';
import { motion } from 'motion/react';

export const ScheduleView = () => {
  const { schedule } = useApp();

  return (
    <Section section={schedule} className="flex flex-col items-center gap-20">
      <Title content={schedule!.title} />

      <div className="container">
        <ul className="timeline timeline-vertical timeline-snap-icon">
          {schedule!.items.map((item, idx) => (
            <TimelineItem
              key={`schedule-item-${idx}`}
              symbol={item.symbol}
              time={item.time}
              title={item.title}
              even={idx % 2 === 0}
              last={idx === schedule!.items.length - 1}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};

const TimelineItem = ({
  symbol,
  time,
  title,
  last,
  even,
}: {
  symbol: Symbol;
  time: string;
  title: string;
  last: boolean;
  even: boolean;
}) => {
  const { ref, animate, isInView } = useAnimationView<HTMLLIElement>();

  useEffect(() => {
    if (isInView) {
      animate([
        ['div.timeline-middle > .dot', { scale: 1 }],
        ['hr.line', { scale: 1 }],
        ['div.timeline-content', { opacity: 1 }, { at: last ? 0.6 : 1 }],
      ]);
    }
  }, [isInView]);
  return (
    <li ref={ref}>
      <div className="timeline-middle">
        <motion.div
          layout
          className="w-4 h-4 bg-secondary rounded-full dot"
          style={{
            scale: 0,
            transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
          }}
        />
      </div>
      <div
        className={classNames(
          'timeline-content opacity-0 flex flex-col items-center gap-1 min-w-20 px-4 -mt-10 pb-10',
          {
            'timeline-start': even,
            'timeline-end': !even,
          },
        )}
      >
        <Icon symbol={symbol} stroke="oklch(var(--a))" />
        <Text hideAnimation content={time} />
        <Text hideAnimation content={title} className="text-center" />
      </div>
      {!last && (
        <motion.hr
          className="line bg-primary origin-top mt-2 rounded-full"
          style={{
            scale: 0,
            transition: 'all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
          }}
        />
      )}
    </li>
  );
};
