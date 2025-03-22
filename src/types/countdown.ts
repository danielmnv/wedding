import { Section } from './event';

export type CountdownSection = Section<{
  type: 'Countdown';
  postCountdown: {
    text: string;
    secondaryText?: string;
  };
}>;
