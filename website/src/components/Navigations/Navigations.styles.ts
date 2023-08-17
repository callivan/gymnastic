import styled from 'styled-components';

export const Wrapper = styled('div')({
  width: '100%',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
});

export const List = styled('ul')({
  display: 'flex',
  flexDirection: 'column',

  maxWidth: '800px',
  width: '100%',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  height: 'max-content',

  paddingInline: '48px',
  marginInline: 'auto',

  '@media(max-width: 768px)': {
    paddingInline: '24px',
  },

  '@media(max-width: 468px)': {
    paddingInline: '16px',
  },
});

export const Item = styled('li')({
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  maxWidth: '100%',

  paddingBlock: '24px',
  paddingInline: '48px',

  '@media(max-width: 468px)': {
    justifyContent: 'center',

    paddingInline: '0px',
  },
});

export const Button = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  maxWidth: '100%',
  height: 'max-content',
});
