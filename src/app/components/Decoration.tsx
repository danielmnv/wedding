import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';

export const Decoration = ({ src, className }: { src: string; className?: string }) => {
  return (
    <div className={classNames(className, 'absolute')}>
      <ScrollAnimation
        animateIn="slide-in-fwd-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
        animateOnce={true}
        offset={50}
      >
        <img className="w-auto h-28 md:h-40" src={src} alt="" />
      </ScrollAnimation>
    </div>
  );
};
