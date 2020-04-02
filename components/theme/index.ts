const baselineGridUnit = 6;

const fonts = `
  @font-face {
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 400;
    src: local('Noto Serif'), local('NotoSerif'), url(https://fonts.gstatic.com/s/notoserif/v6/ga6Iaw1J5X9T9RW6j9bNfFcWaDq8fMU.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Noto Sans'), local('NotoSans'), url(https://fonts.gstatic.com/s/notosans/v7/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

type breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface Theme {
  primary: string;
  secondary: string;
  light: string;
  grey: string;
  yellow: string;
  primaryBackground: string;
  secondaryBackground: string;
  primaryFont: string;
  secondaryFont: string;
  spacing: {
    unit: number;
    half: string;
    single: string;
    double: string;
    triple: string;
    multiple: (n: number) => string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    keys: [breakpoint, breakpoint, breakpoint, breakpoint, breakpoint];
  };
  maxWidth: string;
  transitions: {
    all: string;
    color: string;
  };
  fonts: string;
}

export const theme: Theme = {
  primary: '#717171',
  secondary: '#252525',
  light: '#eaeaea',
  grey: '#a5a3a3',
  yellow: '#eab871',
  primaryBackground: '#ffffff',
  secondaryBackground: '#d8d8d8',
  primaryFont: `'Noto Sans', sans-serif`,
  secondaryFont: `'Noto Serif', serif`,
  spacing: {
    unit: baselineGridUnit,
    half: `${baselineGridUnit * 0.5}px`,
    single: `${baselineGridUnit}px`,
    double: `${baselineGridUnit * 2}px`,
    triple: `${baselineGridUnit * 3}px`,
    multiple: (n: number) => `${baselineGridUnit * n}px`,
  },
  breakpoints: {
    xs: '360px',
    sm: '600px',
    md: '768px',
    lg: '1024px',
    xl: '1800px',
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  },
  maxWidth: '1200px',
  transitions: {
    all: 'all .2s ease-out',
    color: 'fill .3s ease-in, color .3s ease-in, opacity .3s ease-in',
  },
  fonts,
};
