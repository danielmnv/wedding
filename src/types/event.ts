import { Bride, Groom } from './person';
import { RelativesSection } from './relatives';
import { LocationsSection } from './locations';
import { ScheduleSection } from './schedule';
import { GiftRegistrySection } from './gifts';
import { CountdownSection } from './countdown';
import { DressCodeSection } from './dress-code';
import { RSVPSection } from './rsvp';

export type Event = {
  bride: Bride;
  groom: Groom;
  sections: EventSection[];
};

export type EventSection =
  | RelativesSection
  | CountdownSection
  | LocationsSection
  | ScheduleSection
  | GiftRegistrySection
  | DressCodeSection
  | RSVPSection;

export type DictionarySection = {
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
  title: string;
  displayOnNavbar: boolean;
};
