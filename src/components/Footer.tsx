import { Icon } from './Icon';

export const Footer = () => {
  return (
    <footer>
      <div className="p-2 flex items-center justify-between gap-x-5">
        <div>
          <a href="https://danielmv.com" target="_blank">
            <Icon symbol="Logo" size="md" />
          </a>
        </div>

        <a
          href="https://danielmv.com"
          target="_blank"
          className="flex items-center gap-x-2 font-bold text-sm md:text-base"
        >
          <span>Made with </span>
          <Icon symbol="Heart" size="md" />
          <span>by</span>
          <span className="underline">Daniel Molina!</span>
        </a>
      </div>
    </footer>
  );
};
