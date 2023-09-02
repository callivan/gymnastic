import { Suspense, lazy, useLayoutEffect, useState } from 'react';
import { Layout } from '@modules';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAnimationContext } from '@contexts';
import { Img } from '@ui';

import { getHomePageImage } from './utils/request';

const PagePrices = lazy(() => import('./pages/Prices/index'));
const PageCoaches = lazy(() => import('./pages/Coaches/index'));
const PageMedia = lazy(() => import('./pages/Media/index'));
const PageContacts = lazy(() => import('./pages/Contacts/index'));
const PageError = lazy(() => import('./pages/Error/index'));

export function App() {
  const [homePageImg, setHomePageImg] = useState<{ img: string; preview: string } | null>(null);

  const { setAction } = useAnimationContext();

  useLayoutEffect(() => {
    const loadHomePageImg = async () => {
      const data = await getHomePageImage(() => console.error('Error: Empty home image!'));

      setHomePageImg(data ?? null);
    };

    loadHomePageImg();

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
              {homePageImg ? (
                <Img
                  src={homePageImg.img}
                  srcPreview={homePageImg.preview}
                  externalUrl={import.meta.env.VITE_STRAPI_URL}
                  alt="Фон"
                  style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                  }}
                />
              ) : null}

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
              {homePageImg ? (
                <Img
                  src={homePageImg.img}
                  srcPreview={homePageImg.preview}
                  externalUrl={import.meta.env.VITE_STRAPI_URL}
                  alt="Фон"
                  style={{
                    position: 'fixed',
                    top: '0px',
                    left: '0px',
                  }}
                />
              ) : null}

              <PageError key={'page-error'} />
            </>
          ),
        },
      ])}
    />
  );
}
