'use client';

import { useApp } from '../hooks/use-app';
import { Text, Title } from '../components/Typography';
import { Bride, Groom } from '../types/person';
import { useAnimationView } from '../hooks/use-animation-view';
import { Icon } from '../components/Icon';
import ReactCurvedText from 'react-curved-text';
import { Section } from '../components/Section';

export const Headline = () => {
  const { bride, groom, date, headline } = useApp();

  return (
    <Section section={headline} className="pt-0 pb-0 md:pb-20">
      <Banner alt={`${bride?.shortName} & ${groom?.shortName}`} />

      <div className="bg-neutral rounded-b-[50px]">
        <div className="container pt-0 pb-32 flex flex-col items-center gap-20 py-10">
          <CurvedText text={headline!.phrase} />
          <CoupleHeadline bride={bride!} groom={groom!} />
          {date && <Spotlight date={date} />}
        </div>
      </div>
    </Section>
  );
};

const Banner = ({ alt }: { alt: string }) => {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <picture className="block">
          <source media="(max-width: 639px)" srcSet="/photos/CC3FCF35-2401-441D-9C30-1EF9CF5E44E6_1_105_c.jpeg" />
          <source media="(min-width: 640px)" srcSet="/photos/2F380C8D-8924-474D-B379-18922E98B11A.jpeg" />
          <img
            className="relative opacity-70 w-full h-full object-cover object-center"
            src="/photos/2F380C8D-8924-474D-B379-18922E98B11A.jpeg"
            alt={alt}
          />
        </picture>
      </div>
    </div>
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
      <NameTitle name={bride.shortName} />

      <div className="flex justify-between md:justify-center gap-4 md:gap-8 items-center">
        <Divider />
        <Icon symbol="Monogram" size="3xl" />
        <Divider />
      </div>

      <NameTitle name={groom.shortName} />
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
