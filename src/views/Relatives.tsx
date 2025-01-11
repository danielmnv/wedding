'use client';

import { Subtitle, Text, Title } from '../components/Typography';
import { Person } from '../types/person';
import { ReflectedImage } from '../components/Thumbnail';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { useAnimationView } from '../hooks/use-animation-view';

export const RelativesView = () => {
  const { bride, groom, relatives } = useApp();

  return (
    <Section section={relatives} className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20">
        <div className="flex flex-col items-center md:items-start gap-6">
          <List
            title={relatives!.parents.title}
            text={relatives!.parents.text}
            list={[
              { subtitle: bride!.title, couple: bride!.parents },
              { subtitle: groom!.title, couple: groom!.parents },
            ]}
          />

          <List
            title={relatives!.godparents.title}
            list={relatives!.godparents.items.map((item) => ({ subtitle: item.object, couple: item.couple }))}
          />
        </div>

        <div className="relative h-fit md:h-[calc(300px_+_16rem)]">
          {/* TODO: add alt and src */}
          <ReflectedImage
            shadow="xl"
            src="/photos/75475AC1-568D-4C60-B17E-A8DBA35D236F_1_105_c.jpeg"
            alt="Hello"
            width={280}
            height={0}
          />
        </div>
      </div>
    </Section>
  );
};

const List = ({
  title,
  text,
  list,
}: {
  title: string;
  text?: string;
  list: { subtitle?: string; couple: [Person, Person] }[];
}) => {
  return (
    <>
      <Title content={title} />

      {text && (
        <Text content={text} className="text-center px-6 md:text-start md:px-0 w-full md:w-3/4 italic text-sm" />
      )}

      <div className="flex flex-col gap-4 ">
        {list.map((item, index) => (
          <CoupleView key={`list-${title}-${item.subtitle}`} subtitle={item.subtitle} couple={item.couple} />
        ))}
      </div>
    </>
  );
};

const CoupleView = ({ subtitle, couple }: { subtitle?: string; couple: [Person, Person] }) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  return (
    <div className="flex flex-col items-center md:items-start gap-4">
      {subtitle && (
        <div
          ref={ref}
          className="bg-secondary py-1.5 px-8 rounded-lg min-w-fit max-w-full w-48"
          style={{
            opacity: isInView ? 1 : 0,
            transform: `translateY(${isInView ? 0 : -20}px)`,
            transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
          }}
        >
          <Subtitle hideAnimation className="text-white !text-lg text-center md:text-start" content={subtitle} />
        </div>
      )}

      <ol className="flex flex-col items-center md:items-start">
        {couple.map(({ name }, idx) => (
          <li key={`list-subtitle-${subtitle}-${idx}`}>
            <Text content={`${name.firstName} ${name.lastName}`} />
          </li>
        ))}
      </ol>
    </div>
  );
};
