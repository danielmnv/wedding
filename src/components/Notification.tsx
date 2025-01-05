import { toast, ToastContentProps, Slide, ToastOptions } from 'react-toastify';
import { Text } from './Typography';
import { Icon } from './Icon';

type NotificationProps = {
  data: { text: string };
};

function getToastOptions<T>(id?: string): ToastOptions<T> {
  return {
    toastId: id ? `notification-${id}` : undefined,
    closeButton: false,
    className: 'py-0 shadow-md bg-neutral max-w-fit min-h-fit',
    hideProgressBar: true,
    transition: Slide,
    position: 'bottom-center',
  };
}

const Notification = ({ data }: NotificationProps) => {
  return (
    <div className="p-2">
      <Text hideAnimation content={data.text} className="text-primary-content" />
    </div>
  );
};

export function notify(str: string, type: 'success' | 'error' = 'success', id?: string) {
  toast(Notification, {
    ...getToastOptions(id),
    data: { text: str },
    icon: (
      <Icon
        symbol={type === 'success' ? 'Success' : 'Error'}
        stroke={type === 'success' ? 'green' : 'oklch(var(--er))'}
      />
    ),
  });
}

export function notifyPromise<T>(
  promise: Promise<T>,
  pending: string,
  success: string,
  error: string,
  id?: string,
): Promise<T> {
  return toast.promise<T>(
    promise,
    {
      pending: {
        render() {
          return <Notification data={{ text: pending }} />;
        },
      },
      success: {
        render() {
          return <Notification data={{ text: success }} />;
        },
        icon: <Icon symbol="Success" stroke="green" />,
      },
      error: {
        render() {
          return <Notification data={{ text: error }} />;
        },
        icon: <Icon symbol="Error" stroke="oklch(var(--er))" />,
      },
    },
    getToastOptions(id),
  );
}
