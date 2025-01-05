import { Section } from './event';

export type LocationsSection = Section<{
  type: 'Locations';
  buttonText: string;
  items: Location[];
}>;

export type Location = {
  address: string;
  background: string;
  name: string;
  time: string;
  title: string;
  url: string;
};
