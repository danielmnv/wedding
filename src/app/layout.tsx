import './globals.css';

import type { Metadata } from 'next';
import { AppContextProvider } from '../context/AppContext';
import { Event } from '../types/event';
import { promises as fs } from 'fs';
import path from 'path';

async function fetchEvent(): Promise<Event> {
  if (process.env.NODE_ENV === 'development') {
    const file = await fs.readFile(process.cwd() + '/data.example.json', 'utf8');
    return JSON.parse(file);
  }

  if (!process.env.WEDDING_DATA) {
    throw new Error('WEDDING_DATA environment variable is not set.');
  }
  return JSON.parse(process.env.WEDDING_DATA);
}

async function fetchSlides() {
  const directory = path.join(process.cwd(), '/public/photos/slideshow');
  const files = await fs.readdir(directory);

  return files
    .filter(
      (file) => file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp'),
    )
    .sort((a, b) => {
      return a.localeCompare(b);
    });
}

export async function generateMetadata(): Promise<Metadata> {
  const { bride, groom, metadata } = await fetchEvent();
  const title = `${bride.shortName} & ${groom.shortName}`;

  return {
    title,
    description: metadata.description,
    openGraph: {
      title,
      description: metadata.description,
      type: 'website',
      siteName: title,
      url: metadata.url,
    },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { date, bride, groom, sections } = await fetchEvent();
  const slides = await fetchSlides();

  return (
    <html lang="en" className="dark-theme">
      <body>
        <AppContextProvider date={date} bride={bride} groom={groom} sections={sections} slides={slides}>
          <div className="overflow-x-hidden">{children}</div>
        </AppContextProvider>
      </body>
    </html>
  );
}
