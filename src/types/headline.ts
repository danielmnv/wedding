import { Section } from './event';

export type HeadlineSection = Section<{
  type: 'Headline';
  phrase: string;
  additionalText?: string;
}>;
