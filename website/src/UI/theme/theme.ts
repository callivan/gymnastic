import { transparentize } from 'polished';

export const theme = {
  colors: {
    black_dark_50: transparentize(0.5, '#000000'),
    gray_dark: '#232323',
    gray_dark_80: transparentize(0.2, '#232323'),
    white_80: transparentize(0.2, '#FFFFFF'),
    white: '#FFFFFF',
  },
  fonts: {
    lineHeight: '120%',
    fontSizes: { 12: '12px', 16: '16px', 32: '32px', 48: '48px', 64: '64px' },
    fontWeight: { bold: 700, regular: 400, light: 300 },
  },
};
