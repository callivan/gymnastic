import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from '@ui';
import { AnimationProvider } from '@contexts';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <AnimationProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AnimationProvider>
  </HelmetProvider>,
);
