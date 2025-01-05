import Symbol from '../components/Icon';
import { Section } from './event';

export type ScheduleSection = Section<{
  type: 'Schedule';
  title: string;
  items: ScheduleItem[];
}>;

export type ScheduleItem = {
  time: string;
  title: string;
  symbol: Symbol;
};
