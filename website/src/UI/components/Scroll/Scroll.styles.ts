import styled from 'styled-components';

export const Container = styled('div')((props) => ({
  width: '100%',
  height: '100%',

  overflow: 'auto',

  '&.is-off': {
    overflow: 'hidden',
  },

  '@media screen and (min-width: 768px)': {
    'scrollbar-width': 'thin',
    'scrollbar-color': `${props.theme.colors.white_80} transparent`,

    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },

    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',

      margin: '5px',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: props.theme.colors.white_80,
      borderRadius: '10px',

      '&:hover': {
        backgroundColor: props.theme.colors.white,
      },
    },
  },
}));
