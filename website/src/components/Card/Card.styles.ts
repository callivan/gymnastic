import styled from 'styled-components';

export const Container = styled('button')((props) => ({
  position: 'relative',

  width: '100%',
  height: '100%',

  backgroundColor: props.theme.colors.gray_dark,
}));

export const Wrapper = styled('div')({
  width: '240px',
  height: '100%',

  paddingBlock: '32px',
});

export const Info = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '32px',

  paddingInline: '16px',
});

export const NameContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Text = styled('span')(
  ({
    theme: {
      fonts: { fontSizes, fontWeight, lineHeight },
      colors,
    },
  }) => ({
    fontSize: fontSizes[32],
    fontWeight: fontWeight.light,
    lineHeight: lineHeight,
    color: colors.white,
    textAlign: 'right',

    '&.section-text': {
      fontSize: fontSizes[16],
      textAlign: 'left',
    },
  }),
);

export const InfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  width: '100%',
  height: 'max-content',
});

export const InfoBlock = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Section = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const Divider = styled('span')((props) => ({
  width: '100%',
  height: '1px',

  backgroundColor: props.theme.colors.white,
}));
