import styled from 'styled-components';

export const Wrapper = styled('div')({
  position: 'relative',

  width: '100dvw',
  height: '100dvh',
});

export const Container = styled('div')({
  position: 'relative',
  isolation: 'isolate',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: '1440px',
  height: '100%',

  paddingInline: '48px',
  marginInline: 'auto',

  '@media(max-width: 768px)': {
    paddingInline: '24px',
  },

  '@media(max-width: 468px)': {
    paddingInline: '16px',
  },
});

export const Error = styled('h2')(({ theme: { colors } }) => ({
  position: 'absolute',

  fontSize: 'max(100px, 30dvw)',
  fontWeight: 'bold',
  lineHeight: '90%',
  color: colors.black_dark_50,
  textAlign: 'center',

  zIndex: -1,
}));

export const Text = styled('span')(({ theme: { colors, fonts } }) => ({
  fontSize: fonts.fontSizes[32],
  fontWeight: fonts.fontWeight.bold,
  lineHeight: fonts.lineHeight,
  color: colors.white,
  wordBreak: 'break-word',
}));
