import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover, &:active': {
    '& > .is-absolute': {
      opacity: 1,
    },

    '& > .text': {
      transform: 'translate(-5px, -5px)',
    },
  },
});

export const Text = styled('span')((props) => ({
  position: 'relative',

  textAlign: 'left',
  wordBreak: 'break-word',
  lineHeight: props.theme.fonts.lineHeight,
  fontSize: props.theme.fonts.fontSizes[48],
  fontWeight: props.theme.fonts.fontWeight.bold,
  color: props.theme.colors.white,

  maxWidth: '100%',
  height: 'max-content',

  zIndex: 1,

  transition: 'transform .3s ease-in-out',

  '&.is-absolute': {
    position: 'absolute',

    color: props.theme.colors.gray_dark,

    filter: 'blur(1px)',
  },

  '&.text': {
    color: props.theme.colors.white,

    transform: 'translate(-2px, -2px)',
  },
}));
