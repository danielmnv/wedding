import './globals.css';

import type { Metadata } from 'next';
import { AppContextProvider } from '../context/AppContext';
import { Event } from '../types/event';
import { promises as fs } from 'fs';

export const metadata: Metadata = {
  title: 'Next.js on Firebase App Hosting',
  description: '',
};

async function fetchEvent(): Promise<Event> {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
  return JSON.parse(file);
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { bride, groom, sections } = await fetchEvent();

  return (
    <html lang="en" className="dark-theme">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppContextProvider bride={bride} groom={groom} sections={sections}>
          <div className="overflow-x-hidden">{children}</div>
        </AppContextProvider>
      </body>
    </html>
  );
}
