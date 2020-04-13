import { Theme } from '../theme';

interface ResponsiveMargin {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type marginValue = ResponsiveMargin | number;

type direction = 'top' | 'right' | 'bottom' | 'left';

export interface MarginDescriptor {
  top?: marginValue;
  right?: marginValue;
  bottom?: marginValue;
  left?: marginValue;
}

const getMarginStyles = (margin: marginValue, direction: direction, theme: Theme) =>
  typeof margin === 'number'
    ? `margin-${direction}: ${theme.spacing.multiple(margin)};`
    : theme.breakpoints.keys
        .reduce((styles: string[], breakpoint) => {
          if (margin[breakpoint]) {
            let style = `margin-${direction}: ${theme.spacing.multiple(<number>margin[breakpoint])};`;
            if (styles.length) {
              style = `@media (min-width: ${theme.breakpoints[breakpoint]}) { ${style} }`;
            }
            styles.push(style);
          }
          return styles;
        }, [])
        .join(' ');

export const withMargins = ({ theme, margin }: { theme: Theme; margin?: MarginDescriptor }) =>
  margin
    ? Object.keys(margin)
        .map((direction) => getMarginStyles(<marginValue>margin[<direction>direction], <direction>direction, theme))
        .join(' ')
    : '';
