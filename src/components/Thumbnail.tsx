import classNames from 'classnames';
import { HTMLProps } from 'react';

type ThumbnailProps = HTMLProps<HTMLImageElement> & {
  wrapperClassName?: string;
  shadow?: false | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};

export const Thumbnail = ({ wrapperClassName, shadow = 'xl', className, ...props }: ThumbnailProps) => {
  return (
    <div
      className={classNames(
        'rounded-xl overflow-hidden p-2 transition-all ease-in-out duration-500 border-2 border-secondary',
        wrapperClassName,
        {
          'shadow-sm': shadow === 'sm',
          'shadow-md': shadow === 'md',
          'shadow-lg': shadow === 'lg',
          'shadow-xl': shadow === 'xl',
          'shadow-2xl': shadow === '2xl',
        },
      )}
    >
      <img
        className={classNames(
          'rounded-lg transition-all ease-in-out duration-500 delay-100 hover:scale-110',
          className,
        )}
        {...props}
      />
    </div>
  );
};

export const ReflectedImage = ({ wrapperClassName, shadow, ...imageProps }: ThumbnailProps) => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-col items-center lg:items-end">
      <div className="relative z-10 w-fit -mt-64 mr-24 md:mr-12 lg:mr-auto lg:mt-auto lg:absolute lg:top-48 lg:right-48 lg:translate-x-0">
        <Thumbnail wrapperClassName={wrapperClassName} shadow={shadow} {...imageProps} />
      </div>

      <div className="relative grayscale ml-24 lg:ml-auto">
        <img {...imageProps} className={classNames('rounded-xl', imageProps.className)} />
      </div>
    </div>
  );
};
