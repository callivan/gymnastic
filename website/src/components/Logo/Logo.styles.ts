import styled from 'styled-components';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
});

export const Text = styled('h1')(
  ({
    theme: {
      colors,
      fonts: { fontSizes, fontWeight, lineHeight },
    },
  }) => ({
    fontSize: fontSizes[64],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight,
    color: colors.white,

    '&.slogan': {
      width: 'max-content',

      fontSize: '18px',
    },
  }),
);
