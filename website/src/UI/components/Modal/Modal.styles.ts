import styled from 'styled-components';

export const Wrapper = styled('div')(({ theme: { colors } }) => ({
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',

  overflow: 'auto',

  'scrollbar-width': 'thin',
  'scrollbar-color': `${colors.gray_dark_80} transparent`,

  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',

    margin: '5px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: colors.gray_dark_80,
    borderRadius: '10px',

    '&:hover': {
      backgroundColor: colors.white,
    },
  },
}));
