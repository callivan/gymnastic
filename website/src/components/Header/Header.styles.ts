import styled from 'styled-components';

export const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  width: '100%',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  height: 'max-content',

  paddingInline: '48px',
  paddingBlock: '16px',

  '@media(max-width: 768px)': {
    paddingInline: '24px',
  },

  '@media(max-width: 468px)': {
    paddingInline: '16px',
  },
});

export const TopContainer = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
});

export const TextContainer = styled('div')({
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  width: '100%',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  height: 'max-content',
});

export const SloganContainer = styled('div')((props) => ({
  '& > .header-logo': {
    position: 'absolute',
    top: '0px',
    left: '50%',

    display: 'flex',
    alignItems: 'flex-end',
    gap: '4px',

    color: props.theme.colors.white,

    '& > svg': {
      flexShrink: 0,
    },

    '@media(max-width: 595px)': {
      position: 'relative',
      top: 'auto',
      left: 'auto',

      width: '55px',
      height: '16px',
    },
  },

  '@media(max-width: 595px)': {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '8px',
  },
}));

export const Slogan = styled('span')(
  ({
    theme: {
      colors,
      fonts: { lineHeight, fontSizes, fontWeight },
    },
  }) => ({
    fontWeight: fontWeight.bold,
    fontSize: fontSizes[16],
    lineHeight,
    color: colors.white,

    '@media(max-width: 468px)': {
      fontSize: fontSizes[12],
    },
  }),
);

export const TextWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '8px',
});

export const Text = styled('span')(
  ({
    theme: {
      colors,
      fonts: { lineHeight, fontSizes, fontWeight },
    },
  }) => ({
    display: 'inline-block',

    fontWeight: fontWeight.light,
    fontSize: fontSizes[16],
    lineHeight,
    color: colors.white,

    width: 'max-content',

    '&.logo-text': {
      fontWeight: fontWeight.bold,
    },

    '@media(max-width: 468px)': {
      fontSize: fontSizes[12],

      '&.logo-text': {
        fontSize: fontSizes[16],
      },
    },
  }),
);

export const Button = styled('button')(
  ({
    theme: {
      colors,
      fonts: { lineHeight, fontSizes, fontWeight },
    },
  }) => ({
    fontWeight: fontWeight.light,
    fontSize: fontSizes[16],
    lineHeight,
    color: colors.white,
  }),
);
