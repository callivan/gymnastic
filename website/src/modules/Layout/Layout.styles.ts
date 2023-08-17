import styled from 'styled-components';

export const Container = styled('main')({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100dvh',

  zIndex: 1,

  '& >  * > svg': {
    transform: 'translateY(-5px)',
  },
});
