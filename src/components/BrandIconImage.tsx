import { BrandIcon } from '../data/brandIcons';

interface BrandIconImageProps {
  icon?: BrandIcon;
  className?: string;
}

export const BrandIconImage = ({ icon, className = 'w-3.5 h-3.5' }: BrandIconImageProps) => {
  if (!icon) return null;

  return (
    <img
      src={icon.src}
      alt=""
      className={`${className} shrink-0 ${icon.monochrome ? 'dark:invert' : ''}`}
    />
  );
};
