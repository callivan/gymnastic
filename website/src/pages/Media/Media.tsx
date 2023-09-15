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

  return (
    <>
      <Helmet>
        <title>Вверх | Медиа</title>
        <meta property="og:title" content="Вверх | Медиа" />
        <meta name="twitter:title" content="Вверх | Медиа" />
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
