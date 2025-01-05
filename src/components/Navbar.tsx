'use client';

import { Title } from './Typography';
import { Icon } from './Icon';

type NavbarProps = {
  title: string;
};

export const Navbar = ({ title }: NavbarProps) => {
  return (
    <>
      <div className="navbar fixed z-50 bg-neutral-200/75 shadow-sm backdrop-blur-sm">
        <div className="w-full">
          <Icon symbol="Monogram" size="lg" stroke="#525252" />
          <div className="divider divider-horizontal divider-accent !mx-1" />
          <Title hideAnimation content={title} className="text-neutral-600 !text-2xl"></Title>
        </div>
      </div>
    </>
  );
};
