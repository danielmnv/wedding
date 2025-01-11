import { Person } from './person';
import { Section } from './event';

export type RelativesSection = Section<{
  type: 'Relatives';
  parents: {
    title: string;
    text?: string;
  };
  godparents: {
    title: string;
    items: {
      object?: string;
      couple: [Person, Person];
    }[];
  };
}>;
