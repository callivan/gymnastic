import styled from 'styled-components';

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  height: '100%',
  minHeight: '416px',

  paddingInline: '48px',

  '@media(max-width: 768px)': {
    paddingInline: '24px',
  },

  '@media(max-width: 468px)': {
    paddingInline: '16px',
  },
});
