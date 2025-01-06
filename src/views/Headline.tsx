'use client';

import Image from 'next/image';
import { useApp } from '../hooks/use-app';
import { Text, Title } from '../components/Typography';
import { Bride, Groom } from '../types/person';
import { useAnimationView } from '../hooks/use-animation-view';
import { Icon } from '../components/Icon';
import ReactCurvedText from 'react-curved-text';

export const Headline = () => {
  const { bride, groom, countdown } = useApp();

  return (
    <section className="pt-0 pb-0 md:pb-20">
      <div className="headline">
        <picture className="block">
          <source media="(max-width: 639px)" srcSet="/photos/CC3FCF35-2401-441D-9C30-1EF9CF5E44E6_1_105_c.jpeg" />
          <source media="(min-width: 640px)" srcSet="/photos/CARO&CARLOS_-10.jpg" />
          <Image
            className="relative opacity-70"
            src="/photos/CARO&CARLOS_-10.jpg"
            alt={`${bride?.nickname} & ${groom?.nickname}`}
            layout="fill"
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          />
        </picture>
      </div>

      <div className="container pt-0 flex flex-col items-center gap-20 py-10">
        <CurvedText text={'En ti encontré mi hogar y mi eternidad'} />
        <CoupleHeadline bride={bride!} groom={groom!} />
        {countdown && <Spotlight date={countdown.date} />}
      </div>
    </section>
  );
};

const CurvedText = ({ text }: { text: string }) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="cubic-bezier"
      style={{
        opacity: isInView ? 1 : 0,
      }}
    >
      <ReactCurvedText
        width={340}
        height={70}
        cx={170}
        cy={170}
        rx={160}
        ry={160}
        startOffset={120}
        reversed
        text={text}
        textProps={{ style: { fontSize: 14 } }}
        textPathProps={{ style: { fill: 'oklch(var(--a))' } }}
      />
    </div>
  );
};

const CoupleHeadline = ({ bride, groom }: { bride: Bride; groom: Groom }) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  const NameTitle = ({ name }: { name: string }) => {
    return (
      <Title
        hideAnimation
        content={name}
        className="text-4xl md:text-6xl text-center text-accent uppercase tracking-[0.6rem]"
      />
    );
  };
  const Divider = () => <div className="w-24 md:w-48 h-1 bg-accent"></div>;

  return (
    <div
      ref={ref}
      className="flex flex-col gap-4 cubic-bezier -mt-10 w-full"
      style={{
        transform: isInView ? 'none' : 'translateY(-60px)',
        opacity: isInView ? 1 : 0,
      }}
    >
      <NameTitle name={bride.nickname} />

      <div className="flex justify-between md:justify-center gap-4 md:gap-8 items-center">
        <Divider />
        <Icon symbol="Monogram" size="3xl" />
        <Divider />
      </div>

      <NameTitle name={groom.nickname} />
    </div>
  );
};

const Spotlight = ({ date }: { date: string }) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();
  const dateObj = new Date(date);

  const Number = ({ number }: { number: string }) => {
    return <Text hideAnimation content={number} className="text-4xl md:text-6xl text-accent" />;
  };
  const Divider = () => <div className="w-1 h-14 bg-accent"></div>;
  return (
    <div
      ref={ref}
      className="flex gap-1 md:gap-10 items-center justify-around cubic-bezier title-font border-accent border-4 p-6 md:p-10 rounded-xl w-full"
      style={{
        transform: isInView ? 'none' : 'translateY(-60px)',
        opacity: isInView ? 1 : 0,
      }}
    >
      <Number number={`${dateObj.getDate()}`} />
      <Divider />
      <Number number={`${dateObj.getMonth() + 1}`.padStart(2, '0')} />
      <Divider />
      <Number number={`${dateObj.getFullYear()}`.substring(2)} />
    </div>
  );
};
