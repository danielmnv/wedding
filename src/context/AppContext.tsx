'use client';

import { createContext, PropsWithChildren } from 'react';
import { Navbar } from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import { DictionarySection, EventSection } from '../types/event';
import { Footer } from '../components/Footer';
import { Bride, Groom } from '../types/person';

function parseSections(sections: EventSection[]): DictionarySection {
  return sections.reduce((acc: DictionarySection, section) => {
    if (section.type === 'Headline') {
      acc.headline = section;
    }

    if (section.type === 'Relatives') {
      acc.relatives = section;
    }

    if (section.type === 'Countdown') {
      acc.countdown = section;
    }

    if (section.type === 'Locations') {
      acc.locations = section;
    }

    if (section.type === 'Schedule') {
      acc.schedule = section;
    }

    if (section.type === 'GiftRegistry') {
      acc.giftRegistry = section;
    }

    if (section.type === 'DressCode') {
      acc.dressCode = section;
    }

    if (section.type === 'RSVP') {
      acc.rsvp = section;
    }

    return acc;
  }, {} as DictionarySection);
}

const DEFAULT_VALUE: DictionarySection & {
  date?: string;
  bride?: Bride;
  groom?: Groom;
  slides: string[];
} = {
  slides: [],
};

export const AppContext = createContext(DEFAULT_VALUE);

export const AppContextProvider = ({
  children,
  date,
  bride,
  groom,
  sections,
  slides,
}: PropsWithChildren<{ bride: Bride; groom: Groom; date: string; sections: EventSection[]; slides: string[] }>) => {
  const dictionarySection = parseSections(sections);

  return (
    <AppContext.Provider value={{ ...dictionarySection, date, bride, groom, slides }}>
      <ToastContainer />
      <Navbar title={`${bride.shortName} & ${groom.shortName}`} />

      {children}

      <Footer />
    </AppContext.Provider>
  );
};
