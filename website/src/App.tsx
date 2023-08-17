import { Suspense, lazy, useLayoutEffect } from 'react';
import { Layout } from '@modules';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAnimationContext } from '@contexts';
import { Img } from '@ui';

import bgDesktop from './assets/bg/bg-1440.webp';
import bgTablet from './assets/bg/bg-1024.webp';
import bgTabletSmall from './assets/bg/bg-768.webp';
import bgMobile from './assets/bg/bg-595.webp';
import bgMobileSmall from './assets/bg/bg-390.webp';
import bgPreview from './assets/bg/bg-preview.webp';
import { useMatchMedia } from './utils/hooks';

const PagePrices = lazy(() => import('./pages/Prices/index'));
const PageCoaches = lazy(() => import('./pages/Coaches/index'));
const PageMedia = lazy(() => import('./pages/Media/index'));
const PageContacts = lazy(() => import('./pages/Contacts/index'));
const PageError = lazy(() => import('./pages/Error/index'));

// eslint-disable-next-line sonarjs/cognitive-complexity
export function App() {
  const { setAction } = useAnimationContext();

  const { isDesktop, isTablet, isTableSmall, isMobile, isMobileSmall } = useMatchMedia({
    sizeNames: ['isDesktop', 'isTablet', 'isTableSmall', 'isMobile', 'isMobileSmall'],
    queries: [
      '(min-width: 1025px)',
      '(max-width: 1024px) and (min-width: 769px)',
      '(max-width: 768px) and (min-width: 596px)',
      '(max-width: 595px) and (min-width: 390px)',
      '(max-width: 390px)',
    ],
  });

  useLayoutEffect(() => {
    setAction('app_load');

    const handlePopstate = () => {
      if (/^\/$/gi.test(window.location.pathname)) {
        setAction('back_home');
      } else {
        setAction('route');
      }
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: (
            <>
              <Img
                src={
                  isDesktop
                    ? bgDesktop
                    : isTablet
                    ? bgTablet
                    : isTableSmall
                    ? bgTabletSmall
                    : isMobile
                    ? bgMobile
                    : isMobileSmall
                    ? bgMobileSmall
                    : ''
                }
                srcPreview={bgPreview}
                alt="Фон"
                style={{
                  position: 'fixed',
                  top: '0px',
                  left: '0px',
                }}
              />

              <Layout key={'layout'} />
            </>
          ),
          children: [
            {
              path: 'prices',
              element: (
                <Suspense fallback={<></>}>
                  <PagePrices key={'page-prices'} />
                </Suspense>
              ),
            },
            {
              path: 'coaches',
              element: (
                <Suspense fallback={<></>}>
                  <PageCoaches key={'page-coaches'} />
                </Suspense>
              ),
            },
            {
              path: 'media',
              element: (
                <Suspense fallback={<></>}>
                  <PageMedia key={'page-media'} />
                </Suspense>
              ),
            },
            {
              path: 'contacts',
              element: (
                <Suspense fallback={<></>}>
                  <PageContacts key={'page-contacts'} />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: '*',
          element: (
            <>
              <Img
                src={
                  isDesktop
                    ? bgDesktop
                    : isTablet
                    ? bgTablet
                    : isTableSmall
                    ? bgTabletSmall
                    : isMobile
                    ? bgMobile
                    : isMobileSmall
                    ? bgMobileSmall
                    : ''
                }
                srcPreview={bgPreview}
                alt="Фон"
                style={{
                  position: 'fixed',
                  top: '0px',
                  left: '0px',
                }}
              />
              <PageError key={'page-error'} />
            </>
          ),
        },
      ])}
    />
  );
}
