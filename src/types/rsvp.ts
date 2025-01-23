import { Person, PersonType } from './person';
import { Section } from './event';

export type RSVPSection = Section<{
  type: 'RSVP';
  title: string;
  search: {
    description?: string;
    placeholder?: string;
    buttonText: string;
    notFoundText: string;
    inputErrorText: string;
  };
  list: {
    description?: string;
    headerGuest?: string;
    buttonText: string;
    buttonCancelText: string;
    message?: {
      description?: string;
      placeholder?: string;
    };
  };
  toastMessages: {
    loading: string;
    success: string;
    error: string;
  };
  confirmation: {
    title?: string;
    description: string;
    buttonText: string;
  };
}>;

export type Invitation = {
  id: string;
  header?: string;
  invitedBy: PersonType;
  guests: GuestAttendance[];
  gratitudeMessage: string[];
};

export type GuestAttendance = Person & {
  attending?: boolean;
  id: string;
};
