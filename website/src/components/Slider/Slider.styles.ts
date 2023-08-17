import styled from 'styled-components';

export const Container = styled('div')({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',

  overflow: 'hidden',
});

export const Wrapper = styled('div')({
  width: '100%',
  minWidth: '250px',
  maxWidth: '1048px',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  height: 'max-content',
  maxHeight: '392px',

  overflow: 'hidden',
});

export const Button = styled('button')(({ theme: { colors } }) => ({
  position: 'relative',

  color: colors.white,
  lineHeight: '0',

  transition: 'color . 3s ease-in-out',

  '&:disabled': {
    cursor: 'default',
    color: colors.white_80,
  },

  '&.is-rotate': {
    transform: 'rotate(180deg)',
  },

  '&.is-item': {
    width: '100%',
    height: '100%',

    '&:hover > div': {
      opacity: 1,
    },
  },

  '&.is-modal': {
    position: 'absolute',
    top: '24px',
    right: '24px',
  },
}));

export const Hover = styled('div')(({ theme: { colors } }) => ({
  pointerEvents: 'none',

  position: 'absolute',
  inset: '0px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: colors.black_dark_50,
  color: colors.white,

  opacity: 0,

  transition: 'opacity .3s ease-in-out',
}));

export const List = styled('ul')({
  display: 'grid',
  gridAutoColumns: '250px',
  gridAutoRows: '120px',
  gridAutoFlow: 'dense',
  gap: '16px',

  width: 'max-content',
  maxWidth: '100%',
  maxHeight: '416px',
  height: 'max-content',

  scrollSnapType: 'x mandatory',
  overflowX: 'auto',
  overflowY: 'hidden',

  marginInline: 'auto',
});

export const Img = styled('img')({
  width: '100%',
  height: '100%',

  objectFit: 'cover',
  objectPosition: 'center',

  border: 'none',
});
