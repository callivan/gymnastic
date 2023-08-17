import { createGlobalStyle } from 'styled-components';

import { theme } from '@ui';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>((props) => ({
  '*': {
    scrollBehavior: 'smooth',

    '-webkit-font-smoothing': 'antialiased',

    boxSizing: 'border-box',

    outline: '1px solid transparent',

    margin: 0,
    padding: 0,
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    cursor: 'pointer',

    border: 'none',
    backgroundColor: 'transparent',
  },
  input: {
    border: 'none',
    backgroundColor: 'transparent',
  },
  ul: {
    listStyle: 'none',
  },
  'h1, h2, h3': {
    margin: '0px',
  },
  body: {
    position: 'relative',

    fontFamily: 'Roboto',

    backgroundColor: props.theme.colors.gray_dark,

    width: '100dvw',
    height: '100dvh',

    overflow: 'hidden',
  },
}));
