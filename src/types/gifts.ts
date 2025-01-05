import Symbol from '../components/Icon';
import { Section } from './event';

export type GiftRegistrySection = Section<{
  type: 'GiftRegistry';
  title: string;
  items: CompanyRegistry[];
}>;

export type CompanyRegistry = {
  symbol: Symbol;
  eventId: string;
  url: string;
  text: string;
};
