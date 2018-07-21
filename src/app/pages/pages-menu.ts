import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Features',
    group: true,
  },
  {
    title: 'Sentiment',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
  },
  {
    title: 'Personality',
    icon: 'nb-compose',
    link: '/pages/ui-features',
  },
  {
    title: 'Needmining',
    icon: 'nb-gear',
    link: '/pages/ui-features',
  },
  {
    title: 'Geospatial',
    icon: 'nb-location',
    link: '/pages/ui-features',
  },
];
