'use client';

import { Subtitle, Text } from '../components/Typography';
import { GuestAttendance, Invitation, RSVPSection } from '../types/rsvp';
import { useFirestore } from '../hooks/use-firestore';
import { Dispatch, SetStateAction, useState } from 'react';
import { Icon } from '../components/Icon';
import { notify, notifyPromise } from '../components/Notification';
import classNames from 'classnames';
import { Section } from '../components/Section';
import { useApp } from '../hooks/use-app';
import { Person } from '../types/person';
import { useAnimationView } from '../hooks/use-animation-view';
import { useResponsive } from '../hooks/use-responsive';
import { Button } from '../components/Button';

type SearchInvitationProps = Pick<RSVPSection, 'title' | 'search'> & {
  setInvitation: (invitation: Invitation) => void;
};

type InvitationCardProps = Pick<RSVPSection, 'list' | 'toastMessages'> & {
  invitation: Invitation;
  onConfirm: () => void;
  onCancel: () => void;
};

type ConfirmationCardProps = Pick<RSVPSection, 'confirmation'> & {
  onClose: () => void;
};

export const RSVPView = () => {
  const { rsvp } = useApp();
  const { isDesktop } = useResponsive();
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  const [invitation, setInvitation] = useState<Invitation>();
  const [hasConfirmed, setHasConfirmed] = useState<boolean>(false);

  return (
    <Section section={rsvp} className="container">
      <div className="relative">
        {/* Backdrop */}
        <div className="w-full lg:w-5/6 overflow-hidden rounded-lg">
          <img src="/photos/rsvp-section.jpg" alt="RSVP" />
        </div>

        {/* Card */}
        <div
          ref={ref}
          className="lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 lg:translate-x-0 lg:mt-0 -mt-20 flex justify-center"
          style={{
            transform: isInView
              ? !isDesktop
                ? 'none'
                : 'translateY(-50%)'
              : !isDesktop
                ? 'translateY(40px)'
                : 'translateY(-30%)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.4s ease-in-out',
          }}
        >
          <div className="card bg-base-100 w-[calc(100%_-_1rem)] md:w-[60vw] lg:w-96 drop-shadow-lg">
            {!invitation ? (
              <SearchInvitation title={rsvp!.title} search={rsvp!.search} setInvitation={setInvitation} />
            ) : !hasConfirmed ? (
              <InvitationCard
                list={rsvp!.list}
                toastMessages={rsvp!.toastMessages}
                invitation={invitation}
                onConfirm={() => setHasConfirmed(true)}
                onCancel={() => setInvitation(undefined)}
              />
            ) : (
              <ConfirmationCard
                confirmation={rsvp!.confirmation}
                onClose={() => {
                  setInvitation(undefined);
                  setHasConfirmed(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

const SearchInvitation = ({ title, search, setInvitation }: SearchInvitationProps) => {
  const { getInvitationByCode } = useFirestore();
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  const [code, setCode] = useState<string>('');
  const [error, setError] = useState<string>();

  const handleSearch = async () => {
    if (!code || code.length !== 4) {
      setError(search.inputErrorText);
      return;
    }

    try {
      const invitation = await getInvitationByCode(code);
      setCode('');
      setError(undefined);
      setInvitation(invitation);
    } catch (error) {
      notify(search.notFoundText, 'error', code);
      setError(search.notFoundText);
    }
  };

  return (
    <div
      ref={ref}
      className="card-body gap-4"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 0.4s ease-in-out',
      }}
    >
      <Subtitle hideAnimation content={title} className="card-title" />

      <Text hideAnimation content={search.description} />

      <label className="form-control w-full">
        <label
          className={classNames('input input-md input-bordered input-secondary flex items-center gap-2', {
            'input-error': !!error,
          })}
        >
          <input
            type="text"
            className="grow"
            placeholder={search.placeholder}
            value={code}
            maxLength={4}
            onChange={({ target }) => {
              setCode(target.value);
              !!error && setError(undefined);
            }}
          />
          <Icon symbol="Password" width={20} height={20} stroke={`oklch(var(--${!!error ? 'er' : 'a'}))`} />
        </label>
        {!!error && (
          <div className="label">
            <Text content={error} className="text-error label-text-alt" />
          </div>
        )}
      </label>

      <div className="card-actions">
        <Button hideAnimation className="btn btn-primary btn-block" onClick={() => handleSearch()}>
          {search.buttonText}
        </Button>
      </div>
    </div>
  );
};

const InvitationCard = ({ list, toastMessages, invitation, onConfirm, onCancel }: InvitationCardProps) => {
  const { updateInvitation } = useFirestore();
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  const [guests, setGuests] = useState(invitation.guests);
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const everyoneAttending = guests.every((g) => g.attending === true);

  const handleCancel = () => {
    if (isSubmitting) return;
    onCancel();
  };

  const handleConfirm = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    const log = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await updateInvitation(invitation.id, guests, message);
    };
    try {
      await notifyPromise(log(), toastMessages.loading, toastMessages.success, toastMessages.error);
      onConfirm();
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={ref}
      className="card-body gap-4"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 0.4s ease-in-out',
      }}
    >
      {invitation.header && <Subtitle hideAnimation content={invitation.header} />}

      <Text hideAnimation content={list.description} />

      {/* Guest List */}
      <div className="overflow-x-auto">
        <table className="table table-auto">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-accent [--chkfg:oklch(var(--n))]"
                    checked={everyoneAttending}
                    onChange={() => setGuests((prev) => prev.map((g) => ({ ...g, attending: !everyoneAttending })))}
                  />
                </label>
              </th>
              <th>
                <Text hideAnimation content={list.headerGuest ?? ''} className="text-xs text-base-300" />
              </th>
            </tr>
          </thead>
          <tbody>
            {guests.map((g) => (
              <GuestItem
                key={`guest-${g.name}`}
                name={g.name}
                isAttending={g.attending ?? false}
                setGuests={setGuests}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Message */}
      <div className="form-control">
        <div className="label">
          <Text hideAnimation content={list.message?.description} className="label-text-alt" />
        </div>
        <textarea
          className="textarea textarea-bordered h-24 resize-none textarea-secondary"
          placeholder={list.message?.placeholder}
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="card-actions [&>*]:flex-1">
        <Button hideAnimation className="btn btn-outline btn-secondary" onClick={handleCancel}>
          {list.buttonCancelText}
        </Button>
        <Button hideAnimation className="btn btn-primary" onClick={handleConfirm}>
          {isSubmitting && <span className="loading loading-spinner text-primary-content"></span>}
          {list.buttonText}
        </Button>
      </div>
    </div>
  );
};

const GuestItem = ({
  name,
  isAttending,
  setGuests,
}: {
  name: Person['name'];
  isAttending: boolean;
  setGuests: Dispatch<SetStateAction<GuestAttendance[]>>;
}) => {
  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-accent [--chkfg:oklch(var(--n))]"
            checked={isAttending}
            onChange={() =>
              setGuests((prev) =>
                prev.map((g) =>
                  g.name == name ? { ...g, attending: g.attending !== undefined ? !g.attending : false } : g,
                ),
              )
            }
          />
        </label>
      </th>
      <td>
        <Text hideAnimation content={`${name}`} className="text-sm" />
      </td>
    </tr>
  );
};

const ConfirmationCard = ({ confirmation, onClose }: ConfirmationCardProps) => {
  const { ref, isInView } = useAnimationView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="card-body gap-4"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 0.4s ease-in-out',
      }}
    >
      <Subtitle hideAnimation content={confirmation.title} className="text-center" />

      <div className="flex flex-col items-center gap-4">
        <Icon symbol="Happiness" width={48} height={48} />
        <Text hideAnimation content={confirmation.description} />
      </div>

      <div className="card-actions">
        <Button hideAnimation className="btn btn-primary btn-block" onClick={onClose}>
          {confirmation.buttonText}
        </Button>
      </div>
    </div>
  );
};
