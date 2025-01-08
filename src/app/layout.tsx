import './globals.css';

import type { Metadata } from 'next';
import { AppContextProvider } from '../context/AppContext';
import { Event } from '../types/event';
import { promises as fs } from 'fs';

async function fetchEvent(): Promise<Event> {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
  return JSON.parse(file);
}

export async function generateMetadata(): Promise<Metadata> {
  const { bride, groom, metadata } = await fetchEvent();

  return {
    title: `${bride.shortName} & ${groom.shortName}`,
    description: metadata.description,
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { date, bride, groom, sections } = await fetchEvent();

  console.log(date);

  return (
    <html lang="en" className="dark-theme">
      <body>
        <AppContextProvider date={date} bride={bride} groom={groom} sections={sections}>
          <div className="overflow-x-hidden">{children}</div>
        </AppContextProvider>
      </body>
    </html>
  );
}
