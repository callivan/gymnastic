import styled from 'styled-components';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  height: '100%',

  paddingInline: '48px',

  '@media(max-width: 768px)': {
    paddingInline: '24px',
  },

  '@media(max-width: 468px)': {
    paddingInline: '16px',
  },
});

export const Container = styled('div')({
  position: 'relative',

  display: 'grid',
  gridTemplateColumns: '324px 1px max-content',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  gridAutoRows: 'max-content',
  gap: '0px 32px',

  width: '100%',
  maxWidth: 'max-content',
  height: 'max-content',

  padding: '16px',
  marginInline: 'auto',

  '@media(max-width: 595px)': {
    gridTemplateColumns: '1fr',
    gap: '32px 0px',
  },
});

export const Name = styled('h2')(
  ({
    theme: {
      colors,
      fonts: { fontSizes, fontWeight, lineHeight },
    },
  }) => ({
    wordBreak: 'break-word',
    fontWeight: fontWeight.regular,
    fontSize: fontSizes[32],
    lineHeight,
    color: colors.white,
    textAlign: 'right',

    paddingBlock: '32px 16px',

    '@media(max-width: 595px)': {
      textAlign: 'left',
    },
  }),
);

export const Divider = styled('div')((props) => ({
  width: '100%',
  height: '100%',

  backgroundColor: props.theme.colors.white,

  '&.price-divider': {
    position: 'absolute',
    bottom: '0px',
    left: '0px',

    width: '100%',
    height: '1px',
  },
}));

export const PricesList = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  width: 'max-contet',
  height: 'max-content',
});

export const Price = styled('li')({
  position: 'relative',

  display: 'flex',
  alignItems: 'flex-end',
  gap: '8px',

  width: 'max-content',
});

export const Text = styled('span')(
  ({
    theme: {
      colors,
      fonts: { fontSizes, fontWeight, lineHeight },
    },
  }) => ({
    wordBreak: 'break-word',
    fontWeight: fontWeight.bold,
    fontSize: fontSizes[32],
    lineHeight,
    color: colors.white,

    width: 'max-content',
    height: 'max-content',

    '&.text-light': {
      fontWeight: fontWeight.light,
      fontSize: fontSizes[16],
      textAlign: 'right',

      transform: 'translateY(100%)',
    },
  }),
);
