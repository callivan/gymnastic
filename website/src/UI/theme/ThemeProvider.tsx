import { ThemeProvider as OriginalThemeProvider } from 'styled-components';
import 'normalize.css';
import './fonts/index.css';
import { GlobalStyle } from './Global';
import { theme } from '@ui';

export const ThemeProvider: React.FC<{ children?: React.ReactElement }> = ({ children }) => (
  <OriginalThemeProvider theme={theme}>
    {children}

    <GlobalStyle />
  </OriginalThemeProvider>
);
