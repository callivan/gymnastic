import styled from 'styled-components';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  justifyContent: 'flex-end',

  width: '100%',
  height: '100%',
  minHeight: '300px',

  paddingInline: '48px',

  overflow: 'hidden',

  '@media(max-width: 768px)': {
    flexDirection: 'column-reverse',

    paddingInline: '24px',
  },

  '@media(max-width: 468px)': {
    paddingInline: '16px',
  },
});

export const MapWrapper = styled('div')({
  position: 'relative',

  width: '50%',
  height: '100%',

  '@media(max-width: 768px)': {
    width: '100%',
    height: '60%',
  },
});

export const Text = styled('span')(({ theme: { colors, fonts } }) => ({
  display: 'block',

  fontSize: fonts.fontSizes[16],
  fontWeight: fonts.fontWeight.light,
  lineHeight: fonts.lineHeight,
  color: colors.white,
  textAlign: 'right',

  '&.is-title': {
    fontWeight: fonts.fontWeight.bold,

    marginBottom: '16px',
  },

  '@media(max-width: 768px)': {
    textAlign: 'center',
  },
}));

export const Link = styled('a')(({ theme: { colors, fonts } }) => ({
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',

  fontSize: fonts.fontSizes[16],
  fontWeight: fonts.fontWeight.light,
  lineHeight: fonts.lineHeight,
  color: colors.white,
  textAlign: 'right',
  textDecoration: 'none',

  width: 'max-content',

  '&:hover > .line': {
    transform: 'scaleX(1)',
  },

  '@media(max-width: 768px)': {
    textAlign: 'center',
  },
}));

export const Line = styled('span')(({ theme }) => ({
  position: 'absolute',
  bottom: '-1px',
  left: '0px',

  width: '100%',
  height: '1px',

  backgroundColor: theme.colors.white,

  transformOrigin: 'left',
  transform: 'scaleX(0)',

  transition: 'transform .15s ease-in-out',
}));

export const Button = styled('button')(({ theme: { colors, fonts } }) => ({
  cursor: 'pointer',

  position: 'relative',

  display: 'flex',
  alignItems: 'flex-end',
  gap: '4px',

  width: 'max-content',

  fontSize: fonts.fontSizes[16],
  fontWeight: fonts.fontWeight.light,
  lineHeight: fonts.lineHeight,
  color: colors.white,
  textAlign: 'right',

  '&:hover > .line, &.active > .line': {
    transform: 'scaleX(1)',
  },

  '@media(max-width: 768px)': {
    textAlign: 'center',
  },
}));
