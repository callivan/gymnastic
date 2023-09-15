import { useLayoutEffect, useRef, useState } from 'react';
import { Card, Empty, TCardProps } from '@components';
import * as S from './Coaches.styles';
import { Scroll } from '@ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnimationContext } from '@contexts';
import { useCardAnimation } from './animations';
import { getCoaches } from '@utils';
import { animated } from '@react-spring/web';
import { Helmet } from 'react-helmet-async';

export default function PageCoaches() {
  const navigate = useNavigate();
  const pathname = useLocation();

  const [isEmpty, setEmpty] = useState<boolean>(false);
  const [coaches, setCoaches] = useState<TCardProps[]>([]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const { action } = useAnimationContext();
  const { startCard, reverseCard, stylesCard } = useCardAnimation(coaches.length);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!wrapperRef.current) return;

      const container = wrapperRef.current.querySelector('.container');

      if (!container) return;

      const containerHeight = container.getBoundingClientRect().height;
      const wrapperHeight = wrapperRef.current.getBoundingClientRect().height - 5;

      if (wrapperHeight <= containerHeight) {
        wrapperRef.current.style.display = 'block';
      } else {
        wrapperRef.current.style.display = 'flex';
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [wrapperRef.current]);

  useLayoutEffect(() => {
    switch (action) {
      case 'route':
        setTimeout(() => {
          startCard();
        }, 500);
        break;
      case 'back_home':
        reverseCard();
        break;
    }
  }, [action]);

  useLayoutEffect(() => {
    const loadCoaches = async () => {
      const data = await getCoaches((message) => {
        navigate('/error', { state: message, replace: true });
      });
      setCoaches(data ?? []);

      if (!data || !data.length) {
        setEmpty(true);
      } else {
        setEmpty(false);
      }
    };

    loadCoaches();
  }, []);

  return (
    <>
      <Helmet>
        <title>Вверх | Тренеры</title>
        <meta property="og:title" content="Вверх | Тренеры" />
        <meta name="twitter:title" content="Вверх | Тренеры" />
      </Helmet>

      <Scroll>
        <S.Wrapper ref={wrapperRef}>
          <S.Container className="container">
            {coaches.length &&
              stylesCard.map((styleProps, index) => (
                <animated.div key={coaches[index].id} style={styleProps}>
                  <Card
                    id={coaches[index].id}
                    imgUrl={coaches[index].imgUrl}
                    imgPreviewUrl={coaches[index].imgPreviewUrl}
                    firstname={coaches[index].firstname}
                    lastname={coaches[index].lastname}
                    coach_infos={coaches[index].coach_infos}
                  />
                </animated.div>
              ))}
          </S.Container>
        </S.Wrapper>
      </Scroll>

      <Empty isEmpty={isEmpty} />
    </>
  );
}
