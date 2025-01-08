import { Bride, Groom } from './person';
import { RelativesSection } from './relatives';
import { LocationsSection } from './locations';
import { ScheduleSection } from './schedule';
import { GiftRegistrySection } from './gifts';
import { CountdownSection } from './countdown';
import { DressCodeSection } from './dress-code';
import { RSVPSection } from './rsvp';
import { HeadlineSection } from './headline';

export type Event = {
  date: string;
  bride: Bride;
  groom: Groom;
  sections: EventSection[];
  metadata: {
    title: string;
    description: string;
  };
};

export type EventSection =
  | HeadlineSection
  | RelativesSection
  | CountdownSection
  | LocationsSection
  | ScheduleSection
  | GiftRegistrySection
  | DressCodeSection
  | RSVPSection;

export type DictionarySection = {
  headline?: HeadlineSection;
  relatives?: RelativesSection;
  countdown?: CountdownSection;
  locations?: LocationsSection;
  schedule?: ScheduleSection;
  giftRegistry?: GiftRegistrySection;
  dressCode?: DressCodeSection;
  rsvp?: RSVPSection;
};

export type Section<P = unknown> = P & {
  type: string;
  title?: string;
};
