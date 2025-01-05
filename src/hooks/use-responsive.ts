import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isMobile = useMediaQuery({ minWidth: 640 });
  const isTabletOrMobile = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return {
    isMobile,
    isTabletOrMobile,
    isDesktop,
  };
};
