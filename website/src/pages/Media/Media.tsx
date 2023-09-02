import { Empty, IModalPhotoProps, IModalVideoProps, Slider } from '@components';
import * as S from './Media.styles';
import { Scroll } from '@ui';
import { useLayoutEffect, useState } from 'react';
import { getMedias } from '@utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAnimationContext } from '@contexts';

export default function PageMedia() {
  const navigate = useNavigate();
  const pathname = useLocation();

  const { action } = useAnimationContext();

  const [isEmpty, setEmpty] = useState<boolean>(false);
  const [slides, setSlides] = useState<(IModalPhotoProps | IModalVideoProps)[]>([]);

  useLayoutEffect(() => {
    if (action !== 'page_start') return;

    const loadCoaches = async () => {
      const data = await getMedias((message) =>
        navigate('/error', { state: message, replace: true }),
      );
      setSlides((data as (IModalPhotoProps | IModalVideoProps)[]) ?? []);

      if (!data || !data.length) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    };

    loadCoaches();
  }, [action]);

  const siteName =
    import.meta.env.VITE_STRAPI_URL && typeof import.meta.env.VITE_STRAPI_URL === 'string'
      ? import.meta.env.VITE_STRAPI_URL.replace(/http(s)?:\/\//gi, '')
      : '';

  return (
    <>
      <Helmet>
        <title>Вверх | Медиа</title>
        <meta
          name="description"
          content="Фото и видео материалы учебно-тренировочного центра 'Вверх'"
        />
        <meta
          name="keywords"
          content="Гимнастика, Акробатика, Спорт, Дети, Вверх, Фото, Видео, Мероприятия"
        />

        <meta property="og:title" content="Вверх | Медиа" />
        <meta
          property="og:description"
          content="Фото и видео материалы учебно-тренировочного центра 'Вверх'"
        />
        <meta property="og:url" content={import.meta.env.VITE_STRAPI_URL + pathname} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content="/logo-social.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />

        <meta name="twitter:title" content="Вверх | Медиа" />
        <meta
          name="twitter:description"
          content="Фото и видео материалы учебно-тренировочного центра 'Вверх'"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={import.meta.env.VITE_STRAPI_URL + pathname} />
        <meta name="twitter:image" content="/logo-social.png" />
      </Helmet>
      <Scroll>
        <S.Wrapper>
          <Slider slides={slides} />
        </S.Wrapper>
      </Scroll>

      <Empty isEmpty={isEmpty} />
    </>
  );
}
