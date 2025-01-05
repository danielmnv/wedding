'use client';

import Image from 'next/image';
import { Icon } from '../components/Icon';

export const Headline = () => {
  return (
    <section className="section pt-0">
      <div className="relative headline max-h-dvh overflow-hidden grayscale">
        <picture className="relative">
          <source media="(max-width: 690px)" srcSet="/photos/CC3FCF35-2401-441D-9C30-1EF9CF5E44E6_1_105_c.jpeg" />
          <source media="(min-width: 691px)" srcSet="/photos/CARO&CARLOS_-10.jpg" />
          <Image
            className="relative"
            src="/photos/CARO&CARLOS_-10.jpg"
            alt="alt text here"
            width={1920}
            height={1080}
          />
        </picture>
      </div>

      <div className="flex justify-center">
        <Icon symbol="Monogram" size="5xl" />
      </div>
    </section>
  );
};
