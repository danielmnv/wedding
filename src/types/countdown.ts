import { Section } from './event';

export type CountdownSection = Section<{
  type: 'Countdown';
  date: string;
}>;
