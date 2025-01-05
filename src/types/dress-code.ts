import Symbol from '../components/Icon';
import { Section } from './event';

export type DressCodeSection = Section<{
  type: 'DressCode';
  title: string;
  items: DressCodeStatute[];
}>;

export type DressCodeStatute = {
  symbol: Symbol | Symbol[];
  title: string;
  description: string;
};
