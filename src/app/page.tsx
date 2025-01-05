import { Headline } from '../views/Headline';
import { CountdownView } from '../views/DateCountdown';
import { LocationsView } from '../views/Locations';
import { ScheduleView } from '../views/Schedule';
import { GiftRegistryView } from '../views/GiftRegistry';
import { RelativesView } from '../views/Relatives';
import { DressCodeView } from '../views/DressCode';
import { RSVPView } from '../views/RSVP';

export default async function Home() {
  return (
    <main>
      <Headline />
      <RelativesView />
      <CountdownView />
      <LocationsView />
      <ScheduleView />
      <GiftRegistryView />
      <DressCodeView />
      <RSVPView />
    </main>
  );
}
