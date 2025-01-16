'use client';

import { Fragment } from 'react';
import { Subtitle, Text } from '../components/Typography';
import { Icon } from '../components/Icon';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { useAnimationView } from '../hooks/use-animation-view';
import { DressCodeStatute } from '../types/dress-code';

export const DressCodeView = () => {
  const { dressCode } = useApp();

  return (
    <Section
      section={dressCode}
      className="container flex flex-col md:flex-row justify-center items-center gap-x-20 gap-y-14"
    >
      {dressCode!.items.map((item, idx) => (
        <Card
          key={`dress-code-item-${idx}`}
          symbol={item.symbol}
          title={item.title}
          description={item.description}
          idx={idx}
        />
      ))}
    </Section>
  );
};

const Card = ({ title, description, symbol, idx }: DressCodeStatute & { idx: number }) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="card bg-base-100 w-96 outline outline-secondary drop-shadow-sm"
      style={{
        transform: isInView ? 'none' : 'translateY(30px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
      }}
    >
      <div className="card-body items-center p-2 !gap-1">
        <Subtitle hideAnimation content={title} />
        <Text hideAnimation content={description} className="text-center" />

        {Array.isArray(symbol) ? (
          <div className="flex">
            {symbol.map((symbol) => (
              <Fragment key={`dress-code-item-${idx}-symbol-${symbol}`}>
                <Icon symbol={symbol} stroke="oklch(var(--a))" />
              </Fragment>
            ))}
          </div>
        ) : (
          <Icon symbol={symbol} stroke="oklch(var(--a))" />
        )}
      </div>
    </div>
  );
};
