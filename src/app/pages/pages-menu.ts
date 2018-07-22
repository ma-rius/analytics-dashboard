import {NbMenuItem} from '@nebular/theme';

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
    link: '/pages/dashboard',
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
    children: [
      {
        title: 'Heatmap',
        link: '/pages/geospatial/heatmap',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
];
