import { ProjectLink } from '../types';

export interface BrandIcon {
  src: string;
  monochrome?: boolean;
}

const icon = (name: string, monochrome = false): BrandIcon => ({
  src: `/assets/icons/${name}.svg`,
  monochrome,
});

const hostIcons: [RegExp, BrandIcon][] = [
  [/github\.com/, icon('github', true)],
  [/itch\.io/, icon('itchdotio')],
  [/steampowered\.com/, icon('steam', true)],
  [/linkedin\.com/, icon('linkedin')],
  [/play\.google\.com/, icon('googleplay')],
  [/instagram\.com/, icon('instagram')],
  [/youtu\.?be/, icon('youtube')],
];

const linkIcons: Partial<Record<ProjectLink['type'], BrandIcon>> = {
  github: icon('github', true),
  itchio: icon('itchdotio'),
  steam: icon('steam', true),
  linkedin: icon('linkedin'),
  googleplay: icon('googleplay'),
  instagram: icon('instagram'),
};

export const getUrlIcon = (url: string) => hostIcons.find(([pattern]) => pattern.test(url))?.[1];

export const getLinkIcon = (link: ProjectLink) => linkIcons[link.type] ?? getUrlIcon(link.url);
