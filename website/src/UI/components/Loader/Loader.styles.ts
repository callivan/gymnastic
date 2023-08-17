import styled, { css, keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    stroke-dashoffset: 100;
  }

  50% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -90;
  }
`;

export const Wrapper = styled('div')(
  ({ theme: { colors } }) => ({
    pointerEvents: 'none',

    position: 'absolute',
    top: '50%',
    left: '50%',

    transformOrigin: 'center',
    transform: 'scale(1) translate(-50%, -50%)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '48px',
    height: '48px',

    color: colors.white,

    overflow: 'hidden',

    paddingTop: '10px',

    transition: 'transform .3s ease-in-out .50s, opacity .3s ease-in-out .9s',

    '&.is-loaded': {
      transformOrigin: 'top left',
      transform: 'scale(1.5) translate(-50%, -50%)',
      opacity: 0,
    },

    '&.not-padding': {
      paddingTop: '0px',
    },

    '& > svg > circle': {
      strokeDasharray: 100,
      strokeMiterlimit: 10,
      strokeLinecap: 'round',
      strokeWidth: 2,
    },
  }),
  () => css`
    & > svg > circle {
      animation: ${loading} 1s infinite linear;
    }
  `,
);

export const Circle = styled('div')(({ theme: { colors } }) => ({
  position: 'absolute',
  inset: '0px',

  borderRadius: '50%',
  backgroundColor: colors.white,

  clipPath: 'circle(0% at 50% 50%)',

  transition: 'clip-path 1.2s ease-in-out',

  '&.is-loaded': {
    clipPath: 'circle(100% at 50% 50%)',
  },
}));
